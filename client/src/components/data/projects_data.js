const projects = [
    {
        title: "Portfolio",
        description:
            "This (dynamic) website containing my personal portfolio. ",
        github: "https://github.com/domingud8/portfolio",
        extended:
            "This portfolio dynamic website. API routes done with Node.js, while the frontend using React framework.",
        image: "portfolio.jpg",
        projectUrl: "https://",
        technologies: ["React", "Bootstrap", "Node.js"],
    },
    {
        title: "Finance App",
        description:
            "Web based application for tracking your monthly expenses. User able to login and manage their expenses. Interactive dashboards showing monthly and yearly summaries. ",
        github: "https://github.com/domingud8/FinanceDashboard",
        extended:
            "This portfolio dynamic website. API routes done with Node.js, while the frontend using React framework.",
        image: "imageDashboard.jpg",
        projectUrl: "https://",
        technologies: ["React", "Bootstrap", "Node.js", "PostgreSQL"],
    },

    {
        title: "Twitter API ",
        description:
            "Backend API getting data (latest news)from Twitter. Next step: use data in the frontend to built a dashboard ",
        github: "https://github.com/domingud8/TwitterAPI",
        extended:
            "Backend API getting data (latest news)from Twitter. Next step: use data in the frontend to built a dashboard",
        image: "twitterApi.jpg",
        projectUrl: "https://",
        technologies: ["AJAX", "vanilla Javascript"],
    },
    {
        title: "Yahoo Finance",
        description: "RestAPI getting data from Yahoo Finance  ",
        github: "https://github.com/domingud8/FinanceDashboard",
        extended: "RestAPI getting data from Yahoo Finance",
        image: "yahooFinace.png",
        projectUrl: "https://",
        technologies: ["AJAX", "vanilla Javascript"],
    },
    {
        title: "Coffee Break Social Network ",
        description:
            "Social Network platform where users are able to edit their profiles, connect to other users and live chat with them",
        github: "https://github.com/domingud8/FinanceDashboard",
        extended:
            "I built this web application as a project during the boot camp at SPICED Academy. It is a single page application containing a social network where people can connect and perform  live chat. ",
        image: "socialNetwork.jpg",
        projectUrl: "https://",
        technologies: [
            "React",
            "Node.js/Express",
            "PostgreSQL",
            "Socket.io",
            "Cookie Section",
            "Bcrypt",
        ],
        deploySite: ["heroku"],
        features: [
            "Registration / Login / Logout ",
            "Reset Password",
            "Upload / change avatar",
            "Find users",
            "Friends and wannabes",
            "Live Chat",
            "List of online users",
        ],
    },
    {
        title: "Image Board ",
        description:
            "Platform that allows users to upload and comment images. Using AWS3  for storaging images. ",
        github: "https://github.com/domingud8/ImageBoard",
        extended:
            "This is a Single Page Web Application that allows users to upload pictues to general board, as well as comment their own pictures of pictures submited for someone else. This app was a project during the bootcamp at SPICED Acedemy.",
        image: "imageBoard.jpg",
        projectUrl: "https://loadingimages.herokuapp.com/",
        technologies: ["Vue.js", "Node.js", "Express.js", "PostgreSQL", "AWS3"],
        deploySite: ["heroku"],
        features: ["Upload images", "Display and comment exsisting images"],
    },
    {
        title: "Connect Four ",
        description: "Game Connect Four",
        github: "https://github.com/domingud8/domingud8.github.io/tree/master/Connect4",
        extended:
            "This is a two-plaxer game cheking the horizontal, vertical and diagonal victory. Players take turns dropping one disc vertically in specific column. The goal for winning the game is to form a horizontal, vertical or diagonal line with owns discs,",
        image: "connect4.jpg",
        projectUrl: "https://domingud8.github.io/Connect4/",
        technologies: ["jQuerry", "vanilla Javascript"],
        deploySite: ["github"],
        features: [
            "When a player wins, a message appears to announce the victory. ",
            "At the moment of the victory the four discs have an animation to indicate where was the victory.",
        ],
    },
];

export default projects;
