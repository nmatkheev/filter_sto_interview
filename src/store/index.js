import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        taskname: 'Название задачи, которую необходимо выполнить.',
        todos: [
        'Описание пункта, который нужно выполнить.', 
        'Описание следующего пункта, который нужно выполнить.', 
        'Описание следующего пункта, который нужно выполнить, и так далее...']
      },
    ]
  },
  getters: {
    allTasks: (state) => state.tasks 
  },
  actions: {
    addTask({ commit }, task) {
      commit("add_task", task);
    }
  },
  mutations: {
    add_task(state, task) {
      state.tasks.push(task);

      localStorage.setItem('task', JSON.stringify(task))
      let taskObject = JSON.parse(localStorage.getItem('task'))

      console.log(taskObject)
    }
  },
})