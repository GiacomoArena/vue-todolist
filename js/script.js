
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
    }
    },
  
}).mount('#app')