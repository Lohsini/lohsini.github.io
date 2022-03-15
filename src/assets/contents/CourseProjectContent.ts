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
        startDate: "Jun 2021",
        endDate: "Jun 2021",
        image: boombermanDemo,
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
    {
        title: "Web Mario",
        role: "",
        startDate: "May 2021",
        endDate: "May 2021",
        image: webmarioDemo,
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
    {
        title: "Chatroom",
        role: "",
        startDate: "Apr 2021",
        endDate: "Apr 2021",
        image: chatroomDemo,
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
    {
        title: "Web Canvas",
        role: "",
        startDate: "Mar 2021",
        endDate: "Mar 2021",
        image: webCanvasDemo,
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
