import { createStore } from 'vuex'
import db from '@/db.json'

export default createStore({
  state: {
    ...db,
    // скопировали db в state

    someKeyOne: "some value one",
    someKeyTwo: "#some value two",
    // можно добавить столько свойств, сколько хочешь,
    // state будет равен db, а остальные будут задаваться
  },
})