<template>
    <div id="app">
        <p style="color:#0f0; font-size:18px">数值: {{dataCount}}//{{doubleCount}}---{{sumCount}}---{{allCount}}</p>
        <br/>
        <a-button type="primary" @click="handleClickSync">++ sync</a-button>
        <br/>
        <br/>
         <a-button type="primary" @click="handleClickAsync">++ async</a-button>
         <br/>
         <div>{{scount || -1}}--{{sname || 'xxx'}}</div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    export default {
        data() {
            return {
                count: 5,
                obj:{
                    // data 中的对象 的属性
                    // 属性为字符串 未做声明时在事件函数中做改变时会触发刷新
                    // 属性为数值时 也可以 对象也可以
                    //mute:-1,
                }
            }
        },
        computed:{
            // 展开对象,将state中的对象融入到 计算属性对象中去
            ...mapState({
            dataCount: state => state.count,
            sumCount(state){
                //要能使用this 必须使用 （）函数
                return state.count + this.count;
            },
            scount: state => state.obj.count,
            sname: state => state.obj.name

        }),
        ...mapGetters(['doubleCount']),
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
                //当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变
                this.$store.commit({type: "increment", amount: 10});
                this.obj = {count: 100, pname:'io'}
                
                
            },
            handleClickAsync(){
                this.obj.mute += 100;
                this.$store.dispatch("increment", 100);
                this.obj.pname = "Jaque Lee."+'lf;dlf;'
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