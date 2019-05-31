<template>
    <div class="demo">
        <button @click="onClick0" class="dynamic-component-demo-tab-button" :class="{'dynamic-component-demo-tab-button-active':active == 0}">Home</button>
        <button @click="onClick1" class="dynamic-component-demo-tab-button" :class="{'dynamic-component-demo-tab-button-active':active == 1}">Posts</button>
        <button @click="onClick2" class="dynamic-component-demo-tab-button" :class="{'dynamic-component-demo-tab-button-active':active == 2}">Archive</button>
        <div class="dynamic-component-demo-tab">
            <component v-bind:is="'v-text'" :text="currentTabComponent"></component>
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
            'v-input':CustomInput

        },
        computed: {
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
            }
        },
        methods: {
            onClick0() {
               this.active = 0; 
            },
            onClick1() {
                this.active = 1; 
            },
            onClick2() {
               this.active = 2;  
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/style'
</style>