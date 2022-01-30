# todolistfilter

> Осталось доделать:

1) Сохранить данные после обновления страницы во vuex.

(Состояние vuex обновляется и сохраняется при каждом действии: остается только сохранить его в localStorage или куда-нибудь еще)

PS: ловил данные в localStorage - но пока не знаю как полноценно и грамотно решить данную задачу (сталкивался с различными вариантами: 

сохранял данные, но они появлялись только после обновления, после чего следующие сохраненные данные также появлялись после обновления и перезаписывали старые, и.т.д.)

2) Разобраться с предупреждением ниже:

Vue warn: Method "emits" has type "object" in the component definition. Did you reference the function correctly? 

предупреждение касается функционала - удалить задание полностью (метод deleteTask в компоненте Task "эмитенный" из ModalWindow)

предупреждение никак не мешает общему функционалу

3) Отметить состояние done во vuex - к каждому todo (придется полностью переписывать код, что печально и постфактум по причине спешки - либо сделать одно состояние done на task после отметки всех чекбоксов todo в компоненте Task)

4) Поставить ограничение на длину слова в "Имя задания" (Task.vue), а также поставить ограничение на длину слова в пункте ToDo (ToDo.vue) (убрать дублирующуюся логику - по возможности)

5) Оповещение о максимальной длине либо taskname || todo lenght = 0 - оформить в виде модального окна, а не топорный alert как сейчас

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
