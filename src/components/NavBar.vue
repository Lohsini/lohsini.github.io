<template>
    <b-navbar
        toggleable="lg"
        type="dark"
        variant="primary"
        fixed="top"
    >
        <b-navbar-brand>
            Hsin-I Lo
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
            id="nav-collapse"
            is-nav
        >
            <b-navbar-nav>
                <b-nav-item
                    v-scroll-to="'#Home'"
                    to="/"
                >
                    Home
                </b-nav-item>
                <!-- <b-nav-item disabled>
                    |
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#About'"
                    to="/"
                >
                    About
                </b-nav-item> -->
                <b-nav-item disabled>
                    |
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#Work'"
                    to="/"
                >
                    Work
                </b-nav-item>
                <b-nav-item disabled>
                    |
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#Education'"
                    to="/"
                >
                    Education
                </b-nav-item>
                <b-nav-item disabled>
                    |
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#CourseProjects'"
                    to="/"
                >
                    Course Projects
                </b-nav-item>
                <b-nav-item disabled>
                    |
                </b-nav-item>
                <b-nav-item
                    v-scroll-to="'#SelectedProjects'"
                    to="/"
                >
                    Selected Projects
                </b-nav-item>
                <!-- <b-nav-item
                    :href="resumeLink"
                    target="_blank"
                >
                    Resume
                </b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-button
                    variant="outline-secondary"
                    :href="resumeLink"
                    target="_blank"
                >
                    DOWNLOAD MY FULL RESUME
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
    computed: mapState([
        "resumeLink",
    ]),
});
</script>

<style lang="scss" scoped>

.brand {
    color: $secondary;
}
</style>
