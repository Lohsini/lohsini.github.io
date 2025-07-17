<template>
    <section class="about-bg">
        <b-container
            class="about-container"
            fluid
        >
            <b-row class="justify-content-sm-center">
                <b-col
                    class="about-block"
                    xs="12"
                    md="6"
                    lg="5"
                >
                    <div class="text-area mt-5">
                        <h1 class="mb-3">
                            About Me
                        </h1>
                        <!-- Hello, I'm Hsin-I Lo, also known as Joanna. I'm pursuing my master's degree in Computer Science at the Illinois Institute of Technology.

                        <br><br>
                        I was a software engineer at QSticker, where I played a pivotal role in developing a robust learning ability assessment platform that garnered 1,000 daily active users — before that, my time as a research assistant at National Tsing Hua University honed my skills in designing responsive web interfaces.

                        <br><br>
                        I'm passionately advancing my knowledge in Computer Science, eager to contribute my skills and experiences to new challenges. -->

                        <!-- Hello, I'm Hsin-I Lo (Joanna), a recent Computer Science graduate from the Illinois Institute of Technology, with a strong focus on full-stack and frontend development.
                        <br><br>
                        At IIT, I deepened my skills in building scalable web applications using React, Vue.js, and FastAPI, and I deployed cloud-based solutions with Google Cloud Platform services and relational databases such as MySQL, which strengthened my backend development and data handling capabilities.
                        <br><br>
                        Before that, I was a software engineer at QSticker, where I focused on developing the frontend of a learning ability assessment platform with over 1,000 daily active users. I collaborated closely with backend engineers to ensure a smooth and responsive user experience.
                        <br><br>
                        My journey into web development began as a research assistant at National Tsing Hua University, where I designed responsive, accessible web interfaces for academic platforms. Some of the projects also involved Firebase services, which introduced me to cloud-based integration and real-time features early in my career.
                        <br><br>
                        I'm passionate about creating user-focused, maintainable applications and excited to contribute my skills in a full-stack or frontend development role that values clean architecture, collaboration, and continuous learning. -->
                        Hi, I’m Hsin-I (Joanna) Lo, a full-stack developer with experience building scalable, user-focused systems across web, backend, and cloud platforms.
                        <br><br>
                        As a founding software engineer at QSticker, I led frontend architecture and partnered with backend teams to ship a B2B2C learning platform with ~1,000 daily active users.
                        <br><br>
                        Recently, I’ve developed AI agents for project planning, a modular database engine, and a cloud-based forecasting dashboard. I’m excited to apply my experience to real-world challenges.
                        <br><br>
                        I’m now seeking full-time roles in full-stack or backend development, where I can continue building impactful systems.
                    </div>
                </b-col>
                <b-col
                    class="about-block"
                    xs="12"
                    md="6"
                    lg="5"
                >
                    <div class="text-area mt-5">
                        <h1 class="hide-text mb-3">
                            Technologies
                        </h1>
                        <!-- <ul>
                            <li>Programming Languages:<br>Python, JavaScript/TypeScript, C/C++</li>
                            <li>Technologies & Frameworks:<br>FastAPI, MySQL, Vue.js, Vuex, SCSS</li>
                            <li>Cloud Services:<br>Firebase(Firestore, Realtime Database, Authentication, Google Storage), Heroku</li>
                            <li>Tools:<br>Git, Linux, Postman, GitHub, Adobe XD, Cocos Creator, SPSS</li>
                        </ul> -->
                        <!-- <ul>
                            <li>
                                Programming Languages:<br>
                                Python, JavaScript / TypeScript, C / C++
                            </li>

                            <li>
                                Backend Development:<br>
                                FastAPI, Flask, MySQL, MongoDB, Firebase (Firestore, Realtime Database, Authentication), Docker
                            </li>

                            <li>
                                Frontend Development & UI:<br>
                                Vue.js, Vuex, React, Bootstrap, SCSS, Cocos Creator, Adobe XD
                            </li>

                            <li>
                                DevOps, CI/CD & Tools:<br>
                                Git (GitHub, GitLab, Bitbucket), CI/CD Pipelines, Docker Compose, Linux / Bash, Makefile, Postman, Jupyter Notebook, SPSS
                            </li>

                            <li>
                                Cloud Platforms & Deployment:<br>
                                Google Cloud Platform (GCS, VM, APIs), Firebase (Google Storage), Heroku, GitHub Pages
                            </li>

                            <li>
                                Data Engineering & Big Data:<br>
                                Apache Hadoop, Apache Spark (RDD, DataFrame), Hive (Partitioning & Bucketing), HDFS, Apache Kafka, Lambda / Kappa Architecture
                            </li>

                            <li>
                                Data Privacy & Security:<br>
                                RSA Encryption, MD5 Hashing, K-anonymity
                            </li>

                            <li>
                                Machine Learning & Forecasting:<br>
                                LSTM, Prophet, StatsModels
                            </li>

                            <li>
                                AI & Software Development Methods:<br>
                                LlamaIndex, OpenAI GPT-4o, DeepSeek, Multi-agent prompting, Context-aware retrieval, GenAI-based software project planning, Agile Scrum framework, Waterfall methodology, Human-in-the-loop evaluation
                            </li>
                        </ul> -->
                        <ul :class="['custom-bullet', {'hide-bullet': hideBullet}]">
                            <li><strong>Programming Languages:</strong><br>Python, JavaScript / TypeScript, C / C++</li>

                            <li><strong>Frontend:</strong><br>Vue.js, React, SCSS, Cocos Creator</li>

                            <li><strong>Backend:</strong><br>FastAPI, Flask, Firebase (Firestore, Realtime DB, Auth), MySQL, MongoDB</li>

                            <li><strong>Cloud & Deployment:</strong><br>Google Cloud Platform (Cloud Run, GCS, VM), Firebase (Hosting, Storage), GitHub Pages, Heroku</li>

                            <li><strong>DevOps & Tooling:</strong><br>Git, Docker, CI/CD Pipelines, Bash / Linux, Jupyter Notebook</li>

                            <li><strong>LLM Projects & Tools:</strong><br>GPT-4o, DeepSeek-R1, LlamaIndex, LangChain, Autogen</li>

                            <!-- <li><strong>Software Methodologies:</strong><br>Agile (Scrum), Waterfall, Human-in-the-loop evaluation</li> -->

                            <!-- <li><strong>Other Strengths:</strong><br>UI/UX prototyping (Adobe XD), Data privacy (K-anonymity), Visual storytelling (Dashboards, Metrics), System integration</li> -->
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    components: {
    },
    data() {
        return {
        };
    },
});
</script>

