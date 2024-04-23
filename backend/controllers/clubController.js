const club = require('../models/clubModel');

const mongoose = require('mongoose');


//get all forms
const club_index = async (req, res) => {
    const Club = await club.find({}).sort({ createdAt: -1 });

    res.status(200).json(Club);
}


//get single form
const club_details = (req, res) => {
    const id = req.params.id;
    club.findById(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}


//create form
const club_create = async (req, res) => {

    const { name, email, enrollmentNumber, phoneNumber, previousExperience, videoUrl} = req.body;

    let emptyFields = [];

    if (!name) {
        emptyFields.push("name");
    }
    if (!email) {
        emptyFields.push("email");
    }
    if (!enrollmentNumber) {
        emptyFields.push("enrollmentNumber");
    }
    if (!phoneNumber) {
        emptyFields.push("phoneNumber");
    }
    if (!previousExperience) {
        emptyFields.push("previousExperience");
    }
    if (!videoUrl) {
        emptyFields.push("videoUrl");
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ message: "Please fill the following fields", emptyFields });
    }

    try{
        const newClub = await club.create({
            name,
            email,
            enrollmentNumber,
            phoneNumber,
            previousExperience,
            videoUrl
        });
        res.status(200).json(newClub);
    
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    
}


module.exports = {
    club_index,
    club_details,
    club_create
}