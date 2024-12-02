import model from "../models/queries.js"

async function renderCreateMessage(req, res) {
    try {
        const user = req.user;
        res.render("createMessage", {user});
    } catch (error) {
        console.log(`error at renderCreateMessage(), ${error}`);
    }
}

async function createMessage(req, res) {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).send("You must be logged in to create a message.");
        }

        const firstname = user.firstname;
        const lastname = user.lastname;
        const user_id = user.id;
        const date_added = new Date();

        const title = req.body.title;
        const message = req.body.message;

        await model.createMessageQuery(firstname, lastname, title, message, date_added, user_id);
        
        await res.redirect('/clubPage');
    } catch (error) {
        console.log(`error at createMessage(), ${error}`);
    }
}

export default {renderCreateMessage, createMessage};