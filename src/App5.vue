<template>
    <div id="app">
        <p style="color:#0f0; font-size:18px">数值: {{dataCount}}---{{sumCount}}---{{allCount}}</p>
        <br/>
        <a-button type="primary" @click="handleClickSync">++ sync</a-button>
        <br/>
        <br/>
         <a-button type="primary" @click="handleClickAsync">++ async</a-button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                count: 5
            }
        },
        computed:{
            // 展开对象,将state中的对象融入到 计算属性对象中去
            ...mapState({
            dataCount: state => state.count,
            sumCount(state){
                //要能使用this 必须使用 （）函数
                return state.count + this.count;
            }
        }),
        allCount(){
            return this.dataCount + this.sumCount;
        }

        },
        /*
        注意 count 不能在 data 中做预先定义
        computed: mapState([
              // 映射 this.count 为 store.state.count
            'count'
        ]),
        */
        methods: {
            handleClickSync() {
                this.$store.commit("increment");
            },
            handleClickAsync(){
                this.$store.dispatch("increment");
            }
        },
    }
</script>

<style lang="scss" scoped>
#app{
    text-align: center;
    vertical-align: center;
}
</style>