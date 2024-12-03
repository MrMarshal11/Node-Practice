import passport from "passport";
import model from "../models/queries.js"
import bcrypt from "bcryptjs";

async function indexRender(req, res) {
    try {
        // To determine whether or not the sign up href was pressed
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
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        if (password === confirmPassword) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const username = req.body.username;
    
            model.signUpPOST(firstName, lastName, username, hashedPassword);
            res.redirect("/");
        } else {
            console.log('passwords do not match');
            res.redirect("/signUp");
        }
    } catch (error) {
        console.log(`error at postNewUser(), ${error}`);
        res.status(500).send('Server side error');
    }
}

function verifyLogin(req, res, next) {
    passport.authenticate("local", {
        successRedirect: "/clubPage",
        failureRedirect: "/",
    })(req, res, next); // Call the returned function
}

export default {indexRender, postNewUser, verifyLogin};