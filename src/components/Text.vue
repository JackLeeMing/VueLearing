<template>
  <span @click="onClick">{{my_text}}</span>
</template>
<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Just a Text."
            },
        },
        data() {
            return {
                my_text: this.text,
            }
        },
        methods: {
            onClick() {
               this.my_text = "Hello" 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>