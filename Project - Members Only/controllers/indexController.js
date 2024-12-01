async function indexRender(req, res) {
    try {
        const url = req.path.slice(1) || "login"; // Extract URL path for indexRoute 
        await res.render('index', {url});
    } catch (error) {
        console.log(`error at indexRender(), ${error}`);
        res.status(500).send('Server side error');
    }
}

export default indexRender;