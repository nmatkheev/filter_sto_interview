<template>

    <p>
      Add Task
    </p>

    <form @submit="onSubmit">
    <p>
    <label>Название задачи</label>
    <input type="text" 
    v-model="taskname"/>
    </p>

    <p>
    <label>Пункты задачи</label>
    <input type="text" 
    v-model="todo"/>
    
    <button @click="addToDo">Добавить пункт</button>
    </p>

    <div v-if="this.todos.length !== 0">
      
      Пункты задачи
      <div v-for="todo in todos" :key="todo">
        {{todo}} <i v-if="todo" @click="delToDo(todo)">delete</i>
      </div>
      
    </div>

    <p><input type="submit" value="Сохранить задание"/></p>

    </form>

    <p>
      <router-link :to="{name: 'Home'}">Вернуться на главную</router-link>
    </p>

</template>

<script>

export default {
  data(){
    return{
      taskname: '',
      todo: '',
      todos: []
    }
  },
  methods: {
    addToDo(e){
      // в будущем надо прописать функционал, который не будет допускать добавление повторного задания, потому что метод delToDo - сразу ломается
      if (this.todo.length!==0){
      this.todos.push(this.todo)
      this.todo = ''
      } 
      e.preventDefault()
    },
    delToDo(todo){
      // удаляем один элемент по индексу, который совпадает с текстом, значение (value) todo
      let delToDoindex = this.todos.findIndex(value => value === todo)
      this.todos.splice(delToDoindex, 1);

    },
    onSubmit(e) {
      // если хотя бы одно из этих условий не true - вызывает предупреждение
      if (!this.taskname || this.todos.length === 0) {
        alert('Добавьте задание полностью!')
        return
      } 
      alert('Задание добавлено - можете посмотреть его на главной странице')
      // По-хорошему нужно сделать редирект на основную страницу и вместо alert - выполнить диалоговое окно

      // немаловажный момент - пользователь может ввести 10 пунктов, но забыть ввести задание, тогда его пункты не сохранятся - все сброситься - стоит подумать об этом
      const newTask = {
        taskname: this.taskname,
        todos: this.todos
      }

      console.log(newTask)

      // на данный момент работает и без этого функционала
      this.taskname = ''
      this.todos = []

      e.preventDefault()
    }
  }
}

</script>

<style scoped>

</style>