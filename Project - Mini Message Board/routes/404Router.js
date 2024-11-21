function notFound(req, res) {
    res.status(404).render('ejs404');
}

export default notFound;