<template>
    <div id="my_modal" class="modal">
      <div class="modal_content">
        <span @click="closeWindow" class="close_modal_window">×</span>

        <!-- выводим здесь текст из родительского компонента Home заданный вначале в asyncDeleteTask а потом вызванный уже в showWarn того же родительского компонента-->
        <h3><span class="warn" id="modaltext"></span></h3><p>

          <!-- логический вызов событий по клику на кнопки -->
          <button class="red" @click="deleteTask">Да</button>&nbsp;
          <button @click="closeWindow">Нет</button>

        </p>
        
          <!-- пока не успеваю справиться с задачей диалогового окна (функционал confirm работает успешно - но по ТЗ он непригоден, поэтому я его отключил)

          Итог - задание удаляется сразу - без подтверждения -->

          <!-- Диалоговое окно вполне рабочее - можно будет доработать в будущем -->
        
      </div>
    </div>
</template>

<script>

export default {
  methods: {
    deleteTask(){
      // вызов действия в родительском компоненте Home
      this.$emit('delete-Task')

      // убираем отображение окна
      this.closeWindow()
    },

    // убираем отображение окна
    closeWindow(){
        let modal = document.getElementById("my_modal");
        modal.style.display = "none";
            // если что - внизу небольшие пояснения - могут пригодиться
            // document.body.style.overflow = 'hidden'; - отключаем прокрутку
            // document.body.style.overflow = 'visible'; - даем доступ к прокрутке
    }
  }
}
</script>