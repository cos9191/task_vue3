import { createStore } from 'vuex'
import { userModule } from '@/store/userModule'

export default createStore({
    state: {},
    modules: {
        user: userModule
    }
})

export class RootState {
}
