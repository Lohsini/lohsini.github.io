import rainformDemo from "@/assets/contents/rainform-demo.png";
import foodpocketDemo from "@/assets/contents/foodpocket-demo.jpeg";
import chainfarmsDemo from "@/assets/contents/chainfarms-demo.png";
import chingyuDemo from "@/assets/contents/chingyu-demo.png";
import siotaDemo from "@/assets/contents/siota-demo.png";

export interface LinkModel {
    label: string;
    url: string;
}

export default [
    {
        title: "Rainform (volunteer project)",
        role: "",
        startDate: "Feb 2021",
        endDate: "May 2021",
        image: rainformDemo,
        linkURL: "",
        descriptions: [
            "Developed an online form service using Firebase Auth and Firestore with a team of 4",
            "Established a control panel for users to modify data, generate surveys, and view statistics",
            "Reduced 80% of process time of merging text into templates through developing automation scripts",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://rainform.github.io/",
            },
            {
                label: "Github",
                url: "https://github.com/rainform/client_web",
            },
        ],
        tags: ["Vue.js", "Vuex", "TypeScript", "Firebase"],
    },
    {
        title: "FoodPocket",
        role: "",
        startDate: "June 2020",
        endDate: "Jane 2021",
        image: foodpocketDemo,
        linkURL: "",
        descriptions: [
            "Developed a Web App for users to record daily meals and restaurants",
            "Designed a RWD website for mobile phones, tablets, and computers",
            "Resolved asynchronous issues for concurrent API requests",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://foodpocket.github.io/",
            },
            {
                label: "Github",
                url: "https://github.com/foodpocket/foodpocket",
            },
        ],
        tags: ["Vue.js", "Vuex", "TypeScript", "RWD", "Bootstrap"],
    },
    // {
    //     title: "ChingYu",
    //     role: "",
    //     startDate: "Oct 2020",
    //     endDate: "Dec 2020",
    //     image: chingyuDemo,
    //     linkURL: "",
    //     descriptions: [
    //         "Developed web UI adopting Responsive Web Design using Vue.js",
    //     ],
    //     links: [
    //         {
    //             label: "Webpage",
    //             url: "https://lohsini.github.io/ChingYu/#/",
    //         },
    //     ],
    //     tags: ["Vue.js", "SCSS", "JavaScript", "Bootstrap", "GitHub"],
    // },
    {
        title: "Chainfarms",
        role: "",
        startDate: "Apr 2020",
        endDate: "June 2020",
        image: chainfarmsDemo,
        linkURL: "",
        descriptions: [
            "Developed web UI adopting Responsive Web Design using Vue.js",
        ],
        links: [
            {
                label: "Webpage",
                url: "http://chainfarms.com.tw",
            },
        ],
        tags: ["Vue.js", "SCSS", "JavaScript"],
    },
    {
        title: "SIoTA",
        role: "",
        startDate: "Dec 2019",
        endDate: "Mar 2020",
        image: siotaDemo,
        linkURL: "",
        descriptions: [
            "Established 9 different UI design pages on the website and deployed the website on Heroku",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://siota.herokuapp.com/index.html",
            },
        ],
        tags: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Ajax", "Python", "Git", "Heroku"],
    },
];
