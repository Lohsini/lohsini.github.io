import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resumeLink: "https://drive.google.com/file/d/104X_f2ddOa3iMuVRL8w1s2TFMSZHwas_/view?usp=share_link",
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
