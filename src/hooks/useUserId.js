import { ref } from 'vue'

const userIdCache = {}

export default function useUserId () {
    if (!userIdCache.instance) {
        userIdCache.instance = createUserIdInstance()
    }

    return userIdCache.instance
}

function createUserIdInstance () {
    const selectedUserId = ref(0)

    const changeUserId = (userId) => {
        selectedUserId.value = userId
    }

    return {
        selectedUserId, changeUserId
    }
}
