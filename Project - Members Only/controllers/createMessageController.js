async function renderCreateMessage(req, res) {
    try {
        res.render("createMessage");
    } catch (error) {
        console.log(`error at renderCreateMessage(), ${error}`);
    }
}

export default renderCreateMessage;