<template>
    <div>
        <span @click="onClick">{{text}}-@{{itemCount}}</span>
        <label style="color:#f00">{{parentUser.firstName}}</label>
        <v-input></v-input>
        <slot>default</slot>
    </div>
</template>
<script>
    import MyInput from './CustomInput'
    export default {
        components: {
            'v-input': MyInput,
        },
        
        props: {
            text: {
                type: String,
                default: "Just a Text."
            },
        },
        data() {
            return {
                my_text: this.text,
                itemCount:0,
                user:{
                    lastName:'Lee',
                    firstName:'Jaque'
                }
            }
        },
        methods: {
            onClick() {
               this.itemCount += 1; 
               console.log(this.$parent.user, this.getUser().firstName, this.parentUser);
            }
        },
        //依赖注入 该方法由父级组件 注入 通过 provide 
        // 然后在任何后代组件里，我们都可以使用 inject 选项来接收指定的我们想要添加在这个实例上的属性
        inject:['getUser', 'parentUser']
    }
</script>

<style lang="scss" scoped>

</style>