<template>
  <o-button
    variant="primary"
    @click="sayHi"
  >
    Hello World!
    <o-icon name="thumbs-up" />
  </o-button>
</template>

<script>
import { OButton } from 'orbit-ui/components/Button';
import { OIcon } from 'orbit-ui/components/Icon';

export default {
  components: {
    OButton,
    OIcon,
  },

  methods: {
    sayHi() {
      alert('Hi! 👋');
    },
  },
};
</script>
