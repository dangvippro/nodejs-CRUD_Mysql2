const conn = require("../models/db");

class UserCtrl {
    async index(req, res) {
        const [rows, fields] = await (await conn).execute('SELECT * FROM users');
        return res.render("users/index", {Users: rows})
    }

    showFormCreate(req, res) {
        return res.render("users/create");
    }

    async create(req, res) {
        const {userFullname, userPassword, userEmail, userPhone} = req.body;
        await (await conn).execute('INSERT INTO users(fullname, password, email, phone) VALUES (?,?,?,?)', [userFullname, userPassword, userEmail, userPhone]);
        return res.redirect("/");
    }

    async showFormUpdate(req, res) {
        const id = req.params.id;
        const [rows, fields] = await (await conn).execute("SELECT * FROM users WHERE id = ?", [id]);
        return res.render("users/update", {User: rows});
    }

    async update(req, res) {
        const {userFullname, userPassword, userEmail, userPhone, userID} = req.body;
        await (await conn).execute('UPDATE users SET fullname = ?, password = ?, email = ?, phone = ? WHERE id = ?', [userFullname, userPassword, userEmail, userPhone, userID]);
        return res.redirect("/");
    }

    async delete(req, res) {
        const id = req.params.id;
        await (await conn).execute("DELETE FROM users WHERE id = ?", [id]);
        return res.redirect("/");
    }
}

module.exports = new UserCtrl()