<template>
    <div class="demo">
        <button @click="onClick0" class="dynamic-component-demo-tab-button" :class="{'dynamic-component-demo-tab-button-active':active == 0}">Home</button>
        <button @click="onClick1" class="dynamic-component-demo-tab-button" :class="{'dynamic-component-demo-tab-button-active':active == 1}">Posts</button>
        <button @click="onClick2" class="dynamic-component-demo-tab-button" :class="{'dynamic-component-demo-tab-button-active':active == 2}">Archive</button>
        <div class="dynamic-component-demo-tab">
            <keep-alive>
            <component v-bind:is="currentTab" :text="currentTabComponent" ref="currentTab">
                <template v-slot:default>
                    <h1> HHHHHH---UUUU{{active}}</h1>
                </template>
            </component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Text from './Text'
import Term from './Term'
import CustomInput from './CustomInput'
    export default {
        components:{
            'v-text': Text,
            'v-term':Term,
            'v-input':CustomInput,
            'v-text0': Text,
            'v-text1': Text,
            'v-text2': Text,

        },
        computed: {
            currentTab(){
                switch (this.active) {
                    case 0:
                        return "v-text0";
                    case 1:
                        return "v-text1"    
                    default:
                        return "v-text2";
                }
            },
            currentTabComponent() {
                switch (this.active) {
                    case 0:
                        return "v-text";
                    case 1:
                        return "v-term"    
                    default:
                        return "v-input";
                }
            }
        },
        data () {
            return {
                active:0,
                user:{
                    firstName:'98',
                    lastName:'90'
                }
            }
        },
        methods: {
            onClick0() {
                console.log(this.getUser);
               this.active = 0; 
            },
            onClick1() {
                this.active = 1; 
            },
            onClick2() {
               this.active = 2;  
            },
         getUser(){
             return this.user;
         }
        },
        //注入 一个方法 供子组件调用
        //provide 选项允许我们指定我们想要提供给后代组件的数据/方法
        provide() {
            return {
                getUser: this.getUser,
                parentUser: this.user
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import '../styles/style'
</style>