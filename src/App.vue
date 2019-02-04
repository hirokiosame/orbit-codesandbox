<template>
  <o-section bordered>
      <o-section-header title="Join Our Newsletter">
          <o-button
              slot="actions"
              variant="primary"
              @click="subscribe"
          >
              Subscribe
          </o-button>
      </o-section-header>
      <o-form @submit.prevent>
          <o-form-item>
              <o-input
                v-model="email"
                placeholder="email@address.com"
              />
          </o-form-item>
      </o-form>
  </o-section>
</template>

<script>
import { OSection, OSectionHeader } from 'orbit-ui/components/Section';
import { OForm, OFormItem } from 'orbit-ui/components/Form';
import { OInput } from 'orbit-ui/components/Input';
import { OButton } from 'orbit-ui/components/Button';

export default {
  components: {
    OSection,
    OSectionHeader,
    OForm,
    OFormItem,
    OInput,
    OButton,
  },

  data() {
    return {
      email: '',
    };
  },

  methods: {
    subscribe() {
      console.log('Subscribing', this.email);
    },
  },
};
</script>
