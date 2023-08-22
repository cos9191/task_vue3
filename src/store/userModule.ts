// @ts-nocheck
import axios from 'axios'

export const userModule = {
    state: () => ({
        users: [],
        isUsersLoading: false,
        searchQuery: ''
    }),
    getters: {
        searchedUsers (state) {
            return [...state.users].filter(
                user => user.name.toLowerCase().includes(state.searchQuery.toLowerCase())
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
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }
        }
    },
    namespaced: true
}
