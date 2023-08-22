import { DefineComponent } from 'vue'

export default {
    mounted (el: DefineComponent) {
        el.focus()
    },
    name: 'focus'
}
