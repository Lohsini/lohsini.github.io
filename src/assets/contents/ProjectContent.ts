import rainformDemo from "@/assets/contents/rainform-demo.png";
import foodpocketDemo from "@/assets/contents/foodpocket-demo.jpeg";
import ontimerDemo from "@/assets/contents/ontimer-demo.png";
import raftDemo from "@/assets/contents/raft-demo.png";

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
            "Led a team of 3 to develop an online form service using Firebase Auth and Firestore",
            "Reduced management efforts by building Content Management System (CMS) adopting Google Drive API and Google Docs API to automatically merge texts and templates into PDF documents",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://rainform.github.io/",
            },
        ],
        tags: ["Firebase", "Vue.js", "TypeScript"],
    },
    {
        title: "FoodPocket",
        role: "",
        startDate: "Jun 2020",
        endDate: "Jan 2021",
        image: foodpocketDemo,
        linkURL: "",
        descriptions: [
            "Developed Single Sign-On (SSO) mechanism and RESTful APIs by Django and PostgreSQL",
            "Configured and deployed backend services on containerized Ngnix and Gunicorn, and ran on AWS EC2",
            "Automated unit-test, compilation and deployment tasks by establishing CI/CD flow with Travis-CI",
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
        tags: ["Vue.js", "Django", "PostgreSQL", "Travis-CI"],
    },
];
