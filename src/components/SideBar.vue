<template>
    <div class="sidebar-wrapper">
        <app-title>Поиск сотрудников</app-title>
        <app-input
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Введите Id или имя"
            v-focus
        />
        <user-list class="sidebar__list"
            :users="users"
            :searchedUsers="searchedUsers"
            :searchQuery="searchQuery"
            :loadingData="isUsersLoading"
        />
    </div>
</template>

<script lang="ts">
import UserList from '@/components/UserList.vue'
import AppInput from '@/components/UI/AppInput.vue'
import AppTitle from '@/components/UI/AppTitle.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    components: {
        AppTitle,
        AppInput,
        UserList
    },
    methods: {
        ...mapMutations({
            setSearchQuery: 'user/setSearchQuery'
        }),
        ...mapActions({
            fetchUsers: 'user/fetchUsers'
        })
    },
    mounted () {
        (this as any).fetchUsers()
    },
    computed: {
        ...mapState('user', ['users', 'isUsersLoading', 'searchQuery']),
        ...mapGetters({
            searchedUsers: 'user/searchedUsers'
        })
    }
}
</script>

<style lang="scss" scoped>

.sidebar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px 20px 4px 20px;
    border-right: 1px solid $color-border;
}

.sidebar__list {
    margin-top: 20px;
}

</style>
