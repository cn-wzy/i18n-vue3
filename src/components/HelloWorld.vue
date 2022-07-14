<script setup>
  import { getCurrentInstance, ref } from 'vue'
import { useI18n } from 'vue-i18n'
  const langChangeShow = ref(false)
  const {appContext: {config: {globalProperties: global}}} = getCurrentInstance()
  // const lang = ref(global.$t('text.lang'))
  const { locale } = useI18n()
  function changeLangChange() {
    langChangeShow.value = !langChangeShow.value;
    global.$changeLanguage(locale.value === 'zh' ? 'en' :'zh')
  }

    
</script>

<template>
  <div @click="changeLangChange($)" class="hello">
    <div>{{$t('text.lang')}}</div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
