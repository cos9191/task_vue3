// @ts-nocheck
import axios from 'axios'

export const userModule = {
    state: () => ({
        users: [],
        searchedUsers: [],
        isUsersLoading: false,
        searchQuery: []
    }),
    getters: {
        searchedUsers (state) {
            const searchQueries = state.searchQuery
                .filter(query => query.trim() !== '')
                .map(query => query.toLowerCase())
            return state.users.filter(user =>
                searchQueries.some(query => {
                    if (!isNaN(query)) {
                        return user.id === Number(query)
                    }
                    return user.name.toLowerCase().includes(query)
                })
            )
        }
    },
    mutations: {
        setUsers (state, users) {
            state.users = users
        },
        setLoading (state, bool) {
            state.isUsersLoading = bool
        },
        setSearchQuery (state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setSearchedUsers (state, searchedUsers) {
            state.searchedUsers = searchedUsers
        }
    },
    actions: {
        async fetchUsers ({ commit }) {
            try {
                commit('setLoading', true)
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users',
                    {}
                )
                commit('setUsers', response.data)
            } catch (err) {
                alert(`Обновите страницу или попробуйте позже \nОшибка\n${err}`)
            } finally {
                commit('setLoading', false)
            }
        }
    },
    namespaced: true
}
