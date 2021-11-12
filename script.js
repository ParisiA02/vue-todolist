/*
    1. dichiaro l'aray di oggetti
    2.dichiaro i metodi che mi permettono di rimuovere un item e aggiungere una task
*/
var todoList = new Vue({
    el:"#todoList",
    data: {
        newTask:"",
        toDoArray:[
            {               
                text: "Fare la spesa",
                done: false
            },
            {                
                text: "Consegnare esercitazione",
                done: true
            },
            {               
                text: "Stampare File",
                done: false
            },
            {
                text: "Riassumere concetto",
                done: true
            },
            {
                text: "Mangiare",
                done: false
            }
        ]
    },
    methods:{
        removeItem(index){
            this.toDoArray.splice(index,1);
        },
        addTask(){
            this.toDoArray.push({text:this.newTask, done:false},);
            this.newTask = "";
        }
    }
});