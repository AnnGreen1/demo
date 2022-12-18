<template>
  <div class="card">
    <div class="card-header">
      <h5 v-text="theCardTitle"></h5>
    </div>

    <div class="card-body">
      <brother-card class="subcard"></brother-card>

      <sister-card class="subcard"></sister-card>
    </div>
  </div>
</template>

<script>
import BrotherCard from "@/views/BrotherSisterMitt/BortherCard"

import SisterCard from "@/views/BrotherSisterMitt/SisterCard"

export default {
  name: "ParentCard",

  data: () => ({
    theCardTitle: "父组件",
  }),

  components: {
    BrotherCard,

    SisterCard,
  },
};
</script>

<style>
.card{
    border:solid;
    padding:50px;
    height:auto;
}
.subcard{
    border:solid;
    padding:0px;
}
</style>