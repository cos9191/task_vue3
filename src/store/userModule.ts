import axios from 'axios'
import { Commit } from 'vuex'
import { State } from '@/models/user.interface'

export const userModule = {
    state: (): State => ({
        users: [],
        searchedUsers: [],
        isUsersLoading: false,
        searchQuery: []
    }),
    getters: {
        searchedUsers (state: State) {
            const searchQueries = state.searchQuery
                .filter(query => query.trim() !== '')
                .map(query => query.toLowerCase())
            return state.users.filter(user =>
                searchQueries.some(query => {
                    if (!isNaN(Number(query))) {
                        return user.id === Number(query)
                    }
                    return user.username.toLowerCase().includes(query)
                })
            )
        }
    },
    mutations: {
        setUsers (state: State, users: []) {
            state.users = users
        },
        setLoading (state: State, bool: boolean) {
            state.isUsersLoading = bool
        },
        setSearchQuery (state: State, searchQuery: string[]) {
            state.searchQuery = searchQuery
        }
    },
    actions: {
        async fetchUsers ({ commit }: { commit: Commit }) {
            try {
                commit('setLoading', true)
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users',
                    {}
                )
                commit('setUsers', response.data)
            } catch (err) {
                alert(`Обновите страницу или попробуйте позже\nОшибка\n${err}`)
            } finally {
                commit('setLoading', false)
            }
        }
    },
    namespaced: true
}
