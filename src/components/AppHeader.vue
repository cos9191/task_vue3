<template>
    <header class="app-header">
        <a href="" class="logo">Жилфонд</a>
        <p>Пользователь</p>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    min-height: $sz-header-min-height;
}
.logo {
    text-decoration: none;
    color: $color-logo;
    font-size: 32px;
    font-weight: 700;
}
</style>
