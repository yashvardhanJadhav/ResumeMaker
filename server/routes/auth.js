const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getUserId = require('../middleware/getUserId');
const router = express.Router()
const User = require('../models/User');

const WEB_TOKEN_SECRET = "ITISASECRETNEEDTOKEPTSECRET"

router.post('/auth/createUser', [
    body('name', 'Name is of atlsast 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password is of atleast 3 characters').isLength({ min: 3 }).exists()
], async (req, res) => {
    let success = false
    try {
        //checking whether the use already exist or not
        const findUser = await User.findOne({
            email: req.body.email
        })
        if (findUser != null) {
            return res.status(400).json({ success, errors: [{ msg: "User with these email is already exist!" }] });
        }

        // checking express validator errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //create salt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);

        // create a user
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            alreadyResume: req.body.alreadyResume
        })

        //creating a json web token
        const data = {
            user: {
                id: user.id
            }
        }
        success = true
        const token = jwt.sign(data, WEB_TOKEN_SECRET);
        res.send({ success, token })
    }
    catch (err) {
        success = false
        res.status(400).json({ success, errors: "Some Internal Error Occured!" })
    }
})

// login user
router.post('/auth/login', [

    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password can not be blank').exists(),

], async (req, res) => {
    try {

        // CHECKING USER THAT ALREADY EXIST  
        let success = false;
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success, error: "Please login with correct Credentials!" })
        }
       

        // COMPARING THE BCRYPT PASSWORD WITH THE GIVEN PASSWORD
        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ success, error: "Please login with correct Credentials!" })
        }

        // CHECKING ERROR IN EXPRESS VALIDATOR
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        // CREATING A JSON WEB TOKEN BY USERS ID AS STRING AND SECOND GIVING A SECRET AS WEB_TOKEN_SECRET
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, WEB_TOKEN_SECRET);
        success = true;
        res.json({ success, token })
    }
    catch (error) {
        success = false
        res.status(500).json({ success, error: "Some Internal Occured" })
    }
})

// update user
router.put('/auth/updateUser/:email', getUserId, async (req, res) => {
    const { name, email, passwordbody, alreadyResume } = req.body
    try {

        // CREATE A NEW NOTE AND UPDATIGN THE GIVEN UPDATES BY REQ.BODY
        const newUser = {}
        if (name) { newUser.name = name }
        if (email) { newUser.email = email }
        if (passwordbody) { newUser.password = passwordbody }
        if (alreadyResume) { newUser.alreadyResume = alreadyResume }


        const filter = { email: req.params.email };

        // `doc` is the document _before_ `update` was applied
        const query = User.where({ email: req.params.email });
        const userCheck = await query.findOne();


        if (!userCheck) {
            return res.status(404).json({ error: "User not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (userCheck.email !== req.params.email) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }
        // FINDING THAT NOTE AND UPDATING THE NOTE  
        const updatedUser = await User.findOneAndUpdate(query, newUser);

        res.json(updatedUser);

    } catch (error) {
        res.status(401).send({ error: "hello yashvardhan Please Authenticate with valid token" })
    }
})

// get user details
router.post('/auth/getUser', getUserId, async (req, res) => {
    try {
        const userId = req.user.id;

        // TAKING USER DETAILS BY THEIR BY USERID EXCEPTING PASSWORD
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }
    catch (error) {
        res.status(500).json({ error: "Some Internal Occured" })
    }
})

module.exports = router;