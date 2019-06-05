<template>
    <div id="app">
        <div> id: {{ $route.params.id }}</div>
        <br/>
        <div id="c1"></div>
        <br/>
        <br/>
        <div>input1： {{input}}</div>
        <div>input2： {{input2}}</div>
        <br/>
        <p style="color:#0f0; font-size:18px">数值: {{dataCount}}//{{doubleCount}}---{{sumCount}}---{{allCount}}</p>
        <br/>
        <a-button type="primary" @click="handleClickSync">++ sync</a-button>
        <br/>
        <br/>
        <a-button type="primary" @click="handleClickAsync">++ async</a-button>
        <br/>
        <div>{{metoObj.count || -1}}--{{metoObj.name || 'xxx'}}---{{metoObj.meto}}</div>
        <br/>
        <p>{{result}}</p>
        <br/>
        <input :value="inputVal" @input="updateVal" :style="{width: '30%'}">
        <br/>
        <br/>
        <input v-model="inputVal2" :style="{width: '30%'}">
    </div>
</template>

<script>
    import G2 from '@antv/g2';
    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapGetters, mapActions  } = createNamespacedHelpers('app')
    import {INCREMENT, SET_OBJ, ASYNC_INCREMENT} from './mutations/mutation-types'
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
                metoObj: state => state.obj,
                inputVal: state => state.input,
                input2: state => state.input2,
             }),
            ...mapGetters(['doubleCount', 'result', 'input', 'input2']),
            allCount(){
                return this.dataCount + this.sumCount;
            },
            inputVal2:{
                get(){
                    return  this.input2// or this.$store.state.app.input2;
                },
                set(nVal){
                    this.$store.commit("app/updateInput2", nVal);
                }
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
            ...mapActions({
                add: `${ASYNC_INCREMENT}`,
                opt: 'actionB'
            }),
            handleClickSync() {
                //当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变
                this.$store.commit({type: `app/${INCREMENT}`, amount: 10});
                this.$store.commit({type: `app/${SET_OBJ}`, count: 100, name:'JaqueLee.'})
                this.obj = {count: 100, pname:'io'} 
                this.drawGraph(); 
            },
            handleClickAsync(){
                // this.count += 100;
                // // 异步调用函数
                // this.$store.dispatch({type: ASYNC_INCREMENT, amount: 10});
                // setTimeout(()=>{
                //     this.count -= 50;
                // }, 500)
                // action 返回 Promise
                this.opt();
                // this.add().then((data)=>{
                //     if(data.status == 'done'){
                //         this.$store.commit({type: INCREMENT, amount:data.amount || 55});
                //         alert(JSON.stringify(data));
                //     }
                // });
               
            },
            updateVal(e){
                this.$store.commit('app/updateInput', e.target.value);
            },
            drawGraph(){
            const data = [
                { genre: 'Sports', sold: 275 },
                { genre: 'Strategy', sold: 115 },
                { genre: 'Action', sold: 120 },
                { genre: 'Shooter', sold: 350 },
                { genre: 'Other', sold: 150 }
                ]; 
            // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
            // Step 1: 创建 Chart 对象
            const chart = new G2.Chart({
            container: 'c1', // 指定图表容器 ID
            width : 600, // 指定图表宽度
            height : 300 // 指定图表高度
            });
            // Step 2: 载入数据源
            chart.source(data);
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart.interval().position('genre*sold').color('genre')
            // Step 4: 渲染图表
            chart.render();
            }
        },
        mounted () {
            //this.drawGraph(); 
        },
    }
</script>

<style lang="scss" scoped>
#app{
    text-align: center;
    vertical-align: center;
}
</style>