import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // RESUME_on_Joanna_website.pdf
        resumeLink: "https://drive.google.com/file/d/1jNx5uoXTQHzkHeqsAna_UOdcj9EI4e_e/view?usp=sharing",
        // for bootstrap grid system
        oneColumnGrid: {
            sm: "12",
            md: "12",
            lg: "10",
        },
        twoColumnGrid: {
            sm: "12",
            md: "6",
            lg: "5",
        },
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
});
