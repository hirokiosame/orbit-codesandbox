<template>
  <o-layout>
    <o-heading>
      Orbit Demos
    </o-heading>
    <demo-1 />
  </o-layout>
</template>

<script>
import { OLayout } from 'orbit-ui/components/Layout';
import { OHeading } from 'orbit-ui/components/Heading';
import Demo1 from './components/Demo1.vue'

export default {
  name: 'app',
  components: {
    OLayout,
    OHeading,
    Demo1
  }
}
</script>

<style>
</style>
