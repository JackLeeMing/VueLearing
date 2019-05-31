<template>
     <!--当 emit 的方法名 为input时 外部不必加自定义监听方法 因为外部绑定了 model-->
     <div>
        <input :value="value" v-on:input="$emit('input', $event.target.value)"/>
        <slot></slot>
     </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>