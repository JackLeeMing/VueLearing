<template>
  <div class="app" v-bind:id="'popp'">
    {{listToString}}
    <h1>{{ msg }}</h1> 
      <div id="poppp">
        <div v-bind:[fg]="gf">{{searchText}}===>{{searchText2}}</div>

        <div :style="{fontSize: postFontSize+'em'}">{{inVal || '~~'}}</div>
        <br />
          <input type="text" :value="inVal" @change="handleChange" @input="dataChange">
        <br />
        <br />
        <div @click="clcikParent">
          <a-button type="primary" @click="clcikChild1" >清空</a-button> &nbsp;&nbsp;
          <a-button type="primary" @click.stop="clcikChild2" v-bind:disabled="pop">重置</a-button>
        </div>
    </div>
    <ul>
      <v-item v-for="(item, index) in reverseItems" :key="`${item}-${index}`" title="Hello">
        <template v-slot:item="itemProps">
          <span :class="{itemOut:itemProps.checked,  'text-danger': itemProps.checked}">{{item}}</span>
        </template>
      </v-item>
    </ul>
    <!--从组建内部外传的事件监听 放在父组件的 对应子组件的标签上 用v-on 的形式 可直接操作 data-->
    <v-term v-on:inPost="postFontSize += 0.1"></v-term>
    
    <custom-input v-model="searchText">hello1</custom-input>
    <custom-input v-model="searchText2">hell2</custom-input>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import Item from './Item';
import Term from './Term';
import CustomInput from './CustomInput'
export default {
  name: 'HelloWorld',
  inheritAttrs: false,
  props: {
    msg: String,
    val:{
      type: String,
      default: ''
    }
  },
  components: {
    'v-item':Item,
    'v-term':Term,
    CustomInput,
  },
  computed: {
    listToString() {
      return this.list.join('--'); 
    },
    reverseItems(){
      return this.list.reverse();
    }
  },
  data() {
    return {
      list: ['a1', 'a2', 'a3'],
      inVal:'',
      pop:true,
      gf:'45',
      fg:'item',
      searchText:'ljk123',
      searchText2:'ljk124',
      hasError:true,
      hidden:false,
      postFontSize:1,
    }
  },
  methods: {
    dataChange(e){
      this.inVal = e.target.value;
      this.pop = false;
      this.$emit('change', this.inVal);
    },
    handleChange(e){
      this.inVal = e.target.value;
      this.$emit('change', this.inVal);
    },
    clcikParent() {
      this.inVal = '';
      this.pop = true;
      let p = this.$emit('change', "");
      console.log('p', p);
    },
    clcikChild1(e){
      this.list.push("CCDD");
      e.stopPropagation();
      this.inVal = '';
      this.pop = true;
      let p = this.$emit('change', "");
    },
    clcikChild2(){
      // 不是响应性的 不会触发UI刷新
      // this.list[1] = "AABBCC";
      //触发UI刷新
      //need import Vue from 'vue'
      // Vue.set(this.list, 1, 'AABBCC')
       this.$set(this.list, 1, this.inVal);
      // this.list.splice(1,1, 'AABBCC')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* .itemOut{
  color: blue;
  font-size: 36px;
} */
</style>
