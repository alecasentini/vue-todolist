const { createApp } = Vue

createApp({
  data() {
    return {
        testoInput: '',
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ],
        error: false,
      
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
    }

  }
}).mount('#app')