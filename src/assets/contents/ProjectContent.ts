import rainformDemo from "@/assets/contents/rainform-demo.png";
import foodpocketDemo from "@/assets/contents/foodpocket-demo.jpeg";
import chainfarmsDemo from "@/assets/contents/chainfarms-demo.png";
// import chingyuDemo from "@/assets/contents/chingyu-demo.png";
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
            "Established a control panel for users to manage form data, generate surveys, and view live statistics",
            "Reduced text-template merging time by 80% through automation scripts, streamlining the content creation workflow",
            // "Reduced 80% of process time of merging text into templates through developing automation scripts",
        ],
        links: [
            // {
            //     label: "Webpage",
            //     url: "https://rainform.github.io/",
            // },
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
            "Built a web app for users to log daily meals and restaurants using Vue.js and TypeScript",
            "Designed a fully responsive UI for mobile, tablet, and desktop with RWD principles and Bootstrap",
            "Resolved asynchronous issues in concurrent API requests to ensure data consistency and smooth user experience",
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
        tags: ["Vue.js", "TypeScript", "Vuex", "Responsive Design", "Bootstrap"],
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
            // "Developed web UI adopting Responsive Web Design using Vue.js",
            "Developed a responsive web UI using Vue.js and SCSS for a production website",
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
            "Built 9 different UI design pages on the website and hosted it on GitHub Pages",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://lohsini.github.io/SIOTA/",
            },
        ],
        tags: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Ajax", "Python", "Git", "GitHub Pages"],
    },
];
