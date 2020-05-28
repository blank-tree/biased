<template>
  <div
    id="manifest-block"
    @click="$store.commit('sortManifest')"
  >
    <transition-group
      name="manifest-group" tag="div"
    >
      <div
        v-for="point in posts"
        :key="point"
        class="point"
        v-html="point"
      />
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "ManifestBlock",
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">

  #manifest-block {
    display: block;
  }

  .manifest-group-move {
    transition: transform 1s;
  }

  .point {
    margin: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;

    &:after {
      content: ' '
    }
  }

</style>
