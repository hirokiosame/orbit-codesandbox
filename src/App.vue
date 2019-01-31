<template>
  <o-button
    variant="primary"
    @click="sayHi"
  >
    Hello Orbit!
  </o-button>
</template>

<script>
import { OButton } from 'orbit-ui/components/Button';

export default {
  components: {
    OButton,
  },

  methods: {
    sayHi() {
      alert('Hi! 👋');
    },
  },
};
</script>
