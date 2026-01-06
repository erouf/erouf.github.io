<template>
  <div 
    class="min-h-screen bg-black text-white relative overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Custom Cursor -->
    <div 
      class="custom-cursor hidden md:block"
      :class="{ hover: isHovering }"
      :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"
    ></div>
    <div 
      class="cursor-dot hidden md:block"
      :style="{ left: cursorDot.x + 'px', top: cursorDot.y + 'px' }"
    ></div>

    <!-- Aurora Background -->
    <div class="aurora">
      <div class="aurora-beam"></div>
    </div>

    <!-- Particle Background -->
    <ParticleBackground :mouseX="cursor.x" :mouseY="cursor.y" />

    <!-- Morphing Blobs -->
    <MorphingBlob 
      class="absolute -top-40 -left-40 w-96 h-96 opacity-30"
      color1="#8B5CF6"
      color2="#EC4899"
    />
    <MorphingBlob 
      class="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-20"
      color1="#3B82F6"
      color2="#8B5CF6"
      :delay="2"
    />
    <MorphingBlob 
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
      color1="#EC4899"
      color2="#F59E0B"
      :delay="4"
    />

    <!-- Noise Overlay -->
    <div class="noise-overlay"></div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      
      <!-- Header Section -->
      <header class="text-center mb-16 animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-slide-up">
          <span class="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
          <span class="text-sm text-white/60 font-medium tracking-wide">COUNTING DOWN TO</span>
        </div>
        
        <h1 
          class="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 animate-slide-up gradient-text"
          style="animation-delay: 0.1s"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Something Special
        </h1>
        
        <p 
          class="text-lg md:text-xl text-white/40 font-light max-w-md mx-auto animate-slide-up"
          style="animation-delay: 0.2s"
        >
          A moment worth waiting for
        </p>
      </header>

      <!-- ✅ NEW: Photo Gallery -->
      <PhotoGallery />

      <!-- Countdown Timer -->
      <div class="mt-12 w-full">
        <CountdownTimer 
          :targetDate="targetDate"
          @hover="isHovering = $event"
        />
      </div>

      <!-- Footer Info -->
      <footer class="mt-16 text-center animate-fade-in" style="animation-delay: 0.8s;">
        <div class="inline-flex items-center gap-3 text-white/30">
          <div class="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
          <span class="text-sm tracking-widest uppercase">May 26, 2026</span>
          <div class="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
        </div>
      </footer>

    </div>

    <!-- Corner Decorations -->
    <div class="absolute top-8 left-8 w-20 h-20 border-l border-t border-white/10 animate-fade-in"></div>
    <div class="absolute top-8 right-8 w-20 h-20 border-r border-t border-white/10 animate-fade-in"></div>
    <div class="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-white/10 animate-fade-in"></div>
    <div class="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-white/10 animate-fade-in"></div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import CountdownTimer from './components/CountdownTimer.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import MorphingBlob from './components/MorphingBlob.vue'
import PhotoGallery from './components/PhotoGallery.vue'  // ✅ ADD THIS

// Target date - May 26, 2026
const targetDate = new Date(2026, 4, 26, 0, 0, 0)

// Cursor tracking
const cursor = reactive({ x: 0, y: 0 })
const cursorDot = reactive({ x: 0, y: 0 })
const isHovering = ref(false)

let dotAnimation = null

const handleMouseMove = (e) => {
  cursor.x = e.clientX
  cursor.y = e.clientY
  
  if (dotAnimation) cancelAnimationFrame(dotAnimation)
  const animateDot = () => {
    cursorDot.x += (cursor.x - cursorDot.x) * 0.15
    cursorDot.y += (cursor.y - cursorDot.y) * 0.15
    dotAnimation = requestAnimationFrame(animateDot)
  }
  animateDot()
}

const handleMouseLeave = () => {
  if (dotAnimation) cancelAnimationFrame(dotAnimation)
}
</script>