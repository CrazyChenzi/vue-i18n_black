<template>
  <div>
      <div>
        <p id="normal">{{ $t('message.hello') }}</p>
        <p id="plural">{{ $t('message.plural', { n: 4 }) }}</p>
        <p id="select">{{ $t('message.select', { gender: 'male' }) }}</p>
        <p id="number">{{ $t('message.number', { current: 0.5 }) }}</p>
        <p id="time">{{ $t('message.time', { current: new Date() }) }}</p>
      </div>
        <p>{{ $i18n.locale }}</p>
  </div>
</template>
<script>
  import i18n from '../../assets/js/i18n.js'
  export default {
    i18n,
    data() {
      return {
      }
    }
  }
</script>