<template>
    <div class="links-container">
        <a
            href="https://github.com/Lohsini"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
            href="https://www.linkedin.com/in/hsin-i-lo-2b7202a9/"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a
            :href="resumeLink"
            target="_blank"
            :class="{ light: iconStyle !== 'dark' }"
        >
            <font-awesome-icon :icon="['fas', 'file-alt']" />
        </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
    props: {
        iconStyle: {
            type: String,
            default: "dark",
            required: false,
        },
    },
    computed: mapState([
        "resumeLink",
    ]),
});
</script>

<style lang="scss" scoped>
.links-container {
    a {
        margin: 0 16px;
        font-size: 30px;
        &.light {
            color: $light;
            &:hover {
                color: $secondary;
            }
        }
        color: $primary;
        &:hover {
            color: $primary-light;
        }

    }
}

@media only screen and (max-width: 576px) {
    .links-container {
        a {
            margin: 0 4vw;
            font-size: 6vw;
        }
    }
}

</style>
