<template>
  <div>
    {{ variant }}
  </div>
</template>

<script setup lang="ts">
import type { Variant } from './Hello.types';
type VariantProps = `${Variant}`;

defineProps<{
  variant: VariantProps;
}>();
</script>
