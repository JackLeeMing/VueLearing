<template>
    <div>
        <span style="color:#f0f;font-size:15px;">{{number}}</span>
         <a-button type="primary" @click="$emit('inPost')" >外传</a-button> &nbsp;&nbsp;
    </div>
</template>

<script>
    export default {
        props: {
            number: {
                type: Number,
                default :0 
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>