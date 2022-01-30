<template>
<!-- Tasks - родительский компонент -->

  <div class="task">
      
        <!-- Кнопочки - удалить задание целиком и полностью, редактировать || вернуться назад -->
        <button @click="showWarn('Вы уверены что хотите удалить задание?')" class="red">Удалить задание целиком и полностью</button>
        <button class="fl-right edit" @click="edit" v-text="startEdit ? 'Редактировать' : 'Вернуться назад'"></button>
 
      <!-- отображается при редакции названия задачи -->
      <p v-if="!this.startEdit && this.editTask">
        <textarea type="text" v-model="newTaskName" placeholder="новое название задачи" maxlength="50"></textarea>
        <!-- узнал о свойстве maxlength поздно = поэтому внизу есть лишний код - и не только здесь - кстати внизу указано let taskNameMaxLength = "100" - а здесь "50" - чтобы не забыть отредактировать все версии input type = "text" && textarea - может вылететь из головы -->
      </p>

      <!-- имя задачи -->
      <p>
        <input class="checkbox" type="checkbox" @change="changed">
        <span class="taskname">{{this.taskname}}</span>
      </p>

      <hr class="hr-task">

      <!-- функционал редакции имени задачи -->
      <button class="editTaskName" v-if="!this.startEdit" v-text="editTask ? 'Отменить редактирование' : 'Редактировать' " @click="editTaskName"></button>
      <button @click="saveTaskName(this.newTaskName)" class="editTaskName" v-if="!this.startEdit && this.editTask">Save</button>

      <!-- функционал отображения пунктов задания -->
      <div class="todos" v-for="todo in task.todos" :key="todo">
      <ToDo :todo="todo" :startEdit="this.startEdit" @del-to-do="delToDo(todo)" @edit-to-do="editToDo" />
      </div>

      <!-- функционал добавления пункта задания -->
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
      // v-models && другое
      startEdit: true, 
      todos: this.task.todos,
      taskTodelete: this.task,
      todo: '',
      editTask: false,
      newTaskName: [],
      taskname: this.task.taskname
    }
  },
  props: {
    // из компонента Tasks
    task: Object,
  },
  components: {
    ToDo,
    ModalWindow
  },
  methods: {
    saveTaskName(newTaskName){

      // let wordLength = newTaskName.split(' ') 
      // let taskNameMaxLength = 100 
      // for (let i=0; i<wordLength.length; i++){ 
      //   if (wordLength[i].length < 20 && this.newTaskName.length !== 0 && this.newTaskName.length < taskNameMaxLength){ 
      //     this.taskname = newTaskName 
      //     let indexOfTask = this.$store.state.tasks.findIndex(value => value === this.task) 
      //     this.$store.state.tasks[indexOfTask].taskname = newTaskName } 
      //     else { 
      //       alert('Задание либо слишком длинное (больше ' + taskNameMaxLength + ' символов!) либо вы вообще ничего не написали! - Возможно вы также ввели слишком длинное слово, которое больше чем ' + taskNameMaxLength + ' символов! Будьте внимательны!') 
      //       } 
      // }
      // ограниченная длина слова - в названии задания
      // этот код работает - но на каждую итерацию массива - а это нам не нужно

      let taskNameMaxLength = 100

      if (this.newTaskName.length !== 0 && this.newTaskName.length < taskNameMaxLength){
  
        this.taskname = newTaskName
        let indexOfTask = this.$store.state.tasks.findIndex(value => value === this.task)
        this.$store.state.tasks[indexOfTask].taskname = newTaskName

      } else {
        alert('Задание либо слишком длинное (больше ' + taskNameMaxLength + ' символов!) либо вы вообще ничего не написали! Будьте внимательны!')
      }
      // ДУБЛИРУЮЩАЯСЯ ЛОГИКА!
      // такой же фунционал в ToDo.vue - подумать о возможном функционале замыкания (как вариант - если это возможно и упростит, а не усложнит код)

      // если ввести слово длинною больше чем div - оно выйдет за его пределы + надо бы поставить ограничение на общую длину задания
    },
    editTaskName(){
      this.editTask = !this.editTask
    },
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