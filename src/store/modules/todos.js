import axios from 'axios'

const state = {
    todos:[]
}

//getter-->get 'pieces of state' or 'computed values' from state

const getters = { 
    allTodos: state => state.todos
}

const actions = { 

    async fetchTodos({ commit }) {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/users/1/todos'
        )
        commit('setTodos', res.data)
    },
    async addTodo({commit}, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed:false});

        commit('newTodo', res.data)
    },
    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        
        commit('removeTodo', id)
    },
    async filterTodos({commit},e) {

        const limit = e.target.options.[e.target.options.selectedIndex].innerText
    
        const res =await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

        commit('setTodos', res.data)
    },
    async UpdateTodo({commit} ,updateTodo) {
        const res =await axios.put(`https://jsonplaceholder.typicode.com/todos/${updateTodo.id}`)
         console.log(res)
        commit('updateTodo', updateTodo )
    }

}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state,todo) => state.todos.unshift(todo),
    removeTodo: (state,id) => state.todos = state.todos.filter(todo=> todo.id !== id),
    updateTodo: (state, updateTod) => {
        const index =state.todos.findIndex(todo=> todo.id === updateTod.id)
        if(index!== -1) {
            state.todos.splice(index, 1 , updateTod)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}