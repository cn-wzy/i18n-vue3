
import { createI18n } from 'vue-i18n'

import zh from '@/i18n/lang/zh'
// 语言库
const messages = {
  zh
}
const loadedLanguages = ['zh'] 
export const i18n = createI18n({
  locale: 'zh',        //默认显示的语言 
  messages
})

// 默认语言
// const langDefault = 'zh-CN'


const languages = ['zh', 'en', 'de', 'ar', 'ja', 'pt', 'ko', 'fr', 'id']

function setI18nLanguage(lang) {
  console.log(lang)
  console.log(i18n);
  i18n.global.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

function getUserLanguage() {
  let langStr = navigator.language.toLowerCase()
  let lang = languages.find((lang) => {
    return langStr.indexOf(lang) > -1
  })
  return lang || ''
}

function autoInitLanguage() {
  let lang = document.documentElement.lang || ''
  if(!lang && !(lang = localStorage.getItem('localLanguage'))) {
    lang = getUserLanguage() || 'en'
  }
  loadLanguageAsync(lang)
}
autoInitLanguage()

export function loadLanguageAsync(lang) {
  // 如果语言相同
  console.log(1);
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果语言已经加载
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果尚未加载语言
  // 这里先把html元素的lang属性更新上，防止页面中获取的是老的
  document.querySelector('html').setAttribute('lang', lang)
  return import('@/i18n/lang/' + lang + '.js').then(
    messages => {
      i18n.global.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}
