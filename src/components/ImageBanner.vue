<template>
    <section class="banner-container">
        <h1 class="title">
            Hsin-I (Joanna) Lo
        </h1>
        <h2 class="subtitle">
            Software Engineer
        </h2>

        <MyLinks class="download-resume" />
        <ProfileImage
            class="my-profile-image"
            alt-text="Hsin-I Lo"
            :src="require('@/assets/myProfileImage.jpg')"
        />
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import MyLinks from "./MyLinks.vue";
import ProfileImage from "./ProfileImage.vue";

export default Vue.extend({
    components: {
        ProfileImage,
        MyLinks,
    },
    data() {
        return {
        };
    },
});
</script>

<style lang="scss" scoped>
.banner-container {
    position: relative;
    height: 43vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("../assets/banner.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .title {
        font-size: 9vw;
        color: #d8f4ec;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
    }

    .subtitle {
        color: $primary;
        font-size: 2.5vw;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, .3);
        margin-bottom: 3vw;
    }

    .download-resume {
        margin-bottom: 5vw;
    }

    .my-profile-image {
        position: absolute;
        bottom: -$profile-image-size-half;
        z-index: 1;
    }
}

@media only screen and (max-width: 600px) {
.banner-container {
    height: 160vw;
    background: url("../assets/banner.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: unset;

    .title {
        font-size: 13vw;
        margin-top: 21vw;
        margin-bottom: 5vw;
    }

    .subtitle {
        font-size: 4.6vw;
        margin-bottom: 10vw;
    }

    .download-resume {
        margin-bottom: 19vw;
    }

    .my-profile-image {
        position: relative;
        bottom: unset;
    }
}
}
</style>
