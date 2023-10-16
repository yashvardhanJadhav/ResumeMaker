const express = require('express');
const { body, validationResult } = require('express-validator');
const getUserId = require('../middleware/getUserId');
const router = express.Router()
const PersonalInfoSchema = require('../models/PersonalInfo')
const ExperienceSchema = require('../models/Experience')
const EducationSchema = require('../models/Education')
const SummarySchema = require('../models/Summary')
const skillSchema = require('../models/Skill');
const projectSchema = require('../models/Project');

router.get('/userCred/getUserInfo', getUserId, async (req, res) => {
    try {
        const personalInfo = await PersonalInfoSchema.find({ user: req.user.id })
        const experience = await ExperienceSchema.find({ user: req.user.id })
        const education = await EducationSchema.find({ user: req.user.id })
        const summary = await SummarySchema.find({ user: req.user.id })
        const project = await projectSchema.find({ user: req.user.id })
        const skill = await skillSchema.find({ user: req.user.id })
        res.send({ personalInfo, experience, education, project, summary, skill })
    }
    catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

// post request for personalInfo of user
router.post('/userCred/personalInfo', getUserId, [
    body('firstName', 'First Name is of atleast 3 characters').isLength({ min: 3 }),
    body('lastName', 'Last Name is of atleast 3 characters').isLength({ min: 3 }),
    body('address', 'Address can not be empty').notEmpty(),
    body('city', 'City can not be empty').notEmpty(),
    body('country', 'Country can not be empty').notEmpty(),
    // body('zipCode', 'ZIP code can not be empty').notEmpty(),
    body('email', 'Enter a Valid Email').isEmail(),
    // body('linkedin', 'LinkedIn can not be empty').notEmpty(),
    // body('github', 'Github can not be empty').notEmpty(),
    // body('personalWebsite', 'Personal Website can not be empty').notEmpty(),
    // body('phone', 'Phone can not be empty').notEmpty(),
], async (req, res) => {

    // CHECKING ERROR BY EXPRESS VALIDATOR
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // CREATING A NEW PERSONALINFO 
        const personalInfo = await PersonalInfoSchema.create({
            user: req.user.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            zipCode: req.body.zipCode,
            email: req.body.email,
            linkedin: req.body.linkedin,
            github: req.body.github,
            personalWebsite: req.body.personalWebsite,
            phone: req.body.phone
        })
        success = true
        res.send({ success })
    }
    catch (error) {
        res.status(401).send({ success, error: "Please Authenticate with valid token" })
    }
})

// Experience section
// Experience - create education

router.post('/userCred/experience', getUserId, [
    body('employer', 'Employer can not be empty').notEmpty(),
    body('jobTitle', 'Job Title Name is of atleast 3 characters').notEmpty(),
    body('jobDescription', 'Job Description can not be empty').notEmpty(),
    body('city', 'City can not be empty').notEmpty(),
    body('state', 'State can not be empty').notEmpty(),
    body('startDate', 'Start Date can not be empty').notEmpty(),
    body('endDate', 'End Date can not be empty').notEmpty(),
], async (req, res) => {

    // CHECKING ERROR BY EXPRESS VALIDATOR
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // CREATING A NEW PERSONALINFO 
        const experience = await ExperienceSchema.create({
            user: req.user.id,
            employer: req.body.employer,
            jobTitle: req.body.jobTitle,
            jobDescription: req.body.jobDescription,
            city: req.body.city,
            state: req.body.state,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
        success = true
        res.send({ success })
    }
    catch (error) {
        res.status(401).send({ success, error: "Please Authenticate with valid token" })
    }
})

// Experience - delete education
router.delete('/userCred/deleteExperience/:id', getUserId, async (req, res) => {
    try {

        // CHECKING WHETHER A NOTE ID GIVE IS USER IS VALID OR NOT
        let experience = await ExperienceSchema.findById(req.params.id);
        if (!experience) {
            return res.status(404).json({ error: "Experience not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (experience.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // DELETING THE NOTE
        const experience1 = await ExperienceSchema.findByIdAndDelete(req.params.id);
        res.json({ success: "Experience deleted successfully" })
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

//Experience - Experience update
router.put('/userCred/updateExperience/:id', getUserId, async (req, res) => {
    const { employer, jobTitle, jobDescription, city, state, startDate, endDate } = req.body
    try {

        // CREATE A NEW NOTE AND UPDATIGN THE GIVEN UPDATES BY REQ.BODY
        const newExperience = {}
        if (employer) { newExperience.employer = employer }
        if (jobTitle) { newExperience.jobTitle = jobTitle }
        if (jobDescription) { newExperience.jobDescription = jobDescription }
        if (city) { newExperience.city = city }
        if (state) { newExperience.state = state }
        if (startDate) { newExperience.startDate = startDate }
        if (endDate) { newExperience.endDate = endDate }

        // CHECKING WHETHER THE NOTE ID GIVEN BY USER IS VALID IS OR NOT
        let exp = await ExperienceSchema.findById(req.params.id);
        if (!exp) {
            return res.status(404).json({ error: "Experience not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (exp.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // FINDING THAT NOTE AND UPDATING THE NOTE
        exp = await ExperienceSchema.findByIdAndUpdate(req.params.id, { $set: newExperience }, { new: true })
        res.json(exp);

    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

// Education section
// education - create education
router.post('/userCred/education', getUserId, [
    body('schoolName', 'School name can not be empty').notEmpty(),
    body('city', 'City can not be empty').notEmpty(),
    body('degree', 'Degree can not be empty').notEmpty(),
    body('fieldOfStudy', 'Field of Study  can not be empty').notEmpty(),
    body('score', 'Score of Study  can not be empty').notEmpty(),
    body('state', 'State can not be empty').notEmpty(),
    body('graduationDate', "Graduation Date can not be empty").notEmpty()
], async (req, res) => {

    // CHECKING ERROR BY EXPRESS VALIDATOR
    let success = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // CREATING A NEW PERSONALINFO 
        const education = await EducationSchema.create({
            user: req.user.id,
            schoolName: req.body.schoolName,
            city: req.body.city,
            degree: req.body.degree,
            fieldOfStudy: req.body.fieldOfStudy,
            score: req.body.score,
            state: req.body.state,
            graduationDate: req.body.graduationDate,
        })
        success = true
        res.send({ success })
    }
    catch (error) {
        res.status(401).send({ success, error: " yashvardhan Please Authenticate with valid token" })
    }
})

// education - delete Education
router.delete('/userCred/deleteEducation/:id', getUserId, async (req, res) => {
    try {

        // CHECKING WHETHER A NOTE ID GIVE IS USER IS VALID OR NOT
        let education = await EducationSchema.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ error: "Education not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (education.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // DELETING THE NOTE
        const education1 = await EducationSchema.findByIdAndDelete(req.params.id);
        res.json({ success: "Education deleted successfully" })
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

// education - update education
router.put('/userCred/updateEducation/:id', getUserId, async (req, res) => {

    const { schoolName, city, degree, fieldOfStudy, score, state, graduationDate } = req.body
    try {

        // CREATE A NEW NOTE AND UPDATIGN THE GIVEN UPDATES BY REQ.BODY
        const newEducation = {}
        if (schoolName) { newEducation.schoolName = schoolName }
        if (city) { newEducation.city = city }
        if (degree) { newEducation.degree = degree }
        if (fieldOfStudy) { newEducation.fieldOfStudy = fieldOfStudy }
        if (score) { newEducation.score = score }
        if (state) { newEducation.state = state }
        if (graduationDate) { newEducation.graduationDate = graduationDate }

        // CHECKING WHETHER THE NOTE ID GIVEN BY USER IS VALID IS OR NOT
        let edu = await EducationSchema.findById(req.params.id);
        if (!edu) {
            return res.status(404).json({ error: "Education not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (edu.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // FINDING THAT NOTE AND UPDATING THE NOTE
        edu = await EducationSchema.findByIdAndUpdate(req.params.id, { $set: newEducation }, { new: true })
        res.json(edu);
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})


// PROJECT SECTION
// project - create project
router.post('/userCred/project', getUserId, [
    body('projectName', 'Project Name name can not be empty').notEmpty(),
    body('projectDescription', 'Project Description  can not be empty').notEmpty(),
    body('link', 'Link can not be empty').notEmpty(),
    body('startDate', 'Start Date can not be empty').notEmpty(),
    body('endDate', 'End Date can not be empty').notEmpty(),
], async (req, res) => {

    // CHECKING ERROR BY EXPRESS VALIDATOR
    let success = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // CREATING A NEW PROJECT 
        const projects = await projectSchema.create({
            user: req.user.id,
            projectName: req.body.projectName,
            projectDescription: req.body.projectDescription,
            link: req.body.link,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
        success = true
        res.send({ success })
    }
    catch (error) {
        res.status(401).send({ success, error: " Please Authenticate with valid token" })
    }
})


// project - delete project
router.delete('/userCred/deleteProject/:id', getUserId, async (req, res) => {
    try {

        // CHECKING WHETHER A NOTE ID GIVE IS USER IS VALID OR NOT
        let project = await projectSchema.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: "Project not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (project.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // DELETING THE NOTE
        const project1 = await projectSchema.findByIdAndDelete(req.params.id);
        res.json({ success: "project deleted successfully" })
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

//project - update project
router.put('/userCred/updateProject/:id', getUserId, async (req, res) => {


    const { projectName, projectDescription, link, startDate, endDate } = req.body
    try {

        // CREATE A NEW NOTE AND UPDATIGN THE GIVEN UPDATES BY REQ.BODY
        const newProject = {}
        if (projectName) { newProject.projectName = projectName }
        if (projectDescription) { newProject.projectDescription = projectDescription }
        if (link) { newProject.link = link }
        if (startDate) { newProject.startDate = startDate }
        if (endDate) { newProject.endDate = endDate }

        // CHECKING WHETHER THE NOTE ID GIVEN BY USER IS VALID IS OR NOT
        let pro = await projectSchema.findById(req.params.id);
        if (!pro) {
            return res.status(404).json({ error: "Project not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (pro.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // FINDING THAT NOTE AND UPDATING THE NOTE
        pro = await projectSchema.findByIdAndUpdate(req.params.id, { $set: newProject }, { new: true })
        res.json(pro);
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

//SKILL SECTION

//skill - create skill
router.post('/userCred/skill', getUserId, [
    body('skill', 'Skill can not be empty').notEmpty(),
    body('skillLevel', 'Skill level can not be empty').notEmpty()
], async (req, res) => {

    // CHECKING ERROR BY EXPRESS VALIDATOR
    let success = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // CREATING A NEW PERSONALINFO 
        const skills = await skillSchema.create({
            user: req.user.id,
            skill: req.body.skill,
            skillLevel: req.body.skillLevel
        })
        success = true
        res.send({ success })
    }
    catch (error) {
        res.status(401).send({ success, error: " Please Authenticate with valid token" })
    }
})
// skill - delete skill
router.delete('/userCred/deleteSkill/:id', getUserId, async (req, res) => {
    try {

        // CHECKING WHETHER A NOTE ID GIVE IS USER IS VALID OR NOT
        let skill = await skillSchema.findById(req.params.id);
        if (!skill) {
            return res.status(404).json({ error: "Skill not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (skill.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // DELETING THE NOTE
        const skill1 = await skillSchema.findByIdAndDelete(req.params.id);
        res.json({ success: "skill deleted successfully" })
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

//skill - update  skill
router.put('/userCred/updateSkill/:id', getUserId, async (req, res) => {


    const {skill, skillLevel } = req.body
    try {

        // CREATE A NEW NOTE AND UPDATIGN THE GIVEN UPDATES BY REQ.BODY
        const newSkill = {}
        if (skill) { newSkill.skill = skill }
        if (skillLevel) { newSkill.skillLevel = skillLevel }

        // CHECKING WHETHER THE NOTE ID GIVEN BY USER IS VALID IS OR NOT
        let skillTemp = await skillSchema.findById(req.params.id);
        if (!skillTemp) {
            return res.status(404).json({ error: "Skill not found" })
        }

        // CHECKING WHETHER THE NOTE GIVEN BY USER IS BELONG TO THAT USER
        if (skillTemp.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Please login with correct credentials" })
        }

        // FINDING THAT NOTE AND UPDATING THE NOTE
        skillTemp = await skillSchema.findByIdAndUpdate(req.params.id, { $set: newSkill }, { new: true })
        res.json(skillTemp);
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate with valid token" })
    }
})

//summary section
router.post('/userCred/summary', getUserId, [
    body('summaryText', 'Summary is of atleast 20 characters').isLength({ min: 20 }),

], async (req, res) => {

    // CHECKING ERROR BY EXPRESS VALIDATOR
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // CREATING A NEW PERSONALINFO 
        const summary = await SummarySchema.create({
            user: req.user.id,
            summaryText: req.body.summaryText
        })
        success = true
        res.send({ success })
    }
    catch (error) {
        res.status(401).send({ success, error: "Please Authenticate with valid token" })
    }
})

module.exports = router;