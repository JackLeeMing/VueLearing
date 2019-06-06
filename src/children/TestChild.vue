<template>
    <div>
        <a-button type="danger" @click="post">POST</a-button>
    </div>
</template>

<script>
    export default {
        methods: {
            post() {
                console.log('post')
               this.$emit('child-click'); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>