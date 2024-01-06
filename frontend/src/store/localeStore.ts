import { defineStore } from 'pinia';

export const useLocaleStore = defineStore({
    id: 'locale',
    state: () => ({
        locale: 'ja' // 初期値は日本語
    }),
    actions: {
        setLocale(newLocale: string) {
            this.locale = newLocale;
        }
    }
});
