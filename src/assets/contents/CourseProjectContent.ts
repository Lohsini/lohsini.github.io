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
        title: "Bomberman",
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
        title: "Web Mario",
        role: "",
        startDate: "May 2021",
        endDate: "May 2021",
        image: webmarioDemo,
        linkURL: "",
        descriptions: [
            "Designed web version of Mario game with a store and leaderboards using Cocos Creator, Firebase Auth, and Firestore",
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
        title: "Chatroom",
        role: "",
        startDate: "Apr 2021",
        endDate: "Apr 2021",
        image: chatroomDemo,
        linkURL: "",
        descriptions: [
            "Created login feature with email and google authentication",
            "Developed a web chatroom that allows users to interact instantly using Realtime Database and Google Storage",
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
        title: "Web Canvas",
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
