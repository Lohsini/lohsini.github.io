import employeeProgramDemo from "@/assets/contents/employee-program-demo.png";
import inventoryDemo from "@/assets/contents/inventory-demo.png";
import boombermanDemo from "@/assets/contents/boomberman-demo.png";
import webmarioDemo from "@/assets/contents/web-mario-demo.png";
import chatroomDemo from "@/assets/contents/chatroom-demo.png";
import webCanvasDemo from "@/assets/contents/web-canvas-demo.png";

export interface LinkModel {
    label: string;
    url: string;
}

export default [
    {
        title: "Employee Database Program",
        role: "",
        startDate: "Oct 2023",
        endDate: "Nov 2023",
        image: employeeProgramDemo,
        linkURL: "",
        descriptions: [
            "Used C to implement a searching system to enable CRUD operations on a file-based storage system",
            "Developed a command-line interface that allows users to interactively operate the system for efficient data retrieval",
        ],
        links: [
            {
                label: "Bitbucket",
                url: "https://bitbucket.org/hsin-i-lo-402/hsin-i-lo-splab2/src/master/",
            },
        ],
        tags: ["C/C++"],
    },
    {
        title: "Inventory System",
        role: "",
        startDate: "Sep 2023",
        endDate: "Nov 2023",
        image: inventoryDemo,
        linkURL: "",
        descriptions: [
            "Led a team of 5 in end-to-end system development, designing the architecture for frontend, backend, and database",
            "Designed 8 MySQL relational schemas to optimize search and management functionalities in the inventory system",
            "Developed the APIs for backend services using FastAPI and Python",
        ],
        links: [
            {
                label: "Github",
                url: "https://github.com/Lohsini/InventorySystem",
            },
        ],
        tags: ["MySQL", "Python", "FastAPI", "Vue.js", "JavaScript"],
    },
    {
        title: "Chatroom", // 4月
        role: "",
        startDate: "Apr 2021",
        endDate: "Apr 2021",
        image: chatroomDemo,
        linkURL: "",
        descriptions: [
            "Developed a web chatroom that allows users to interact instantly using Realtime Database and Google Storage",
            "Created login feature with email and google authentication",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://chatroom-e13ac.web.app",
            },
        ],
        tags: ["Vue.js", "JavaScript", "Firebase's Authentication", "Realtime Database", "Google Storage"],
    },
    {
        title: "Bomberman", // 6月
        role: "",
        startDate: "June 2021",
        endDate: "June 2021",
        image: boombermanDemo,
        linkURL: "",
        descriptions: [
            "Built a two-player Bomber man web version game utilizing Cocos Creator and Firebase with a team of 3",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://bomberman2021-5f5a6.web.app/",
            },
        ],
        tags: ["Cocos Creator", "TypeScript", "Firebase Auth", "Firebase"],
    },
    {
        title: "Web Mario", // 5月
        role: "",
        startDate: "May 2021",
        endDate: "May 2021",
        image: webmarioDemo,
        linkURL: "",
        descriptions: [
            "Designed web version of Mario game with a marketplace and leaderboards using Cocos Creator, Firebase Auth, and Firestore",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://web-mario-b1444.web.app/",
            },
        ],
        tags: ["Cocos Creator", "TypeScript", "Firebase Auth", "Firestore"],
    },
    {
        title: "Web Canvas", // 3月
        role: "",
        startDate: "Mar 2021",
        endDate: "Mar 2021",
        image: webCanvasDemo,
        linkURL: "",
        descriptions: [
            "Established a canvas using HTML, CSS, JavaScript",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://1092083s.gitlab.io/AS_01_WebCanvas/",
            },
        ],
        tags: ["HTML", "CSS", "JavaScript", "GitLab"],
    },
];
