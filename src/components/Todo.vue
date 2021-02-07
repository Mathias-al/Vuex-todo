<template>
  <div>
      <h3>Todos</h3>
      <div class="legend">
      <span>雙擊標記為完成</span>
      <span>
          <span class='incomplete-box'></span>=incomplete
      </span>
      <span>
          <span class="complete-box"></span>=complete
      </span>
      </div>

      <div class="todos">
          <div
           @dblclick='Onclick(todo)'
            v-for='todo in allTodos' 
            :key='todo.id' 
            class="todo"
            :class ='{"is-completed":todo.complete}'
            >
              {{ todo.title }}
              <i class='fas fa-trash-alt' @click='deleteTodo(todo.id)'></i>
          </div>
      </div>
  </div>  
</template>

<script>
import { mapGetters ,mapActions } from 'vuex'
export default {
   name:'Todos',
   methods:{
      ...mapActions(['fetchTodos','deleteTodo', 'UpdateTodo']),
      Onclick(todo) {
           const update =  {
               id:todo.id,
               complete:!todo.complete,
               title:todo.title
           }
           this.UpdateTodo(update)
      },
   } ,
   
   computed: mapGetters(['allTodos']),
   
   created(){
       this.fetchTodos();
   }
}
</script>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    grid-gap: 1rem
}

.todo {
   border: 1px solid #ccc;
   background:rgb(191, 233, 94) ;
   padding: 1rem;
   border-radius: 5px;
   text-align: center;
   position: relative;
   cursor: pointer;
}
i {
    position:absolute;
    bottom: 10px;
    right: 10px;
    color:#fff ;
    cursor: pointer;
}
.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #35495e;
}
.incomplete-box {
   display: inline-block;
    width: 10px;
    height: 10px;
    background-color: orange;
}
@media (max-width: 500px) {
    .todos {        /*寬度小於500時，所有內容會變成一列!*/
        grid-template-columns:1fr ;
    }
}
.is-completed {
  background-color: rgb(206, 96, 23);
  color:aquamarine
}
</style>