<template>

  {{allTasks}}

  <button @click="toggleAddTask"
  v-text="showAddTask ? 'Скрыть панель' : 'Добавить задание' "
  class="show-hide-addtask"
  ></button>

  <div align="center" v-if="allTasks.length === 0">
    <span class="noTasks">Чтобы добавить задание нажмите на кнопку выше: в данный момент никаких заданий нет.</span>
  </div>

  <div v-show="showAddTask">
  <AddTask/>
  </div>

  <Tasks :tasks="allTasks"/>
  
</template>

<script>

import AddTask from '@/components/AddTask'
import Tasks from '@/components/Tasks'
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
      showAddTask: false
    }
  },
  computed: {
  ...mapGetters(["allTasks"]),
  },
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
  },
  components: {
    AddTask,
    Tasks
  }
}

</script>