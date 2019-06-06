<template>
    <div>
        <TestChild  v-on:child-click="po">
        </TestChild>
         <slot/>
    </div>
</template>

<script>
    import TestChild from './TestChild'
    export default {
        components: {
            TestChild
        },
        methods: {
            po(){
                console.log("LLLL");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>