<template>
  <div class="__container">
    <div class="content">
      <div class="content__text">
        <h1 class="text__title">Загрузка скриншотов участников</h1>
        <p class="text__subtitle">
          Выберите площадку для расчета ключевых цифровых показателей
        </p>
      </div>
      <div class="content__buttons">
        <label class="buttons__label">
          <input
            type="radio"
            value="VK"
            class="buttons__radio"
            v-model="network"
          />
          <span>ВКонтакте</span>
        </label>
        <label class="buttons__label">
          <input
            type="radio"
            value="TG"
            class="buttons__radio"
            v-model="network"
          />
          <span>Telegram</span>
        </label>

        <label class="buttons__label">
          <input
            type="radio"
            value="YT"
            class="buttons__radio"
            v-model="network"
          />
          <span>Youtube</span>
        </label>

        <label class="buttons__label">
          <input
            type="radio"
            value="Dzen"
            class="buttons__radio"
            v-model="network"
          />
          <span>Дзен</span>
        </label>
      </div>
      <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }"
        class="dropzone"
      >
        <img src="../assets/upload.svg" alt="upload" class="dropzone__icon" />
        <span class="dropzone__title">Выберите файл или перетащите его</span>
        <span class="dropzone__subtitle"
          >JPG, PNG или PDF, размер не более 10Мб</span
        >
        <label class="dropzone__label" for="dropzoneFiles">ВЫБРАТЬ ФАЙЛ</label>
        <input
          class="dropzone__input"
          name="video"
          type="file"
          id="dropzoneFiles"
          ref="file"
          v-on:change="handleFileUpload()"
          accept="video/*"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const network = ref("VK");
</script>

<style>
.__container {
  margin: 0px auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
}
.content {
  margin-top: 120px;
}
.content__text {
  display: flex;
  flex-direction: column;
}
.text__title {
  color: #2a2626;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-bottom: 2%;
}
.text__subtitle {
  color: rgba(42, 38, 38, 0.6);
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
/* ------------------------------- BUTTONS -----------------------------*/
.content__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
}
.buttons__radio {
  display: none;
}
.buttons__label {
  color: #d6e0ea;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  border-radius: 4px;
  background: #fbfdfe;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
}
.content__buttons input:checked + span {
  border-radius: 4px;
  background: #4663ab;
  color: #fff;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
}
/* ------------------------------- DROPZONE -----------------------------*/
.dropzone {
  color: black;
  display: flex;
  flex-direction: column;
  border: dashed #d6e0ea;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease all;
  flex: 1 1 auto;
  color: #f1ffe0;
  margin-bottom: 5px;
  margin-top: 7%;
}
.dropzone__title {
  color: #2a2626;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.dropzone__subtitle {
  color: rgba(42, 38, 38, 0.6);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.dropzone > span {
  margin-bottom: 10px;
}
.dropzone__label {
  color: #4663ab;
  transition: 0.3s ease all;
  padding: 8px 12px;
  margin: 0 5% 0 5%;
  border-radius: 8px;
  border: 1px solid #4663ab;
  background: #fbfdfe;
}
.dropzone__input {
  display: none;
}
.active-dropzone {
  color: #f1ffe0;
  border-color: #f1ffe0;
  background-color: #3a9b6c;
}
.active-dropzone > label {
  background-color: #f1ffe0;
  color: #3a9b6c;
}
</style>
