<template>
    <main class="users_page-wrapper">
        <side-bar/>
        <user-profile/>
    </main>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import UserProfile from '@/components/UserProfile'

export default {
    components: {
        SideBar,
        UserProfile
    }
}
</script>

<style lang="scss" scoped>
.users_page-wrapper {
    display: grid;
    grid-template-columns: minmax(10px, $sz-list-width) minmax(10px, 1fr);
    box-shadow: 0 0 $sz-shadow-blur-radius 0 $color-shadow;
    border-radius: $sz-border-radius;
}
</style>
