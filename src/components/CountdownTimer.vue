<template>
  <div class="w-full max-w-5xl mx-auto">
    <!-- Main Timer Container -->
    <div 
      class="glass-strong rounded-3xl p-8 md:p-12 glow-purple animate-scale-in"
      style="animation-delay: 0.3s;"
    >
      <!-- Time Units Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <TimeUnit 
          v-for="(unit, index) in timeUnits" 
          :key="unit.label"
          :value="unit.value"
          :label="unit.label"
          :delay="index * 0.1 + 0.4"
          @mouseenter="$emit('hover', true)"
          @mouseleave="$emit('hover', false)"
        />
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
          <span class="text-white/40">Journey Progress</span>
          <span class="text-white/60 font-mono">{{ progressPercentage.toFixed(4) }}%</span>
        </div>
        
        <!-- Progress Bar -->
        <div class="relative h-2 bg-white/5 rounded-full overflow-hidden">
          <div 
            class="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
            :style="{ width: progressPercentage + '%' }"
          >
            <div class="h-full w-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
          </div>
          
          <!-- Animated glow at progress end -->
          <div 
            class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md transition-all duration-1000"
            :style="{ left: `calc(${Math.max(progressPercentage, 1)}% - 8px)` }"
          ></div>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-3 gap-4 mt-6">
          <div class="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p class="text-2xl md:text-3xl font-display font-bold text-white">{{ totalDays.toLocaleString() }}</p>
            <p class="text-xs text-white/40 uppercase tracking-wider mt-1">Total Days</p>
          </div>
          <div class="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p class="text-2xl md:text-3xl font-display font-bold text-white">{{ elapsedDays.toLocaleString() }}</p>
            <p class="text-xs text-white/40 uppercase tracking-wider mt-1">Days Passed</p>
          </div>
          <div class="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p class="text-2xl md:text-3xl font-display font-bold gradient-text">{{ time.days.toLocaleString() }}</p>
            <p class="text-xs text-white/40 uppercase tracking-wider mt-1">Days Left</p>
          </div>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  targetDate: { type: Date, required: true }
})

const emit = defineEmits(['hover'])

// ✅ FIX: Set start date to TODAY (when countdown begins)
// Change this to whenever you want the countdown to "start" from
const startDate = new Date() // Today

// Or set a specific start date:
// const startDate = new Date('2024-12-01T00:00:00') // December 1, 2024

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const timeUnits = computed(() => [
  { value: time.value.days, label: 'Days' },
  { value: time.value.hours, label: 'Hours' },
  { value: time.value.minutes, label: 'Minutes' },
  { value: time.value.seconds, label: 'Seconds' }
])

// ✅ FIX: Proper calculations
const totalDays = computed(() => {
  const diff = props.targetDate.getTime() - startDate.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
})

const elapsedDays = computed(() => {
  const diff = Date.now() - startDate.getTime()
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
})

const progressPercentage = computed(() => {
  const total = props.targetDate.getTime() - startDate.getTime()
  const elapsed = Date.now() - startDate.getTime()
  const percentage = (elapsed / total) * 100
  return Math.min(Math.max(percentage, 0), 100)
})

let interval = null

const calculateTime = () => {
  const now = Date.now()
  const diff = props.targetDate.getTime() - now

  if (diff <= 0) {
    time.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return
  }

  time.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  }
}

// TimeUnit Component
const TimeUnit = {
  props: ['value', 'label', 'delay'],
  emits: ['mouseenter', 'mouseleave'],
  setup(props, { emit }) {
    const isFlipping = ref(false)
    const displayValue = ref(props.value)

    watch(() => props.value, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        isFlipping.value = true
        setTimeout(() => {
          displayValue.value = newVal
          isFlipping.value = false
        }, 300)
      }
    }, { immediate: true })

    return { isFlipping, displayValue }
  },
  template: `
    <div 
      class="animate-slide-up group"
      :style="{ animationDelay: delay + 's' }"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
    >
      <div class="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] hover:scale-105 hover:-translate-y-1 cursor-default overflow-hidden">
        
        <!-- Background gradient on hover -->
        <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Shine effect -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div class="absolute inset-0 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
        </div>

        <!-- Number -->
        <div class="relative number-container">
          <span 
            class="block text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tabular-nums transition-all duration-300"
            :class="{ 'number-flip': isFlipping }"
          >
            {{ String(displayValue).padStart(2, '0') }}
          </span>
        </div>
        
        <!-- Label -->
        <p class="relative mt-3 text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-medium">
          {{ label }}
        </p>

        <!-- Decorative corner -->
        <div class="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/10 group-hover:border-violet-500/50 transition-colors duration-300"></div>
        <div class="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/10 group-hover:border-violet-500/50 transition-colors duration-300"></div>
      </div>
    </div>
  `
}

onMounted(() => {
  calculateTime()
  interval = setInterval(calculateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>