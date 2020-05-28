<template>
  <div id="manifest">
    <v-row>
      <v-col>
        <transition-group
          name="manifest" tag="div"
        >
          <div
            v-for="(point, index) in manifest"
            :key="point.slice(0,5) + index"
            class="point"
            v-html="point"
          />
        </transition-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'biased',
    components: {},
    data() {
      return {
        manifest: [
          'Das Artefakt zeigt seine eigene Gemachtheit und wirkt subjektiv.',
          'Sich selbst und den Kontext hinterfragen, anstelle einer neuen Lösung.',
          'Die Ästhetik richtet sich an der Geschichte und/oder dem Kontext aus, nicht den eigenen Präferenzen.',
          'Missverständnisse und Irritationen sind erwünscht, begründen sich aber auf dem zu reflektierenden Forschungsgegenstand und nicht der Schaulust.',
          'Die Neusetzung muss in sich funktionieren und darf nicht fingieren.',
          'Das Artefakt und die/der Erschaffer*in sind nicht wissend und dürfen nicht diesen Anschein erwecken.',
          'Die Einflüsse und Gedanken werden den Betrachter*innen zugänglich gemacht und nicht verschleiert.',
          'Das Artefakt und die/der Erschaffer*in sind offen für andere Deutungen und Schlüsse.',
          'Es ist aktuell; im hier und jetzt; zeitlich begrenzt.',
          'Es ist präzise und demütig.'
        ]
      }
    },
    methods: {
      sort: function () {
        // Fisher–Yates shuffle algorithm
        // https://bost.ocks.org/mike/shuffle/
        let randomised = this.manifest;
        let m = randomised.length, t, i;
        // While there remain elements to shuffle
        while (m) {
          // Pick a remaining element
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = randomised[m];
          randomised[m] = randomised[i];
          randomised[i] = t;
        }
        this.manifest = randomised;
      }
    }
  }
</script>

<style lang="scss">
  #manifest {
    //position: absolute;
    //top: 50%;
    //left: 50%;
    // min-height: 100vh;
    // transform: translate(0, 50%);
    margin-top: 6rem;

    .point {
      display: inline;
      font-weight: 600;
      letter-spacing: 0.1rem;

      &:after {
        content: ' '
      }
    }
  }
</style>
