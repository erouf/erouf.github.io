<template>
  <div 
    class="animate-morph blur-3xl"
    :style="{
      background: `linear-gradient(135deg, ${color1}, ${color2})`,
      animationDelay: delay + 's'
    }"
  ></div>
</template>

<script setup>
defineProps({
  color1: { type: String, default: '#8B5CF6' },
  color2: { type: String, default: '#EC4899' },
  delay: { type: Number, default: 0 }
})
</script>