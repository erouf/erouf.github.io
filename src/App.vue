<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'

// --- GAME STATE ---
const screen = ref('intro') 
const userGuess = ref('')
const totalSquares = 12
const breaksCount = ref(0)
const feedback = ref('')
const inputPlaceholder = ref('?') // Dynamic placeholder for error feedback

// --- BIRTHDAY STATE ---
const bdayDay = ref('')
const bdayMonth = ref('')
const isSending = ref(false)

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

// --- SLIDER STATE ---
const sliderTrack = ref(null)
const sliderKnob = ref(null)
const isDragging = ref(false)
const dragStartX = ref(0)
const knobPosition = ref(0)
const trackWidth = ref(0)
const maxDrag = ref(0)
const sliderUnlocked = ref(false)

// --- THREE.JS VARIABLES ---
const canvasRef = ref(null)
let scene, camera, renderer, controls
let squares = [] 
const ROWS = 3
const COLS = 4
const GAP = 0.05

// --- LIFECYCLE ---
onMounted(() => {
  initThree()
  createRealisticChocolate()
  animate()
  window.addEventListener('resize', onResize)
  
  if (sliderTrack.value && sliderKnob.value) {
    trackWidth.value = sliderTrack.value.clientWidth
    maxDrag.value = trackWidth.value - sliderKnob.value.clientWidth - 8
  }
  
  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('mouseup', handleDragEnd)
  document.addEventListener('touchmove', handleDragMove, { passive: false })
  document.addEventListener('touchend', handleDragEnd)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
  document.removeEventListener('touchmove', handleDragMove)
  document.removeEventListener('touchend', handleDragEnd)
})

// --- SLIDER LOGIC ---
const knobStyle = computed(() => ({
  transform: `translateX(${knobPosition.value}px)`,
  transition: isDragging.value ? 'none' : 'transform 0.3s ease-out'
}))

const trackFillStyle = computed(() => ({
  width: `${knobPosition.value + 50}px`,
  transition: isDragging.value ? 'none' : 'width 0.3s ease-out',
  opacity: knobPosition.value > 0 ? 1 : 0
}))

function handleDragStart(e) {
  if (sliderUnlocked.value) return
  isDragging.value = true
  const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  dragStartX.value = clientX - knobPosition.value
}

function handleDragMove(e) {
  if (!isDragging.value || sliderUnlocked.value) return
  e.preventDefault()
  const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const newPos = clientX - dragStartX.value
  knobPosition.value = Math.max(0, Math.min(newPos, maxDrag.value))
  
  if (knobPosition.value >= maxDrag.value * 0.95) {
    unlock()
  }
}

function handleDragEnd() {
  if (!isDragging.value || sliderUnlocked.value) return
  isDragging.value = false
  if (knobPosition.value < maxDrag.value * 0.95) {
    knobPosition.value = 0
  }
}

function unlock() {
  sliderUnlocked.value = true
  isDragging.value = false
  knobPosition.value = maxDrag.value 
  if (navigator.vibrate) navigator.vibrate(50);
  setTimeout(startGame, 300)
}

// --- THREE.JS SETUP ---
function initThree() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#FFF0E5') 

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 6, 7)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.physicallyCorrectLights = true
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  
  if (canvasRef.value) canvasRef.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.autoRotate = true 
  controls.autoRotateSpeed = 0.5

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 4)
  dirLight.position.set(5, 8, 5)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 2048
  dirLight.shadow.mapSize.height = 2048
  dirLight.shadow.bias = -0.0001
  scene.add(dirLight)
  
  const fillLight = new THREE.DirectionalLight(0xffeedd, 2)
  fillLight.position.set(-5, 3, -5)
  scene.add(fillLight)
}

function createRealisticChocolate() {
  const geometry = new THREE.BoxGeometry(0.92, 0.25, 0.92)
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x3E2723,     
    roughness: 0.35,      
    metalness: 0.0,       
    clearcoat: 1.0,       
    clearcoatRoughness: 0.15, 
    reflectivity: 0.5,    
    ior: 1.45,            
  })

  const offsetX = ((COLS - 1) * (1 + GAP)) / 2
  const offsetZ = ((ROWS - 1) * (1 + GAP)) / 2

  for (let z = 0; z < ROWS; z++) {
    for (let x = 0; x < COLS; x++) {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(x * (1 + GAP) - offsetX, 0, z * (1 + GAP) - offsetZ)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.userData = { gridX: x, gridZ: z }
      scene.add(mesh)
      squares.push(mesh)
    }
  }
}

