<template>
  <div class="relative w-full max-w-md mx-auto mt-12 animate-fade-in" style="animation-delay: 0.6s;">
    
    <!-- Main Photo Container -->
    <div 
      class="relative aspect-[3/4] rounded-3xl overflow-hidden glass-strong glow-purple group cursor-pointer"
      @mouseenter="pauseSlideshow"
      @mouseleave="resumeSlideshow"
      @click="nextPhoto"
    >
      <!-- Photos -->
      <transition-group name="photo-fade">
        <div
          v-for="(photo, index) in photos"
          v-show="currentIndex === index"
          :key="photo.id"
          class="absolute inset-0"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
      </transition-group>

      <!-- Floating Frame Decoration -->
      <div class="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none"></div>
      
      <!-- Corner Accents -->
      <div class="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-violet-400/50"></div>
      <div class="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-violet-400/50"></div>
      <div class="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-violet-400/50"></div>
      <div class="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-violet-400/50"></div>

      <!-- Caption -->
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <transition name="caption-slide" mode="out-in">
          <p 
            :key="currentIndex"
            class="text-white/80 text-sm font-light text-center"
          >
            {{ photos[currentIndex]?.caption }}
          </p>
        </transition>
      </div>

      <!-- Play/Pause Indicator -->
      <div 
        class="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span v-if="isPaused" class="text-white text-xs">▶</span>
        <span v-else class="text-white text-xs">❚❚</span>
      </div>

      <!-- Navigation Arrows -->
      <button 
        @click.stop="prevPhoto"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
      >
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <button 
        @click.stop="nextPhoto"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
      >
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Progress Dots -->
    <div class="flex justify-center gap-3 mt-6">
      <button
        v-for="(photo, index) in photos"
        :key="photo.id"
        @click="goToPhoto(index)"
        class="group relative"
      >
        <!-- Dot -->
        <span 
          class="block w-2 h-2 rounded-full transition-all duration-500"
          :class="currentIndex === index 
            ? 'bg-violet-500 scale-125' 
            : 'bg-white/30 hover:bg-white/50'"
        ></span>
        
        <!-- Active Ring Animation -->
        <span 
          v-if="currentIndex === index && !isPaused"
          class="absolute inset-0 rounded-full border border-violet-500 animate-ping"
        ></span>
      </button>
    </div>

    <!-- Progress Bar (shows time until next photo) -->
    <div class="mt-4 mx-auto max-w-[200px]">
      <div class="h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-100"
          :style="{ width: progressWidth + '%' }"
        ></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ✅ ADD YOUR PHOTOS HERE
const photos = ref([
  {
    id: 1,
    src: '/photos/photo1.jpg',  // Add your photo path
    alt: 'Photo 1',
    caption: 'The moment everything changed'
  },
  {
    id: 2,
    src: '/photos/photo2.jpg',  // Add your photo path
    alt: 'Photo 2',
    caption: 'Because you\'re just impossible'
  },
  {
    id: 3,
    src: '/photos/photo3.jpg',  // Add your photo path
    alt: 'Photo 3',
    caption: 'Counting down to something special 🌟'
  }
])

const currentIndex = ref(0)
const isPaused = ref(false)
const progressWidth = ref(0)

const SLIDE_DURATION = 5000 // 5 seconds per photo
let slideInterval = null
let progressInterval = null

const nextPhoto = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.value.length
  resetProgress()
}

const prevPhoto = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.value.length) % photos.value.length
  resetProgress()
}

const goToPhoto = (index) => {
  currentIndex.value = index
  resetProgress()
}

const resetProgress = () => {
  progressWidth.value = 0
}

const startSlideshow = () => {
  // Progress bar animation
  progressInterval = setInterval(() => {
    if (!isPaused.value) {
      progressWidth.value += (100 / (SLIDE_DURATION / 50))
      
      if (progressWidth.value >= 100) {
        nextPhoto()
      }
    }
  }, 50)
}

const pauseSlideshow = () => {
  isPaused.value = true
}

const resumeSlideshow = () => {
  isPaused.value = false
}

onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
  if (progressInterval) clearInterval(progressInterval)
})
</script>

<style scoped>
/* Photo Fade Transition */
.photo-fade-enter-active,
.photo-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.photo-fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.photo-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Caption Slide Transition */
.caption-slide-enter-active,
.caption-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.caption-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.caption-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>