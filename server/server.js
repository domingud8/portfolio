const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const compression = require("compression");
const path = require("path");

const cookieSession = require("cookie-session");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(express.json());
app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14,
        sameSite: true,
    })
);
app.use(cors());
app.use(express.json());

let user = "";
let pass = "";
console.log("here out", process.env.USER, process.env.PASS);
if (process.env.USER & process.env.PASS) {
    console.log("here inside");
    user = process.env.USER;
    pass = process.env.PASS;
} else {
    console.log("here");
    const { USER, PASS } = require("../secrets.json");
    console.log(USER, PASS);
    user = USER;
    pass = PASS;
}

const contactEmail = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: user,
        pass: pass,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

app.post("/api/contact", (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const email = request.body.email;
    const message = request.body.message;
    const mail = {
        from: name,
        to: "ddmguez8@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            response.json({ status: "ERROR" });
            return;
        }

        response.json({ status: "Message Sent!" });
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3030, function () {
    console.log("I'm listening.");
});
