import employeeProgramDemo from "@/assets/contents/employee-program-demo.png";
import inventoryDemo from "@/assets/contents/inventory-demo.png";
import boombermanDemo from "@/assets/contents/boomberman-demo.png";
import webmarioDemo from "@/assets/contents/web-mario-demo.png";
import chatroomDemo from "@/assets/contents/chatroom-demo.png";
import webCanvasDemo from "@/assets/contents/web-canvas-demo.png";
import GasPumpSystemDemo from "@/assets/contents/gaspump-system-demo.png";
import RepoForecastDashboardDemo from "@/assets/contents/repo-forecast-dashboard-demo.png";
import HotelBookingAnalysisDemo from "@/assets/contents/hotel-booking-analysis-demo.png";
import StorageManagerDemo from "@/assets/contents/storage-manager-demo.png";
import AIProjectDemo from "@/assets/contents/AI-project-demo.png";

export interface LinkModel {
    label: string;
    url: string;
}

export default [
    {
        title: "LLM-Driven AI Agents for Project Planning",
        role: "",
        startDate: "Mar 2025",
        endDate: "Apr 2025",
        image: AIProjectDemo,
        linkURL: "",
        descriptions: [
            "Designed and implemented a multi-agent virtual AI team that generates software project plans using both Waterfall and Agile Scrum workflows",
            "Developed a RAG-based system using LlamaIndex, and conducted a comparative analysis between GPT-4o and DeepSeek-R1 for task performance and response quality",
            "Generated structured project plans in visual table and timeline formats, improving clarity, comparison, and decision-making efficiency",
        ],
        links: [
            {
                label: "",
                url: "",
            },
        ],
        tags: ["RAG-Based", "AI-Agent", "Multi-Agent Systems", "LlamaIndex", "GPT-4o", "DeepSeek-R1", "Jupyter Notebook"],
    },
    {
        title: "GitHub Repository Activity Forecasting Dashboard",
        role: "",
        startDate: "Mar 2025",
        endDate: "Apr 2025",
        image: RepoForecastDashboardDemo,
        linkURL: "",
        descriptions: [
            "Built a dashboard to visualize and forecast 2-year trends across 8 repositories, using React, Flask, and Google Cloud",
            "Applied time-series models (LSTM, Prophet, StatsModels) on GitHub activity data to compare predictive performance",
            // "Integrated the GitHub API to collect historical repository activity data, and applied time-series forecasting models (LSTM, Prophet, StatsModels) to predict future trends and compare model performance"
            "Containerized services with Docker, deployed via Cloud Run, and automated deployment with CI/CD",
        ],
        links: [
            {
                label: "Github",
                url: "https://github.com/Lohsini/repo-forecast/tree/main/doc",
            },
        ],
        tags: ["React", "Flask", "Docker", "Google Cloud", "GitHub API", "Time-series forecasting", "CI/CD pipelines"],
    },
    {
        title: "Modular Database Engine",
        role: "",
        startDate: "Sep 2024",
        endDate: "Oct 2024",
        image: StorageManagerDemo,
        linkURL: "",
        descriptions: [
            "Built a modular database engine from scratch with a 3-person team, implementing storage, buffer, and record layers",
            "Led the development of a buffer manager with configurable FIFO/LRU policies and a record manager supporting schema-aware layouts and expression-based scans",
        ],
        links: [
            // {
            //     label: "Storage Manager",
            //     url: "https://github.com/Lohsini/Storage_Manager",
            // },
            // {
            //     label: "Buffer Manager",
            //     url: "https://github.com/Lohsini/Buffer_Manager",
            // },
            // {
            //     label: "Record Manager",
            //     url: "https://github.com/Lohsini/Record_Manager_J",
            // },
            // {
            //     label: "B+ Tree Index",
            //     url: "https://github.com/Lohsini/b_tree_J",
            // },
        ],
        tags: ["C", "Git", "Storage Manager", "Buffer Manager", "Record Manager"],
    },
    {
        title: "GasPump System – Architecture & Testing",
        role: "",
        startDate: "Mar 2024",
        endDate: "Nov 2024",
        image: GasPumpSystemDemo,
        linkURL: "",
        descriptions: [
            "Designed and implemented a modular gas-pump controller using an MDA-EFSM and a Pipes-and-Filters architecture for clean, state-driven behavior",
            "Delivered scalable, testable components exposed through a command-line interface",
            "Authored a comprehensive test suite to verify state transitions and rigorously validate gas-pump implementations",
        ],
        links: [
            {
                label: "Github - Architecture",
                url: "https://github.com/Lohsini/gas_pump",
            },
            {
                label: "Github - Testing",
                url: "https://github.com/Lohsini/GasPump_Test",
            },
        ],
        tags: ["C++", "MDA-EFSM", "Pipes and Filters", "OOD", "Unit Testing"],
    },
    {
        title: "Anonymization of Hotel Booking Data",
        role: "",
        startDate: "Mar 2024",
        endDate: "May 2024",
        image: HotelBookingAnalysisDemo,
        linkURL: "",
        descriptions: [
            "Designed and implemented a k-anonymity pipeline on hotel booking data, protecting sensitive attributes while preserving analytical utility",
            "Defined multiple quasi-identifiers such as age and nationality, and created generalization hierarchies to guide multi-level anonymization",
            "Visualized the generalization process and collaborated on ethical system design using public secondary data in a two-person team",
            // "Anonymized sensitive data using k-anonymity on a Kaggle hotel booking dataset",
            // "Led a data privacy project with a teammate using publicly available secondary data",
            // "Built RSA encryption and MD5 hashing systems for secure communication and password storage",
        ],
        links: [
            {
                label: "Github",
                url: "https://github.com/Lohsini/Hotel-Booking-Analysis?tab=readme-ov-file",
            },
        ],
        tags: ["Python", "k-Anonymity", "Data Anonymization", "Hierarchical Generalization"],
    },
    {
        title: "Employee Database Program",
        role: "",
        startDate: "Oct 2023",
        endDate: "Nov 2023",
        image: employeeProgramDemo,
        linkURL: "",
        descriptions: [
            "Built a file-based employee database system in C, supporting complete CRUD operations on structured records",
            "Designed an interactive command-line interface for efficient data entry, modification, and retrieval",
        ],
        links: [
            {
                label: "Bitbucket",
                url: "https://bitbucket.org/iit-assignments-cs/hsin-i-lo-splab2/src/master/", // 402
            },
        ],
        tags: ["C", "File I/O", "Command-Line Interface"],
    },
    {
        title: "Inventory System",
        role: "",
        startDate: "Sep 2023",
        endDate: "Nov 2023",
        image: inventoryDemo,
        linkURL: "",
        descriptions: [
            "Led a team of 5 in designing the product architecture across frontend, backend, database, and APIs, driving alignment through clear communication and task distribution",
            "Designed 8 MySQL relational schemas, built FastAPI backend services, and developed a frontend to support complex, query-driven inventory operations",
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
            "Built a real-time messaging and file-sharing chatroom using Vue.js, integrated with Firebase Realtime Database, Authentication, and Storage",
            "Implemented Firebase Authentication for email and Google login, with secure user access control",
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
            // "Built a two-player Bomber man web version game utilizing Cocos Creator and Firebase with a team of 3",
            "Collaborated in a team of 3 to develop a two-player online game using Cocos Creator and TypeScript",
            "Integrated Firebase for authentication and real-time state synchronization, and deployed the game via Firebase Hosting",
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
            "Designed web version of Mario game with a virtual marketplace and leaderboard features using Cocos Creator, Firebase Authentication, and Firestore",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://web-mario-b1444.web.app/",
            },
        ],
        tags: ["Cocos Creator", "TypeScript", "Firebase Authentication", "Firestore"],
    },
    {
        title: "Web Canvas", // 3月
        role: "",
        startDate: "Mar 2021",
        endDate: "Mar 2021",
        image: webCanvasDemo,
        linkURL: "",
        descriptions: [
            // "Established a canvas using HTML, CSS, JavaScript",
            "Built an interactive drawing canvas with multiple brush tools using HTML, CSS, and JavaScript",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://1092083s.gitlab.io/AS_01_WebCanvas/",
            },
        ],
        tags: ["HTML", "CSS", "JavaScript"],
    },
];
