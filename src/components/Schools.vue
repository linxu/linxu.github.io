<template>
  <div>
    <h2 id="learn" class="sectionHead">{{ $t('school.title') }}</h2>

    <ul id="schools">
      <li v-for="item in data.school.schools" :key="item.name">
        <div class="details">
          <h3>{{item.name}}</h3>
          <h4>{{item.level}}</h4>
          <h5>{{item.date}}</h5>
        </div>
        <p>{{item.desc}}</p>
      </li>
    </ul>
    <div class="clear"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Schools",
  computed: mapState(["data"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2#learn:before {
  background-position: right top;
}
ul#schools {
  margin: 0;
  list-style: none;
}

ul#schools li {
  margin: 0 0 20px 0;
  clear: both;
}

ul#schools li .details {
  float: left;
  width: 40%;
}
ul#schools li > p {
  float: right;
  width: 57%;
  margin-bottom: 25px;
}

.details h5 {
  font-style: italic;
}

body.respond ul#schools li .details {
  float: none;
  width: 100%;
}

body.respond ul#schools li > p {
  float: none;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 10px;
}
</style>
