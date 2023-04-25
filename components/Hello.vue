<template>
  <div>
    {{ variant }}
  </div>
</template>

<script setup lang="ts">
import { type VariantType, VariantEnum } from './Hello.types';

withDefaults(
  defineProps<{
    variant: VariantType;
  }>(),
  {
    variant: VariantEnum.PRIMARY,
  }
);
</script>
