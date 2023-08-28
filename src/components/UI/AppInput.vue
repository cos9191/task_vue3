<template>
    <input
        :value="modelValue.join(', ')"
        @input="updateInput"
        class="input"
        type="text"
    >
</template>

<script>
export default {
    name: 'app-input',
    props: {
        modelValue: Array
    },
    methods: {
        updateInput (event) {
            const inputString = event.target.value
            const inputArray = inputString.split(/[,\s]+/)
            this.$emit('update:modelValue', inputArray)
        }
    }
}
</script>

<style lang="scss" scoped>

.input {
    width: 100%;
    min-height: 50px;
    border: 2px solid $color-input-border;
    padding: 10px 15px 8px;
    border-radius: $sz-border-radius;
    font-family: inherit;
}

input::placeholder {
    font-family: $ff-default;
}

</style>
