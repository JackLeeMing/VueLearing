const MyMixin = {
  created(){
    this.hello();
  },
  data() {
    return {
      a: '1',
      b: '2',
      c: '3'
    }
  },
  methods: {
      hello() {
          console.log("mixin hello", this.$data);
      }
  },
}

export default MyMixin