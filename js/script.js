
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
        },
      ],
      error:'',
      newTask: '',
    }
    },
  
    methods:{
      remove(i){
        if (this.tasks[i].done) {
          this.tasks.splice(i,1)
          this.error = '';
        }else{
          this.error = "Puoi eliminare il task solo se é giá stato barrato!!"
        }
      },

      add(){
        if (this.newTask.length >3) {
          const taskAdded = {
            text: this.newTask,
            done: false,
          };
          this.tasks.push(taskAdded);
          this.error = '';
        }else{
          this.error = "Scrivi qualcosa di senso compito"
        }
      }
    },

    mounted(){
      console.log("nuova task", this.newTask);
    }
}).mount('#app')