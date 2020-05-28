<template>
  <div
    id="manifest-wrapper"
    @click="$store.commit('sortManifest')"
  >
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        md="9"
      >
        <ManifestBlock
          :posts="$store.state.posts"
        />
      </v-col>
    </v-row>
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
    padding: 1rem 0;
    min-height: 100vh;

  }
</style>
