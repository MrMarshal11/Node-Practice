async function renderClubPage(req, res) {
    try {
        res.render('clubPage');
    } catch (error) {
        console.log(`error at renderClubPage(), ${error}`);
    }
}

export default renderClubPage;