// --- GAME LOGIC ---
function startGame() {
  controls.autoRotate = false
  gsap.to(camera.position, { x: 0, y: 8, z: 6, duration: 1.5, ease: "power2.inOut" })
  
  const intro = document.getElementById('intro-panel')
  gsap.to(intro, { 
    opacity: 0, y: -50, scale: 0.9, duration: 0.5, 
    onComplete: () => screen.value = 'question' 
  })
}

// --- UPDATED SUBMIT FUNCTION ---
function submitAnswer() {
  if (!userGuess.value) return
  
  const correct = totalSquares - 1
  const userAnswer = parseInt(userGuess.value)

  // IF ANSWER IS WRONG
  if (userAnswer !== correct) {
    // 1. Shake animation using GSAP
    const card = document.getElementById('question-card')
    gsap.to(card, { x: [-10, 10, -10, 10, 0], duration: 0.4, ease: "power1.inOut" })
    
    // 2. Clear input and show "Try again"
    userGuess.value = ''
    inputPlaceholder.value = "Nope!"
    setTimeout(() => { inputPlaceholder.value = "?" }, 1500)
    
    // 3. Return immediately - Do NOT go to demonstration
    return
  }

  // IF ANSWER IS CORRECT
  screen.value = 'demonstration'
  feedback.value = "Exactly right! Watch the logic..."
  setTimeout(runBreakingAnimation, 300)
}

function runBreakingAnimation() {
  const tl = gsap.timeline({ 
    defaults: { ease: "back.out(1.7)", duration: 0.6 },
    onComplete: () => {
      setTimeout(() => {
        screen.value = 'birthday'
      }, 2000)
    }
  })

  // BREAK ROWS
  tl.to({}, { onStart: () => breaksCount.value = 1 }, "+=0.5")
  const rows23 = squares.filter(s => s.userData.gridZ > 0)
  tl.to(rows23.map(s => s.position), { z: "+=0.45", y: "+=0.05", rotationX: "-=0.1" })

  tl.to({}, { onStart: () => breaksCount.value = 2 }, "+=0.1")
  const row3 = squares.filter(s => s.userData.gridZ > 1)
  tl.to(row3.map(s => s.position), { z: "+=0.45", y: "+=0.05", rotationX: "-=0.1" })

  // BREAK COLUMNS
  for (let col = 0; col < COLS - 1; col++) {
    for (let row = 0; row < ROWS; row++) {
      tl.to({}, { onStart: () => breaksCount.value++ }, ">-0.1") 
      const movers = squares.filter(s => s.userData.gridZ === row && s.userData.gridX > col)
      if (movers.length) {
        const randRot = (Math.random() - 0.5) * 0.3
        tl.to(movers.map(s => s.position), { x: "+=0.35", y: "+=0.02" }, "<") 
        tl.to(movers.map(s => s.rotation), { z: randRot, y: randRot }, "<")
      }
    }
  }
  
  // Victory Spin
  tl.to(squares.map(s => s.rotation), {
    y: Math.PI * 2, x: 0, z: 0, duration: 2,
    ease: "elastic.out(1, 0.3)",
    stagger: { each: 0.05, from: "center" }
  }, "+=0.5")
}

