<template>
    
    <div class="addTaskDiv">
    <h1>Add Task</h1>

    <form @submit="add">
    <p><label>Название задачи</label></p>
    <input type="text" v-model="taskname"/>

    <label>Пункты задачи</label>
    <input type="text" v-model="todo"/><button @click="addToDo">Добавить пункт</button>

    <div v-if="this.todos.length !== 0"> 
    <div v-for="todo in todos" :key="todo">
    {{todo}} <button v-if="todo" @click="delToDo(todo)" class="fl-right red">delete</button>
    <hr class="hr-add-task">
    </div>
    </div>
    <p>
    <input type="submit" value="Сохранить задание"/>
    </p>
    </form>
    </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  data(){
    return{
      taskname: '',
      todo: '',
      todos: []
    }
  },
  methods: {
    ...mapActions(["addTask"]),
    // Добавляем пункт
    addToDo(e){
      if (this.todo.length!==0){
      this.todos.push(this.todo)
      this.todo = ''
      } 
      e.preventDefault()
    },
    delToDo(todo){
      // удаляем один элемент по индексу, который совпадает с текстом, значение (value) todo
      this.todos.splice(this.todos.findIndex(value => value === todo), 1);
      // одинаковый функционал в Task
    },
    add(e) {
      e.preventDefault()
      // делаем предотвращение поведения по дефолту - чтобы при отправке компонент не рендерился обратно в состояние (hide - где showAddTask = false)

      // если хотя бы одно из этих условий не true - вызывает предупреждение
      if (!this.taskname || this.todos.length === 0) {
        alert('Добавьте задание полностью!')
        return
      } 
      alert('Задание добавлено - можете посмотреть его на главной странице')
      // По-хорошему нужно сделать редирект на основную страницу и вместо alert - выполнить диалоговое окно

      const newTask = {
        taskname: this.taskname,
        todos: this.todos
      }

      this.taskname = ''
      this.todos = []

      this.addTask(newTask)
    }
  },
}

</script>