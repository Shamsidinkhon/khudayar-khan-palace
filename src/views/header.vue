<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <HeaderVideo/>
    </div>
     <div>
      <AdditionalHeader/>
    </div>
  </div>
</template>


<script>

import Navbar from "@/components/navbar.vue";
import HeaderVideo from "@/components/Header_Video.vue";
import AdditionalHeader from "@/components/Additional_header.vue";
  export default {
    name:"Header page",
    components: {
      Navbar,
      HeaderVideo,
      AdditionalHeader,
    },
    data() {
      return {
       
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>