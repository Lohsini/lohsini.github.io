<template>
    <div class="home">
        <RainbowBanner id="Home" />
        <!-- <ImageBanner id="Home" /> -->
        <AboutMe id="About" />
        <WorkExperienceSection id="Work" />
        <EducationSection id="Education" />
        <CourseProjectSection id="CourseProjects" />
        <ProjectSection id="SelectedProjects" />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import RainbowBanner from "@/components/RainbowBanner.vue";
import AboutMe from "@/components/AboutMe.vue";
// import ImageBanner from "@/components/ImageBanner.vue";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection.vue";
import EducationSection from "@/components/sections/EducationSection.vue";
import ProjectSection from "@/components/sections/ProjectSection.vue";
import CourseProjectSection from "@/components/sections/CourseProjectSection.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        AboutMe,
        RainbowBanner,
        // ImageBanner,
        WorkExperienceSection,
        EducationSection,
        ProjectSection,
        CourseProjectSection,
        Footer,
    },
    data() {
        return {
        };
    },
};
</script>
