<template>

  <div class="task">
      <!-- <button @click="deleteTask(this.taskTodelete)">Удалить задание целиком и полностью</button><br> -->
      <button @click="showWarn('Вы уверены что хотите удалить задание?')">Удалить задание целиком и полностью</button><br>

      Название задачи: {{task.taskname}} 
      <p><button class="fl-right" @click="edit" v-text="startEdit ? 'Редактировать' : 'Вернуться назад' "></button></p>
      <p>Пункты задания:</p>
      
      <div v-for="todo in task.todos" :key="todo">

      <ToDo :todo="todo" :startEdit="this.startEdit" @del-to-do="delToDo(todo)" @edit-to-do="editToDo" />
      </div>
      <p>
      <input type="text" placeholder="введите пункт" v-model="todo"/><button @click="addToDo">Добавить пункт</button>
      </p>
  </div>

  <ModalWindow
  @delete-task="deleteTask(this.taskTodelete)"
  />

</template>

<script>
import ToDo from '@/components/ToDo'
import ModalWindow from '@/components/ModalWindow'
export default {
  data(){
    return{
      startEdit: true,
      todos: this.task.todos,
      taskTodelete: this.task,
      todo: ''
    }
  },
  props: {
    task: Object,
  },
  components: {
    ToDo,
    ModalWindow
  },
  methods: {
    // отображаем текст в модальном окне (вызываем эту функцию из async deleteTask)
    showWarn(text){
        // эти селекторы в компоненте ModalWindow
      let modal = document.getElementById("my_modal");
      let modaltext = document.getElementById("modaltext");

      // Отображаем модальное окно и текст
      modal.style.display = "block";
      modaltext.innerHTML = text;
    },
    // такой же функционал в компоненте AddTask
    addToDo(e){
      if (this.todo.length!==0){
      this.todos.push(this.todo)
      this.todo = ''
      } 
      e.preventDefault()
    },
    edit(){
      this.startEdit = !this.startEdit
    },
    editToDo(todo, newToDo){
      // console.log(this.todos.findIndex(value => value === todo))
      // поймали индекс todo - который надо изменить (при нажатии кнопки save)

      // console.log(newToDo)
      // поймали v-model из компонента ToDo (редакия)

      this.todos[this.todos.findIndex(value => value === todo)] = newToDo
    },
    delToDo(todo){
      // удаляем один элемент по индексу, который совпадает с текстом, значение (value) todo
      this.todos.splice(this.todos.findIndex(value => value === todo), 1);

      // одинаковый функционал в AddTask
    },
    deleteTask(task){
      this.$emit('delete-task', this.$store.state.tasks.findIndex(value => value === task))
      // находим индекс задания
      // 
    },
    emits: ['delete-task']
  }
}

</script>

<style scoped>

</style>