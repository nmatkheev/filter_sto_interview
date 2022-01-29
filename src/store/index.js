import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        taskname: 'taskname 1',
        todos: ['todo1', 'todo2', 'todo3']
      },
      {
        taskname: 'taskname 2',
        todos: ['todo1', 'todo2', 'todo3']
      }
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