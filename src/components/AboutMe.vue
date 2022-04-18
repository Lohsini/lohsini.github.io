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
                    <div class="text-area">
                        <h1>About Me</h1>
                        Hi, I am Hsin-I, or you can call me Joanna. I am interested in frontend development.

                        <br><br>

                        <br>
                    </div>
                </b-col>
                <b-col
                    class="about-block"
                    xs="12"
                    md="6"
                    lg="5"
                >
                    <div class="text-area">
                        <h1 class="hide-text">
                            Have a good day ;)
                        </h1>
                        <ul>
                            <li>Programming Languages:<br>Javascript/TypeScript, Python, R</li>
                            <li>Technologies & Frameworks:<br>HTML, SCSS, Vue, Vuex, jQuery, RWD, Bootstrap, React</li>
                            <li>Cloud Services:<br>Firebase(Firestore, Realtime Database, Authentication, Google Storage), Heroku</li>
                            <li>Tools:<br>Git, GitHub, GitLab, Adobe XD, Cocos Creator, SPSS, Linux, Postman, LaTeX</li>
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
                text-align: left;
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
