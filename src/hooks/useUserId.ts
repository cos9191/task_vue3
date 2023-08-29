import { ref } from 'vue'

const userIdCache = new Map()

export default function useUserId () {
    if (!userIdCache.has('instance')) {
        userIdCache.set('instance', createUserIdInstance())
    }

    return userIdCache.get('instance')
}

function createUserIdInstance () {
    const selectedUserId = ref(0)

    const changeUserId = (userId: number) => {
        selectedUserId.value = userId
    }

    return {
        selectedUserId, changeUserId
    }
}
