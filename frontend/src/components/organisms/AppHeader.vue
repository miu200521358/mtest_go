<template>
    <header>
        <LocaleSelect @localeChanged="handleLocaleChange" :initialLocale="initialLocale" />
    </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LocaleSelect from "@mlib/components/locale/LocaleSelect.vue";
import { SaveConfig, LoadConfig } from "@/wailsjs/go/app/App";

const initialLocale = ref<string>('');

const handleLocaleChange = async (newLocale: string) => {
    console.log("Locale selected:", newLocale);
    await SaveConfig("locale", [newLocale], 1);
    console.log("Locale selected saved:", newLocale);
};

onMounted(async () => {
    console.log("onMounted");
    const savedLocales = await LoadConfig("locale");
    console.log("onMounted savedLocales:", savedLocales, (savedLocales && savedLocales.length > 0));
    if (savedLocales && savedLocales.length > 0) {
        initialLocale.value = savedLocales[0];
        console.log("onMounted savedLocales initialLocale:", savedLocales, initialLocale.value);
    }
});
</script>
