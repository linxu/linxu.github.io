<template>
  <div id="app">
    <Header />
    <div id="wrapper">
      <locale />
      <Biography />
      <Kills />
      <Jobs />
      <Schools />
    </div>
    <Footer />
  </div>
</template>

<script>
import Locale from "./components/Locale.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Biography from "./components/Biography.vue";
import Kills from "./components/Kills.vue";
import Jobs from "./components/Jobs.vue";
import Schools from "./components/Schools.vue";

export default {
  name: "app",
  components: {
    Locale,
    Header,
    Footer,
    Biography,
    Kills,
    Jobs,
    Schools
  }
};
</script>

<style>
ul {
  margin: 0 0 0 15px;
  position: relative;
}
li {
  margin: 0 0 5px 0;
  font-size: 13px;
}
p {
  text-align: justify;
  font-size: 13px;
}
.clear {
  clear: both;
}
a {
  color: #444;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#wrapper {
  max-width: 700px;
  margin: 60px auto 30px;
  padding: 60px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
}
h2.sectionHead {
  clear: both;
  font: bold 20px/12px "verdana", sans-serif;
  margin: 60px -60px;
  border-left: 52px solid #444;
  color: #444;
  padding: 1px 0 0 8px;
  letter-spacing: -2px;
  text-transform: uppercase;
  position: relative;
}
h2.sectionHead:before {
  content: "";
  position: absolute;
  width: 45px;
  height: 45px;
  left: -105px;
  top: -15px;
  background-image: url("./assets/icons.png");
}
body.respond #wrapper {
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  box-shadow: none;
}
body.respond p {
  text-align: left;
}
body.respond h2.sectionHead {
  font-size: 15px;
  letter-spacing: -1px;
  margin: 40px 0 50px -60px;
  padding-left: 8px;
}

</style>
