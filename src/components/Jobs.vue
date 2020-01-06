<template>
  <div>
    <h2 id="clock" class="sectionHead">{{ $t('job.title') }}</h2>

    <ul id="jobs">
      <li v-for="item in data.job.jobs" :key="item.name">
        <div class="details">
          <h3>{{item.name}}</h3>
          <h4>{{item.role}}</h4>
        </div>
        <p>{{item.date}}</p>
      </li>
    </ul>
    <div class="clear"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Jobs",
  computed: mapState(["data"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2#clock:before {
  background-position: -45px top;
}
ul#jobs {
  margin: 0;
  list-style: none;
}

ul#jobs li {
  margin: 0 0 20px 0;
  clear: both;
}

ul#jobs li .details {
  float: left;
  width: 50%;
  margin-bottom: 15px;
}
ul#jobs li p {
  float: right;
  width: 50%;
}

.details h5 {
  font-style: italic;
}

body.respond ul#jobs li .details {
  float: none;
  width: 100%;
  margin-bottom: 0;
}
body.respond ul#jobs li p {
  float: none;
  width: 100%;
}
</style>
