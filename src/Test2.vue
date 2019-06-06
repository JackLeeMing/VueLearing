<template>
    <div :style="{textAlign: 'center'}">
        <br/>
        <br/>
        <div>model: {{model}}</div>
        <br/>
        <Father v-on:child-click="po">
            哈哈哈
        </Father>

        <lllk v-bind:is="f"></lllk>
        <br/>
        <input v-model="model" value="val">
    </div>
</template>

<script>
    import Father from './children/Father'
    export default {
        data() {
            return {
                model: '',
                val:'',
                f:'pg',
                ppg:{
                    a:1,
                    b:2
                }
            }
        },
        components: {
            Father,
            'pg':Father,
        },
        methods: {
            po(){
                console.log("LLLL2");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>