<template>
  <div>
    <div class="mt-6">
      <video
        controls
        :src="videosrc"
        type="video/mp4"
        muted autoplay
        id="vid"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header_Video",
  data() {
    return {
     videosrc: require("../assets/video/Xudoyorxon.mp4"),
    };
  },
};
</script>

<style scoped>
</style>