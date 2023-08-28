<template>
        <app-header/>
        <router-view/>
        <app-footer/>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
</script>

<style lang="scss">

@import "@/styles/fonts";

*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

#app {
    font-family: $ff-default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: $fz-default;
    color: $color-font;
    line-height: 140%;
    margin: 0 50px;

    //sticky-footer
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
</style>
