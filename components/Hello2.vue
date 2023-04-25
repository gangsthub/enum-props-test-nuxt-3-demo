<template>
  <div>
    {{ variant }}
  </div>
</template>

<script lang="ts">
import type { Variant } from './Hello.types';
type VariantProps = `${Variant}`;

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantProps>,
      required: true,
    },
  },
});
</script>
