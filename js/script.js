
const {createApp} = Vue;

createApp({
  
  data(){
    return{
      tasks:[
        {
          text: "andare a fare la spesa",
          done: false,
        },
        {
          text: "andare in palestra",
          done: false,
        }
      ],
      error:'',
    }
    },
  
    methods:{
      remove(i){
        if (this.tasks[i].done) {
          this.tasks.splice(i,1)
          this.error = '';
        }else{
          this.error = "Puoi eliminare il task solo se é giá stato barrato"
        }
      }
    }
}).mount('#app')