import model from "../models/queries.js"

async function renderClubPage(req, res) {
    try {
        const messages = await model.getMessages();
        const user = req.user;
        await res.render('clubPage', {messages, user});
    } catch (error) {
        console.log(`error at renderClubPage(), ${error}`);
    }
}

async function deleteMessage(req, res) {
    try {
        const { id } = req.body;
        await model.deleteMessageQuery(id);
        await res.redirect('/clubPage');
    } catch (error) {
        console.log(`error at deleteMessage(), ${error}`);
    }
}

export default {renderClubPage, deleteMessage};