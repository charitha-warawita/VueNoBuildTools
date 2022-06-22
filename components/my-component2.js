export default {
    data() {
      return { 
        count: 25, 
        baseList : [], 
        baseModel: '',
        styleObject: {
          color: 'green',
          fontSize: '24px'
        }
      }
    },mounted : function(){
        alert("mounted component 2");
    },
    methods:{
      SetListBaseInfo(){
        //this.baseList = [{id:1, name:'Gopal'}, {id:2, name:'Yash'}];
        //alert(this.baseModel);
        this.baseList.push(this.baseModel);
        console.log(this.baseList);
        this.baseModel = '';
      },
      GetListBaseInfo(){
        return this.baseList;
      },
      TestInfo(){
        //alert(this.baseList);
        Swal.fire(
          'The baseList',
          JSON.stringify(this.baseList),
          'success'
        )
      }
    }
    ,
    template: `<p>
    <div :style="styleObject">Count is {{ count }}</div> 
    <br> 
    <button @click="count--">Decrement --</button> </p>
    <br> 
    <br>
    <textarea v-model='baseModel'></textarea><br>
    <button @click="SetListBaseInfo">SetListBaseInfo</button> </p>
    <br> <br>
    <button @click="TestInfo">TestInfo</button> </p>
  
    <br><br>
    <span v-for="item in this.baseList"> * {{item}} <br></span>
    `
  }