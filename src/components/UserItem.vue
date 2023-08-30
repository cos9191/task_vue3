<template>
    <div class="user">
        <div class="user__img-wrapper">
            <img src="@/assets/img_plug.svg" alt="Фото профиля"/>
        </div>
        <div class="user__data">
            <p><strong>{{ user.username }}</strong></p>
            <p>{{ user.email }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { type PropType } from 'vue'
import { User } from '@/models/user.interface'

export default {
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.user {
    display: flex;
    margin-top: 15px;
    border-radius: $sz-border-radius;
    min-width: $sz-item-width;
    max-width: $sz-item-width;
    max-height: $sz-item-height;
    box-shadow: 0 0 $sz-shadow-blur-radius 0 $color-shadow;
    transition: background-color $trans-default;
    user-select: none;
}

.user:hover {
    background-color: $color-hover-bg;
    cursor: pointer;
}

.user__img-wrapper {
    max-width: $sz-item-height;
    border-right: 1px solid $color-border;
}

.user__img-wrapper img {
    min-height: $sz-item-height;
    border-top-left-radius: $sz-border-radius;
    border-bottom-left-radius: $sz-border-radius;
}

.user__data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    max-width: 170px;
    overflow: clip;
}

</style>
