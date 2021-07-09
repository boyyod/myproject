<template>
  <div id="app">
    <p>{{$store.state.count}}</p>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style>

</style>
