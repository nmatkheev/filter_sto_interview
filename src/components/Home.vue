<template>

  <!-- {{allTasks}} -->
  <!-- для проверки обновления состояния -->

  <button @click="toggleAddTask"
  v-text="showAddTask ? 'Скрыть панель' : 'Добавить задание' "
  class="show-hide-addtask"
  ></button>

  <!-- данный див будет отображаться если удалить дефолтную задачу в состоянии или по факту -->
  <div align="center" v-if="allTasks.length === 0">
    <span class="noTasks">Чтобы добавить задание нажмите на кнопку выше: в данный момент никаких заданий нет.</span>
  </div>

  <div v-show="showAddTask">
  <AddTask/>
  </div>

  <Tasks :tasks="allTasks"/>
  <!-- рендерим задачи из состояния vuex -->
  
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
    // кнопка - добавить задание || скрыть панель
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