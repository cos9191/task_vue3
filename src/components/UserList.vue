<template>
    <div class="user-list__wrapper">
        <app-title>Результаты</app-title>
        <p v-if="loadingData">
            Загрузка пользователей...
        </p>
        <p v-if="!searchQuery.length && !loadingData">
            начните поиск
        </p>
        <div v-if="searchQuery.length && searchedUsers.length" class="user-list">
            <transition-group name="user-list">
                <user-item
                    v-for = "user in searchedUsers"
                    :user = "user"
                    :key = "user.id"
                    @click="handleClick(user.id)"
                />
            </transition-group>
        </div>
        <p v-if="!loadingData && !searchedUsers.length && searchQuery.length">
            ничего не найдено
        </p>
    </div>
</template>

<script>
import UserItem from '@/components/UserItem'
import AppTitle from '@/components/UI/AppTitle'
import useUserId from '@/hooks/useUserId'

export default {
    components: {
        UserItem,
        AppTitle
    },

    props: {
        users: {
            type: Array,
            required: true
        },
        searchedUsers: {
            type: Array,
            required: true
        },
        loadingData: {
            type: Boolean,
            required: true
        },
        searchQuery: {
            type: Array,
            required: true
        }
    },

    setup () {
        const { changeUserId } = useUserId()

        const handleClick = (userId) => changeUserId(userId)

        return {
            changeUserId,
            handleClick
        }
    }
}
</script>

<style lang="scss" scoped>

.user-list__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.user-list {
    margin: 0 -$sz-shadow-blur-radius;
    padding: 0 $sz-shadow-blur-radius;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: $sz-list-height;
    max-height: $sz-list-height;
}

.user-list-item {
    display: inline-block;
    margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.4s ease;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

.user-list-move {
    transition: transform 0.4s ease;
}

</style>
