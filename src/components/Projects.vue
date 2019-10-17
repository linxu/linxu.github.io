<template>
  <div>
    <h2 id="ribbon" class="sectionHead">{{ $t('project.title') }}</h2>

    <ul id="honorsAwards">
      <li v-for="item in data.project.projects" :key="item.name">{{item.name}}</li>
    </ul>
    <div class="clear" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Projects",
  computed: mapState(["data"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2#ribbon:before {
  background-position: left -45px;
}
#honorsAwards li {
  padding-left: 5px;
  margin-bottom: 8px;
}
</style>
