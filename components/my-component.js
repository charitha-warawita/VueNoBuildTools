export default {
    data() {
      return { count: 0 }
    },mounted : function(){
        alert("mounted component 1");
    },
    template: `
    <div>count is {{ count }}</div> 
    <br> 
    <button @click="count++">Increment ++</button>`
  }