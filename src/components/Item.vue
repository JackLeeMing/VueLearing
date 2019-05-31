<template>
    <li class="item" @click.stop="click">
       <input type="checkbox" v-model="checked">
       <slot name="item" v-bind="{checked}" ></slot> 
    </li>
</template>

<script>
    export default {
        name: 'Item',
        inheritAttrs: false,
        props: {
            item: {
                type: String,
                default: '--'
            },
        },

        data() {
            return {
                checked: false
            }
        },
        methods: {
            click() {
            }
        },
    }
</script>

<style lang="scss" scoped>
.item{
    color: red;
    text-align: left;
    font-size: 20px;
}

.itemOut{
  color: blue;
  font-size: 35px;
}

.text-danger
{
    color:darkmagenta,
}
</style>