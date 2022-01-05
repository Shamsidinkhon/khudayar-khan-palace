<template>
  <div>
     <nav class="navbar has-background-grey-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <img src="@/assets/img/logo.jpg" width="100px" height="100px  " alt="Museum">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu ml-6">
      <div class="navbar-start">
        <a class="navbar-item has-text-black has-background-grey-light">
          <span class="subtitle has-text-black">HOME</span>
        </a>

        <a class="navbar-item has-text-black has-background-grey-light">
          <span class="subtitle has-text-black">ABOUT US</span>
        </a>
        <a class="navbar-item has-text-black has-background-grey-light">
          <span class="subtitle has-text-black">SHOP</span>
        </a>
        <a class="navbar-item has-text-black has-background-grey-light">
          <span class="subtitle has-text-black">TICKET</span>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="select mr-3">
            <select>
              <option>UZB</option>
              <option>Rus</option>
              <option>ENG</option>
            </select>
          </div>
          <div class="buttons">
            <a class="button is-light mr-3">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div>
  </div>
  </div>
</template>

<script>
  export default {
    name:"Navbar",
    data() {
      return {
       
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