<style lang="scss" scoped>
.hide-text {
    color: transparent !important;
}

.about-bg {
    background-color: $light;
    padding: 3vw 0;

    .about-container {
        .about-block {
            min-height: 20vw;
            display: flex;
            flex-direction: column;

            .text-area {
                background-color: $light;
                margin: 0 3vw;
                padding: 2vw;
                color: $primary-light;
                text-align: justify;
                flex: 1;

                h1 {
                    font-size: 3vw;
                    color: $primary-light;
                }

                ul {
                    padding-inline-start: 0;
                    li{
                        margin-bottom: 15px;
                    }
                }
                ul.custom-bullet {
                    list-style-position: outside; /* 確保點點在外側 */
                    padding-left: 1.5em; /* 留空間給點點 */
                }
            }
        }
    }
}
@media only screen and (max-width: 576px) {
    .about-bg {
        padding: 10vw 0;
        .about-container {
            .about-block {

                .text-area {
                    background-color: transparent;
                    margin: 0 5vw;
                    padding: 3vw;
                    color: $primary-light;

                    h1 {
                        font-size: 7vw;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .hide-text {
        display: none;
    }
    .about-bg {
        padding: 5vw 0;
        .about-container {
            .about-block {
                min-height: 20vw;
            }
        }
    }
}
</style>
