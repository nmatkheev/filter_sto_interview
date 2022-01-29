<template>

    <input class="checkbox" type="checkbox" @change="changed"><span>{{todo}}</span>

    <hr class="hr-add-to-do">
    <button @click="edit" v-if="!startEdit" v-text="editToDo ? 'Редактировать' : 'Отменить редактирование' "></button>
    <input v-if="!editToDo" type="text" v-model="newToDo" :placeholder="todo">
    <button @click="save(todo)" v-if="!editToDo">Save</button>
    <button v-if="!startEdit" @click="this.$emit('del-to-do')" class="fl-right red">Удалить пункт</button>

</template>

<script>

export default {
  data(){
    return {
      editToDo: true,
      saveToDo: this.todo,
      newToDo: '',
    }
  },
  props: {
    todo: String,
    startEdit: Boolean
  },
  methods: {
    changed(){
      console.log('changed')
    },
    edit(){
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
    }
  },
  emits: ['del-to-do', 'edit-to-do']
}

</script>

<style scoped>

</style>