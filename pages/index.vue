<template>
  <div id="manifest-wrapper">

        <ManifestBlock
          :posts="$store.state.posts"
        />

  </div>
</template>

<script>
  import ManifestBlock from "../components/ManifestBlock";

  export default {
    name: 'biased',
    components: {
      ManifestBlock
    },
    mounted() {
      this.$store.commit('sortManifest');
    }
  }
</script>

<style lang="scss">
  #manifest-wrapper {
    margin: 2rem 0;

  }
</style>
