<template>
  <footer id="copyright">&copy; {{ $t('message.copyright') }}</footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#copyright {
  text-align: center;
  font: bold 10px sans-serif;
  text-transform: uppercase;
  color: #aaa;
  margin: 20px 0 60px;
  text-shadow: 1px 1px 1px #fff;
}
body.respond #copyright {
  margin: 60px auto;
}
</style>
