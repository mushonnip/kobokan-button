<script setup>
import {
  NIcon,
  NLayout,
  NLayoutFooter,
  NLayoutContent,
  NSpace,
  NButton,
  NLayoutHeader,
  NMenu,
  NSelect,
} from "naive-ui";
import { Sun, Moon } from "@vicons/carbon";
import { useI18n } from "vue-i18n";
import { SUPPORT_LOCALES } from "./i18n";
const { locale } = useI18n();
</script>
<template>
  <div>
    <n-layout position="absolute">
      <n-layout-header bordered>
        <div class="logo">{{ $t("info.title") }}</div>
        <n-space justify="end">
          <n-menu :options="menuOptions" mode="horizontal" />
        </n-space>
        <n-space style="line-height: 1; margin-left: auto">
          <n-select v-model:value="locale" :options="SUPPORT_LOCALES" />
          <n-button circle @click="toggleDark">
            <template #icon>
              <n-icon>
                <moon v-if="isDark" />
                <sun v-else />
              </n-icon>
            </template>
          </n-button>
        </n-space>
      </n-layout-header>
      <n-layout-content style="padding: 16px; min-height: 100vh">
        <router-view />
      </n-layout-content>
      <n-layout-footer bordered style="height: 64px; padding: 24px"
        >2022</n-layout-footer
      >
    </n-layout>
  </div>
</template>
<script></script>
<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}
.logo {
  margin-right: 16px;
  font-size: 16px;
  font-weight: bold;
}
</style>
