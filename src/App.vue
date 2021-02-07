<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <todo/>
      </div>
   </div>
</template>

<script>
import todo from './components/Todo'
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'
export default {
  name: 'App',
  components: {
    todo,
    AddTodo ,
    FilterTodos
  }
}
</script>

<style>
 body {
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   line-height: 1.6;
   background-color: antiquewhite;
 }
 .container {
   max-width: 1100px;
   margin: auto;
   overflow: auto;
   padding: 0 2rem;
 }
</style>
