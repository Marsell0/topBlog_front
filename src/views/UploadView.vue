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
        <svg
          class="dropzone__icon"
          width="70"
          height="71"
          viewBox="0 0 70 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="upload-cloud-icon">
            <g id="Group">
              <path
                id="Vector"
                d="M46.6667 47.4492L35 35.7825L23.3334 47.4492"
                stroke="#2A2626"
                stroke-opacity="0.4"
                stroke-width="2.95292"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M35 35.7825V62.0325"
                stroke="#2A2626"
                stroke-opacity="0.4"
                stroke-width="2.95292"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M59.4708 54.42C62.3156 52.8691 64.5628 50.415 65.858 47.4451C67.1531 44.4752 67.4223 41.1586 66.6231 38.0187C65.8239 34.8787 64.0018 32.0944 61.4445 30.105C58.8871 28.1157 55.74 27.0346 52.5 27.0325H48.825C47.9422 23.6178 46.2967 20.4476 44.0124 17.7604C41.728 15.0731 38.8641 12.9387 35.6361 11.5176C32.4081 10.0965 28.8999 9.4256 25.3753 9.55547C21.8507 9.68533 18.4015 10.6125 15.2868 12.2673C12.1721 13.9221 9.47308 16.2615 7.39265 19.1096C5.31223 21.9577 3.90452 25.2403 3.27536 28.7107C2.64621 32.1811 2.81198 35.749 3.76021 39.1462C4.70844 42.5433 6.41446 45.6812 8.75001 48.3241"
                stroke="#2A2626"
                stroke-opacity="0.4"
                stroke-width="2.95292"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M46.6667 47.4492L35 35.7825L23.3334 47.4492"
                stroke="#2A2626"
                stroke-opacity="0.4"
                stroke-width="2.95292"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
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
        />
      </div>
      <div class="content__progress">
        <Progress progress="45" size="sm"></Progress>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { Progress } from "flowbite-vue";

const network = ref("VK");
const active = ref(false);
let formData = new FormData();

const uploadFile = async () => {
  console.log("start");
  res = await axios.post(`${path.value}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};

const handleFileUpload = async () => {
  file.value = instance.refs.file.files[0];
  formData.append("video", file.value);
  console.log("handle " + file.value);
  await uploadFile();
};

const toggleActive = () => {
  active.value = !active.value;
};
</script>

<style scoped>
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
  color: rgba(42, 38, 38, 0.6);
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
  transition: 0.3s ease all;
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
  border-radius: 8px;
}
.dropzone__title {
  color: #2a2626;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1%;
}
.dropzone__subtitle {
  color: rgba(42, 38, 38, 0.6);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 3%;
}

.dropzone__label {
  color: #4663ab;
  transition: 0.3s ease all;
  padding: 8px 12px;
  margin: 0 5% 0 5%;
  border-radius: 8px;
  border: 1px solid #4663ab;
  background: #fbfdfe;
  margin-bottom: 5%;
}
.dropzone__label:hover {
  transition: 0.3s ease all;
  background-color: #4663ab;
  color: #f1ffe0;
}
.dropzone__input {
  display: none;
}
.dropzone__icon {
  margin: 3% 0%;
}
.active-dropzone {
  color: #f1ffe0;
  border-color: #f1ffe0;
  background-color: #4663ab;
}
.active-dropzone > label {
  background-color: #fff;
  color: #4663ab;
}
.active-dropzone > .dropzone__title {
  color: #fff;
}
.active-dropzone > .dropzone__subtitle {
  color: #fff;
}
.active-dropzone > svg {
  stroke: white;
  fill: white;
}
</style>
