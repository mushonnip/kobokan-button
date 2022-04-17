<script setup>
import VoiceList from "../assets/generated-voice-list-id.json";
import { NCard, NButton, NSpace } from "naive-ui";
import { useI18n } from "vue-i18n";
const voices = VoiceList.voices;
const play = (category_path, item) => {
  let audio = new Audio("voices/" + category_path + "/" + item.path);
  audio.play();
};
const { locale } = useI18n();
</script>

<template>
  <div v-for="category in voices" v-bind:key="category.categoryName">
    <n-card :title="category.categoryName">
      <n-space>
        <n-button
          round
          strong
          secondary
          type="info"
          v-for="voiceItem in category.voiceList"
          v-bind:key="voiceItem.name"
          @click="play(category.categoryPath, voiceItem)"
        >
          {{ voiceItem.name }}
        </n-button></n-space
      >
    </n-card>
  </div>
</template>
<script></script>
