const express = require("express");
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

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3030, function () {
    console.log("I'm listening.");
});
