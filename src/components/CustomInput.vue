<template>
     <!--当 emit 的方法名 为input时 外部不必加自定义监听方法 因为外部绑定了 model-->
     <div>
        <input :value="value" v-on:input="$emit('input', $event.target.value)"/>
        <!-- <label>{{parentUser.firstName}}</label> -->
        <slot></slot>
     </div>
</template>
<script>
    export default {
        props: {
            initValue: {
                type: String,
                default: ''
            },
        },
        data () {
            return {
                value: this.initValue
            }
        },
        computed: {
            
        },
        //不可越级
        // inject:['parentUser']
    }
</script>

<style lang="scss" scoped>

</style>