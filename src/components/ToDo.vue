<template>

    <p v-if="!editToDo && !startEdit">
    <textarea type="text" v-model="newToDo" placeholder="введите новый текст пункта"></textarea>
    </p>

    <input class="checkbox" type="checkbox" @change="changed">
    <span class="toDoText">
    {{todo}}
    </span>
    <hr class="hr-task">
    <button @click="edit" v-if="!startEdit" v-text="editToDo ? 'Редактировать' : 'Отменить редактирование' "></button>
    
    <button @click="save(todo)" v-if="!editToDo && !startEdit">Save</button>
    <button v-if="!startEdit" @click="this.$emit('del-to-do')" class="fl-right red">Удалить пункт</button>

</template>

<script>

export default {
  data(){
    return {
      // v-models
      editToDo: true,
      saveToDo: this.todo,
      newToDo: ''
    }
  },
  props: {
    // props из Task
    todo: String,
    startEdit: Boolean
  },
  methods: {
    changed(){
      console.log('changed')
      // отрабатываем checkbox
      // 3 задача файла README.md
    },
    edit(){
      // типичный toggle
      this.editToDo = !this.editToDo
    },
    save(todo){
      let todoMaxLength = 150
      if (this.newToDo.length !== 0 && this.newToDo.length < todoMaxLength){
      this.edit()
      this.$emit('edit-to-do', todo, this.newToDo)
      } else {
        alert('Задание либо слишком длинное (больше ' + todoMaxLength + ' символов!) либо вы вообще ничего не написали! Будьте внимательны!')
      }
      // ДУБЛИРУЮЩАЯСЯ ЛОГИКА!
      // такой же фунционал в Task.vue - подумать о возможном функционале замыкания (как вариант - если это возможно и упростит, а не усложнит код)

      // если ввести слово длинною больше чем div - оно выйдет за его пределы + надо бы поставить ограничение на общую длину задания
    }
  },
  emits: ['del-to-do', 'edit-to-do']
}

</script>