function sendBirthday() {
  if (!bdayDay.value || !bdayMonth.value) {
    alert("Please enter both day and month!")
    return
  }
  isSending.value = true
  const templateParams = {
    to_name: "Developer",
    from_name: "Elenor",
    message: `Elenor's Birthday is: ${bdayDay.value} of ${bdayMonth.value}`,
    reply_to: "noreply@game.com"
  }

  // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    emailjs.send('service_rfemzas', 'template_j8w9l5c', templateParams, 'vYGev7OaoJPuOPmHh')
    .then((response) => {
       isSending.value = false
       screen.value = 'final'
    }, (err) => {
       console.log('FAILED...', err)
       isSending.value = false
       alert("Failed to send.")
    })
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>

<template>
  <div ref="canvasRef" class="fixed inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-purple-50"></div>

  <main class="flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden p-4">
    
    <div v-if="screen === 'intro'" id="intro-panel" class="relative p-10 rounded-[3rem] text-center max-w-md w-full backdrop-blur-xl bg-white/40 border border-white/50 shadow-2xl shadow-purple-500/10">
      <h1 class="text-5xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-sm">
        <span class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Why are you visiting again, Elenor?
        </span>
      </h1>
      <p class="mb-10 text-xl font-medium text-gray-700">Let's play another game.</p>
      
      <div class="relative w-full h-16 rounded-full bg-gray-200/50 backdrop-blur-md border border-white/60 shadow-inner overflow-hidden p-1" ref="sliderTrack">
        <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-50" :style="trackFillStyle"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none" :class="{ 'opacity-0': sliderUnlocked }">
           <span class="text-xl font-bold text-gray-500/60 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-[length:200%_auto]">
             slide to play
           </span>
        </div>
        <div 
          ref="sliderKnob"
          class="relative z-10 h-full aspect-square bg-white rounded-full shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform"
          :class="{ 'bg-gradient-to-br from-cyan-300 to-purple-400 text-white': sliderUnlocked }"
          :style="knobStyle"
          @mousedown="handleDragStart"
          @touchstart.passive="handleDragStart"
        >
          <svg v-if="!sliderUnlocked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
           <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8 animate-bounce-short"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
      </div>
    </div>

    <div v-if="screen === 'question'" class="absolute bottom-12 w-full px-4 animate-fade-up flex justify-center">
      <div id="question-card" class="bg-white/60 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] backdrop-blur-xl text-center border border-white/40 max-w-md w-full">
        <h2 class="text-2xl font-extrabold mb-4 text-gray-800">Chocolate Logic</h2>
        <p class="mb-8 text-lg font-medium text-gray-700 leading-relaxed">
          You have a <span class="font-bold text-purple-700">{{ROWS}}x{{COLS}} bar</span> ({{totalSquares}} squares).
          <br><br>
          What is the <span class="border-b-2 border-pink-400">minimum number of breaks</span> required to separate every single square?
        </p>
        <div class="flex gap-3 justify-center">
          <input 
            v-model="userGuess" 
            type="number" 
            :placeholder="inputPlaceholder" 
            class="w-24 text-center text-3xl font-bold border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all bg-white/80 text-purple-900 placeholder:text-gray-300" 
            @keyup.enter="submitAnswer" 
          />
          <button @click="submitAnswer" class="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all active:scale-95">Check</button>
        </div>
      </div>
    </div>

    <div v-if="screen === 'demonstration'" class="absolute top-16 text-center animate-fade-in px-4 pointer-events-none">
      <h2 class="text-8xl font-black mb-6 drop-shadow-xl bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent scale-110">
        {{ breaksCount }}
      </h2>
      <div class="bg-white/70 px-8 py-4 rounded-2xl shadow-xl backdrop-blur-xl border border-white/40 inline-block">
        <p class="font-bold text-xl text-gray-800">{{ feedback }}</p>
      </div>
    </div>

    <div v-if="screen === 'birthday'" class="absolute inset-0 flex items-center justify-center p-4 animate-fade-in bg-white/20 backdrop-blur-sm z-50">
      <div class="bg-white/80 p-10 rounded-[3rem] shadow-2xl backdrop-blur-xl border border-white/60 max-w-md w-full text-center">
        
        <h2 class="text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          One Last Thing...
        </h2>
        <p class="text-gray-600 mb-8 font-medium">When should we celebrate your birthday?</p>

        <div class="space-y-4 mb-8">
          <div class="relative">
            <select v-model="bdayMonth" class="w-full appearance-none bg-white border-2 border-pink-100 px-6 py-4 rounded-2xl text-lg font-bold text-gray-700 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 transition-all cursor-pointer">
              <option value="" disabled selected>Select Month</option>
              <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-pink-400">
              <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <input v-model="bdayDay" type="number" min="1" max="31" placeholder="Day (1-31)" class="w-full bg-white border-2 border-pink-100 px-6 py-4 rounded-2xl text-lg font-bold text-gray-700 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 transition-all" />
        </div>

        <button 
          @click="sendBirthday" 
          :disabled="isSending"
          class="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span v-if="!isSending">Send</span>
          <span v-else>Sending...</span>
        </button>

      </div>
    </div>

    <div v-if="screen === 'final'" class="absolute inset-0 flex items-center justify-center p-4 animate-fade-in bg-white/30 backdrop-blur-md z-50">
      <div class="text-center p-12 rounded-[3rem] bg-white/90 shadow-2xl">
        <div class="text-6xl mb-6">💌</div>
        <h2 class="text-4xl font-extrabold mb-4 text-gray-800">Received!</h2>
        <p class="text-xl text-gray-600">Thanks for playing, Elenor.</p>
        <button @click="location.reload()" class="mt-8 text-pink-500 font-bold hover:underline">Play Again</button>
      </div>
    </div>

  </main>
</template>

<style>
.animate-fade-up { animation: fadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
.animate-bounce-short { animation: bounceShort 0.5s ease-in-out; }
.animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }

@keyframes shimmer { to { background-position: 200% center; } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
@keyframes bounceShort { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20%); } }
</style>
