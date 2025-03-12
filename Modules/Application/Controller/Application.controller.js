
const Application = require("../../../DB/models/Application.model");


const ViewApplication =  async (req, res) => {
    try {
        const applications = await Application.find();

        return res.status(200).json( applications );
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
}

const CreateApplication = async (req, res) => {
    try{
        const application = req.body;
        application.CV = {
            data: req.file.buffer,
            contentType: req.file.mimetype,
        };
        if(!req.file){
            return res.status(201).send("file not uploaded");
        }
        const newApplication = await Application.create(application);

        return res.status(201).json({massage: "file uploaded successfully", Data: newApplication , file:{fileName: req.file.filename , path: req.file.path, size: req.file.size}});

    }catch(err){
        return res.status(401).json({ message: "something went wrong", err: err.message });
    }
}



module.exports = {
    ViewApplication,
    CreateApplication
}


