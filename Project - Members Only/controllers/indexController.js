import model from "../models/queries.js"
import bcrypt from "bcryptjs";

async function indexRender(req, res) {
    try {
        const url = req.path.slice(1) || "login"; // Extract URL path for indexRoute 
        await res.render('index', {url});
    } catch (error) {
        console.log(`error at indexRender(), ${error}`);
        res.status(500).send('Server side error');
    }
}

// Collect sign up details, then redirect to club page;
async function postNewUser(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const username = req.body.username;

        model.signUpPOST(firstName, lastName, username, hashedPassword);
        res.redirect("/clubPage"); // try adding /:firstName after you get this working
    } catch (error) {
        console.log(`error at indexRender(), ${error}`);
        res.status(500).send('Server side error');
    }
}

export default {indexRender, postNewUser};