const renderForm = (req, res) => {
        res.render('new');
}

const postForm = (req, res) => {
    console.log("username to be saved: ", req.body.username);
    res.end();
}

export default {renderForm, postForm};