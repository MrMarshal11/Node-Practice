import model from "../models/queries.js"
import dotenv from 'dotenv';

dotenv.config();

async function renderBecomeAdmin(req, res) {
    try {
        const user = req.user;

        if (user.membership_status === 'admin') {
            res.send("you're already an admin... what more do you want? <a href='/loggedIn'>back to index</a>");
            res.end();
        }

        await res.render('becomeAdminForm', {user});
    } catch (error) {
        console.log(`error at renderBecomeAdmin(), ${error}`);
    }
}

async function successToAdmin(req, res) {
    try {
        const guessedPassword = req.body.adminPassword;

        if (guessedPassword === process.env.ADMIN_PASSWORD) {
            const user = req.user;
            const user_id = user.id;
            await model.becomeAdminQuery(user_id);

            await res.redirect('/clubPage');
        } else {
            res.send('wrong password... <a href="/loggedIn">go back to index</a>');
        }
    } catch (error) {
        console.log(`error at successToAdmin(), ${error}`);
    }
}

export default {renderBecomeAdmin, successToAdmin};