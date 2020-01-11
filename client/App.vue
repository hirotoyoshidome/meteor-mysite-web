<template>
  <div>
    <h2>Vueを利用した表示</h2>
    <p>時刻：{{date}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  }
}
</script>

<style scoped>
  h2, p {
    text-align: center;
  }
</style>