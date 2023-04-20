const { createApp } = Vue

createApp({
  data() {
    return {
        testoInput: '',
        todos: [
            {
                text: 'Fare i compiti',
                done: false,
                editing: false
            },
            {
                text: 'Fare la spesa',
                done: true,
                editing: false
            },
            {
                text: 'Fare il bucato',
                done: false,
                editing: false
            }
        ],
        error: false,
        editedText: '',
      
    }
  },
  methods: {
    creaTodo(){

        if( this.testoInput != '' && this.testoInput.length > 5){
            this.todos.unshift({text: this.testoInput, done: false})
            this.testoInput = ''
            this.error = false
        } else {
            this.error = true
        }
    },

    cancellareLaTodo(i){
        this.todos.splice( i, 1 )
    },
    
    toggleDone(index) {
        this.todos[index].done = !this.todos[index].done;
    },

    startEditing(index) {
        this.todos[index].editing = true;
        this.editedText = this.todos[index].text;
    },
    finishEditing(index) {
        this.todos[index].text = this.editedText;
        this.todos[index].editing = false;
    },

  }
}).mount('#app')