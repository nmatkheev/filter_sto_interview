<template>
    
    <div v-for="task in this.tasks" :key="task">
    <Task :task="task" @delete-task="deleteTask"/>
    </div>

</template>

<script>
import Task from '@/components/Task'
export default {
  data(){
    return {
      editedTasks: this.tasks
    }
  },
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  methods: {
    deleteTask(task){
      this.editedTasks.splice(this.editedTasks.findIndex(value => value === task), 1);
    }
  }
}

</script>

<style scoped>

</style>