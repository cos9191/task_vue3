<template>
    <div class="user">
        <div class="user__img-wrapper">

        </div>
        <div class="user__data">
            <p><strong>{{ user.name }}</strong></p>
            <p>{{ user.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.user {
    padding: 15px;
    border: 2px solid lightgray;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
