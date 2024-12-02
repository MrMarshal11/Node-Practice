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

async function indexRenderUser(req, res) {
    try {
        const user = req.user;

        const url = req.path.slice(1) || "login"; // Extract URL path for indexRoute 

        await res.render('loggedInPage', {user, url});
    } catch (error) {
        console.log(`error at indexRenderUser(), ${error}`);
        res.status(500).send('Server side error');
    }
}

export default {renderClubPage, deleteMessage, indexRenderUser};