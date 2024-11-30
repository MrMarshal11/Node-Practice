async function indexRender(req, res) {
    try {
        await res.render('index');
    } catch (error) {
        console.log(`error at indexRender(), ${error}`);
        res.status(500).send('Server side error');
    }
}

export default indexRender;