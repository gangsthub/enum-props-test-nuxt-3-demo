<template>
  <div>
    {{ variant }}
  </div>
</template>

<script lang="ts">
import type { VariantType } from './Hello.types';

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantType>,
      required: true,
    },
  },
});
</script>
