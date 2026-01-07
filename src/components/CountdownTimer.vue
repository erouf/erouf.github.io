
<template>
  <div class="w-full max-w-5xl mx-auto">
    <!-- Main Timer Container -->
    <div 
      class="glass-strong rounded-3xl p-8 md:p-12 glow-purple animate-scale-in"
      style="animation-delay: 0.3s;"
    >
      <!-- Time Units Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <div 
          v-for="(unit, index) in timeUnits" 
          :key="unit.label"
          class="animate-slide-up group"
          :style="{ animationDelay: (index * 0.1 + 0.4) + 's' }"
          @mouseenter="$emit('hover', true)"
          @mouseleave="$emit('hover', false)"
        >
          <div class="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] hover:scale-105 hover:-translate-y-1 cursor-default overflow-hidden">
            
            <!-- Background gradient on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Shine effect -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute inset-0 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
            </div>

            <!-- Number -->
            <div class="relative">
              <span class="block text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tabular-nums">
                {{ String(unit.value).padStart(2, '0') }}
              </span>
            </div>
            
            <!-- Label -->
            <p class="relative mt-3 text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-medium">
              {{ unit.label }}
            </p>

            <!-- Decorative corners -->
            <div class="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/10 group-hover:border-violet-500/50 transition-colors duration-300"></div>
            <div class="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/10 group-hover:border-violet-500/50 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      <!-- Separator Line -->
      <div class="my-10 flex items-center gap-4">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="flex gap-2">
          <span 
            v-for="i in 3" 
            :key="i" 
            class="w-1.5 h-1.5 rounded-full bg-violet-500/50 animate-pulse"
            :style="{ animationDelay: i * 0.2 + 's' }"
          ></span>
        </div>
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <!-- Progress Section -->
      <div class="space-y-4">
        <div class="flex justify-between items-center text-sm">
          <span class="text-white/40">Countdown Progress</span>
          <span class="text-white/60 font-mono">{{ progressPercentage }}%</span>
        </div>
        
        <!-- Progress Bar -->
        <div class="relative h-2 bg-white/5 rounded-full overflow-hidden">
          <div 
            class="absolute inset-y-0 left-0 rounded-full"
            :style="{ width: progressPercentage + '%' }"
          >
            <div class="h-full w-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500"></div>
          </div>
          
          <!-- Glow dot -->
          <div 
            class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md"
            :style="{ left: `calc(${Math.max(parseFloat(progressPercentage), 1)}% - 8px)` }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Live Indicator -->
    <div class="flex justify-center mt-8 animate-fade-in" style="animation-delay: 1s;">
      <div class="flex items-center gap-3 px-4 py-2 rounded-full glass">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span class="text-sm text-white/60">Live</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

defineEmits(['hover'])

// ✅ START: January 6, 2026
const START_DATE = new Date(2026, 0, 6, 0, 0, 0)

// ✅ END: May 26, 2026 (her birthday!)
const TARGET_DATE = new Date(2026, 4, 26, 0, 0, 0)

// Current time (reactive)
const now = ref(Date.now())

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

// ✅ Remaining time until May 26, 2026
const remainingTime = computed(() => {
  const diff = TARGET_DATE.getTime() - now.value
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  }
})

// Time units for display
const timeUnits = computed(() => [
  { value: remainingTime.value.days, label: 'Days' },
  { value: remainingTime.value.hours, label: 'Hours' },
  { value: remainingTime.value.minutes, label: 'Minutes' },
  { value: remainingTime.value.seconds, label: 'Seconds' }
])

// ✅ Progress: 0% on Jan 6, 2026 → 100% on May 26, 2026
const progressPercentage = computed(() => {
  const totalDuration = TARGET_DATE.getTime() - START_DATE.getTime()
  const elapsed = now.value - START_DATE.getTime()
  const percentage = (elapsed / totalDuration) * 100
  return Math.min(Math.max(percentage, 0), 100).toFixed(2)
})
</script>