import model from "../models/queries.js"

async function renderClubPage(req, res) {
    try {
        const messages = await model.getMessages();
        await res.render('clubPage', {messages});
    } catch (error) {
        console.log(`error at renderClubPage(), ${error}`);
    }
}

export default renderClubPage;