import { createI18n as _createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

export const SUPPORT_LOCALES = [
    {
        label: "Bahasa Indonesia",
        value: "id",
    },
    {
        label: "English",
        value: "en",
    },
]

export function createI18n() {
    return _createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'id',
        fallbackLocale: 'en',
        messages: {
            en,
            id
        }
    })
}