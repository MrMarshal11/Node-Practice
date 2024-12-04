async function renderIndex(req, res) {
    try {
        res.render("index");
    } catch (error) {
        console.log(`error at renderIndex(), ${error}`);
    }
}

export default {renderIndex};