<template>
    <div id="my_modal" class="modal">
      <div class="modal_content">
        <span @click="closeWindow" class="close_modal_window">×</span>

        <h3><span class="warn" id="modaltext"></span></h3><p>

          <!-- логический вызов событий по клику на кнопки -->
          <button class="red" @click="deleteTask">Да</button>&nbsp;
          <button @click="closeWindow">Нет</button>

        </p>
        
      </div>
    </div>
</template>

<script>

export default {
  methods: {
    deleteTask(){
      this.$emit('delete-Task')
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