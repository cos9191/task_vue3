<template>
    <div class="user-profile-wrapper">
        <div
            v-if="selectedUser"
            class="user-profile"
        >
            <div class="user-profile__img-wrapper">
                <img src="@/assets/img_plug.svg" alt="Фото профиля"/>
            </div>
            <div class="user-profile__data">
                <app-title>{{ selectedUser.name }}</app-title>
                <p><strong>email: </strong>{{ selectedUser.email }}</p>
                <p><strong>phone: </strong>{{ selectedUser.phone }}</p>
                <p class="user-profile__extra-gap">
                    <strong>О себе:</strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <p v-else class="user-profile__no-data">Выберите сотрудника, чтобы посмотреть его профиль</p>
    </div>
</template>

<script lang="ts">
import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import useUserId from '@/hooks/useUserId'
import { User } from '@/models/user.interface'
import AppTitle from '@/components/UI/AppTitle.vue'

export default {
    components: {
        AppTitle
    },

    setup () {
        const store = useStore()
        const { selectedUserId } = useUserId()
        const selectedUser: ComputedRef<User> = computed(() => {
            const searchedUsers = store.state.user.users
            if (searchedUsers) {
                return searchedUsers.find((user: User) => user.id === selectedUserId.value)
            }
            return null
        })

        return {
            selectedUser
        }
    }
}
</script>

<style lang="scss" scoped>

.user-profile-wrapper {
    display: flex;
    align-content: flex-start;
    justify-content: center;
    text-align: center;
    padding: 30px 20px;
}

.user-profile-wrapper * {
    width: 100%;
}

.user-profile {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;

    h2 {
        color: $color-default-black;
    }

    strong {
        color: $color-title-component;
    }

    &__data {
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 15px;
    }

    &__extra-gap {
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 30px;

        margin-top: 15px;
    }

    &__no-data {
        align-self: center;
    }
}

</style>
