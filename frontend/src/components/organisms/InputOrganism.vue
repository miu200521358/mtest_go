<template>
    <HistoryFile />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

import HistoryFile from '@mlib/components/file/HistoryFile.vue'
import { useLocaleStore } from "@mlib/components/locale/localeStore";

const { locale } = useI18n();
const localeStore = useLocaleStore();

// Pinia ストアの言語設定の変更を監視
watch(() => localeStore.locale, (newLocale) => {
    console.log("InputOrganism: watch localeStore.locale:", locale.value);
    locale.value = newLocale;
    console.log("InputOrganism: watch localeStore.locale new:", newLocale);
}, { immediate: true });
</script>
