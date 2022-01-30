# todolistfilter

> Осталось доделать:

1) Сохранить данные после обновления страницы во vuex.

(Состояние vuex обновляется и сохраняется при каждом действии: остается только сохранить его в localStorage или куда-нибудь еще)

2) Разобраться с предупреждением ниже:

Vue warn: Method "emits" has type "object" in the component definition. Did you reference the function correctly? 

предупреждение касается функционала - удалить задание полностью (метод deleteTask в компоненте Task "эмитенный" из ModalWindow)

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
