<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import emailjs from '@emailjs/browser'

// --- CONFIGURATION ---
const EMAIL_SERVICE_ID = 'service_rfemzas'
const EMAIL_TEMPLATE_ID = 'template_j8w9l5c'
const EMAIL_PUBLIC_KEY = 'vYGev7OaoJPuOPmHh'

// --- STATE ---
const currentScreen = ref('selection') 
const userStatus = ref('')             
const feedbackMsg = ref('')
const feedbackColor = ref('text-yellow-300')
const phoneError = ref('')
const isSending = ref(false)
const phoneNumber = ref('')

// PUZZLE STATE
const inputs = ref([4, '', '', 5, '', '', 6, '', ''])
const lockedIndices = [true, false, false, true, false, false, true, false, false]

// THREE.JS REFS
const canvasRef = ref(null)
let scene, camera, renderer, magicShape, stars
let mouseX = 0
let mouseY = 0

// --- GAME LOGIC ---
const selectStatus = (status) => {
  if (status === 'Taken') {
    currentScreen.value = 'rejection'
  } else {
    userStatus.value = status
    localStorage.setItem('userStatus', status)
    currentScreen.value = 'game'
  }
}

const checkMath = () => {
  const nums = inputs.value.map(n => n === '' ? 0 : parseInt(n))

  if (nums.includes(0)) {
    feedbackMsg.value = "Fill all 6 empty circles."
    feedbackColor.value = "text-yellow-300"
    return
  }
  
  const uniqueNums = new Set(nums)
  if (uniqueNums.size !== 9 || nums.some(n => n < 1 || n > 9)) {
    feedbackMsg.value = "Use numbers 1-9 exactly once!"
    feedbackColor.value = "text-red-400"
    return
  }

  const side1 = nums[0] + nums[1] + nums[2] + nums[3]
  const side2 = nums[3] + nums[4] + nums[5] + nums[6]
  const side3 = nums[6] + nums[7] + nums[8] + nums[0]

  if (side1 === 20 && side2 === 20 && side3 === 20) {
    currentScreen.value = 'win'
    triggerWinAnimation()
  } else {
    feedbackMsg.value = `Sums: ${side1}, ${side2}, ${side3}. Goal: 20`
    feedbackColor.value = "text-red-300"
  }
}

const validateAndSend = () => {
  phoneError.value = ""
  const cleanNumber = phoneNumber.value.replace(/\D/g, '')
  
  if (cleanNumber.length !== 10) {
    phoneError.value = "Please enter a valid 10-digit US number."
    return
  }

  isSending.value = true
  
  const templateParams = {
    to_email: 'subscriber@fynx.org',
    message: `Winner: ${userStatus.value}. Phone: +1 ${cleanNumber}`
  }

  emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY)
    .then(() => {
      alert("Sent! We will contact you shortly.")
      isSending.value = false
    }, (error) => {
      console.error('FAILED...', error)
      alert("Error sending. Check console.")
      isSending.value = false
    })
}

// --- THREE.JS ADVANCED ANIMATION ---
const onMouseMove = (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1
}

const triggerWinAnimation = () => {
  if (!magicShape) return
  // Turn shape into a glowing Gold artifact
  magicShape.material.color.setHex(0xFFD700)
  magicShape.material.emissive.setHex(0xaa8800)
  magicShape.material.wireframe = false
  magicShape.material.roughness = 0.1
  magicShape.material.metalness = 0.9
  
  // Speed up stars
  if(stars) stars.rotation.z += 1
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  if (canvasRef.value) canvasRef.value.appendChild(renderer.domElement)

  // 1. Main Shape (Icosahedron)
  const geometry = new THREE.IcosahedronGeometry(1.6, 1)
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x60a5fa, // Blue-ish
    wireframe: true,
    emissive: 0x1e3a8a,
    emissiveIntensity: 0.5
  })
  magicShape = new THREE.Mesh(geometry, material)
  scene.add(magicShape)

  // 2. Starfield (Particles)
  const starGeo = new THREE.BufferGeometry()
  const starCount = 2000
  const posArray = new Float32Array(starCount * 3)
  
  for(let i = 0; i < starCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50 // Spread stars wide
  }
  
  starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  const starMat = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff, transparent: true })
  stars = new THREE.Points(starGeo, starMat)
  scene.add(stars)

  // Lighting
  const light = new THREE.PointLight(0xffffff, 2, 100)
  light.position.set(10, 10, 10)
  scene.add(light)
  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)
    
    // Parallax Effect (Move scene based on mouse)
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    if (currentScreen.value === 'win') {
      magicShape.rotation.x += 0.02
      magicShape.rotation.y += 0.03
      // Pulse effect
      const scale = 1.6 + Math.sin(Date.now() * 0.005) * 0.2
      magicShape.scale.set(scale, scale, scale)
    } else {
      // Gentle floating
      magicShape.rotation.x += 0.002
      magicShape.rotation.y += 0.002
      stars.rotation.y -= 0.0005 // Slowly rotate universe
    }
    
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <div ref="canvasRef" class="fixed top-0 left-0 w-full h-full -z-10 bg-gray-900 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black"></div>

  <main class="flex flex-col items-center justify-center min-h-screen text-white font-sans p-2 select-none overflow-hidden">
    
    <Transition name="fade" mode="out-in">
      
      <div v-if="currentScreen === 'selection'" key="select" class="screen-box border-blue-500/30 shadow-blue-500/20">
        <h1 class="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-lg">
          ELENOR.. ARE YOU
        </h1>
        <div class="flex gap-6 justify-center w-full">
          <button @click="selectStatus('Single')" class="btn-primary from-cyan-500 to-blue-600 ring-cyan-400">
            Single
          </button>
          <button @click="selectStatus('Taken')" class="btn-primary from-purple-500 to-pink-600 ring-pink-400">
            Taken
          </button>
        </div>
      </div>

      <div v-else-if="currentScreen === 'rejection'" key="reject" class="screen-box border-red-500/50 shadow-red-900/50">
        <h2 class="text-3xl font-bold mb-4 text-red-100">ACCESS DENIED</h2>
        <div class="w-16 h-1 bg-red-500 mb-6 rounded-full"></div>
        <p class="text-lg mb-8 text-red-200">Only <strong class="text-white border-b-2 border-red-500">Single</strong> players can enter the game</p>
        <button @click="currentScreen = 'selection'" class="text-sm text-gray-400 hover:text-white transition hover:scale-105">
          ← Return to Menu
        </button>
      </div>

      <div v-else-if="currentScreen === 'game'" key="game" class="flex flex-col items-center w-full max-w-md">
        <h2 class="text-3xl font-bold mb-2 tracking-wider drop-shadow-md">MAGIC TRIANGLE</h2>
        
        <div class="bg-white/5 p-4 rounded-xl mb-6 text-center backdrop-blur-md border border-white/10 shadow-xl">
           <p class="text-sm text-blue-100">Fill the empty nodes.<br>Sides must sum to <strong class="text-cyan-300 text-lg">20</strong>.</p>
        </div>

        <div class="relative w-[340px] h-[300px] mb-8 transform scale-[0.85] sm:scale-100 transition-transform origin-center">
          <svg class="absolute top-0 left-0 w-full h-full -z-10 stroke-cyan-500/30 stroke-[4px] drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            <polygon points="170,25 315,275 25,275" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
          </svg>

          <input v-model="inputs[0]" :disabled="true" class="node locked animate-pulse-slow" style="top: 0px; left: 146px;" />
          <input v-model="inputs[3]" :disabled="true" class="node locked animate-pulse-slow" style="top: 255px; left: 290px;" />
          <input v-model="inputs[6]" :disabled="true" class="node locked animate-pulse-slow" style="top: 255px; left: 5px;" />

          <input v-model="inputs[1]" class="node editable" style="top: 85px; left: 195px;" placeholder="?" />
          <input v-model="inputs[2]" class="node editable" style="top: 170px; left: 242px;" placeholder="?" />
          
          <input v-model="inputs[4]" class="node editable" style="top: 255px; left: 195px;" placeholder="?" />
          <input v-model="inputs[5]" class="node editable" style="top: 255px; left: 100px;" placeholder="?" />
          
          <input v-model="inputs[7]" class="node editable" style="top: 170px; left: 52px;" placeholder="?" />
          <input v-model="inputs[8]" class="node editable" style="top: 85px; left: 100px;" placeholder="?" />
        </div>

        <button @click="checkMath" class="px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-400 hover:to-emerald-600 rounded-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform active:scale-95 text-lg tracking-wide border border-green-400/30">
          VERIFY SUMS
        </button>

        <p :class="['mt-6 text-center font-bold text-lg h-8 transition-all duration-300', feedbackColor]">{{ feedbackMsg }}</p>
      </div>

      <div v-else-if="currentScreen === 'win'" key="win" class="screen-box border-yellow-400/50 shadow-[0_0_60px_rgba(250,204,21,0.3)]">
        <h1 class="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 drop-shadow-sm">
          VICTORY
        </h1>
        <p class="text-yellow-100/80 mb-8 text-sm tracking-widest uppercase">Genius Verified</p>
        
        <div class="flex flex-col gap-3 w-full max-w-xs">
          <label class="text-left text-xs font-bold text-yellow-500/80 uppercase tracking-widest pl-1">Mobile Number</label>
          
          <div class="flex items-center gap-2 group">
            <div class="bg-gray-800/80 border border-gray-600 rounded-lg px-3 py-3 flex items-center gap-2 text-gray-300 select-none">
              <span>🇺🇸</span>
              <span class="font-bold font-mono text-gray-400">+1</span>
            </div>

            <input 
              v-model="phoneNumber" 
              type="tel" 
              maxlength="10"
              placeholder="555 000 0000"
              class="flex-1 bg-gray-900/50 text-white font-mono text-lg px-4 py-3 rounded-lg outline-none border border-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder-gray-600"
              @input="phoneNumber = phoneNumber.replace(/\D/g,'')"
            />
          </div>

          <p v-if="phoneError" class="text-red-400 text-xs font-bold pl-1 animate-pulse">{{ phoneError }}</p>
          
          <button 
            @click="validateAndSend" 
            :disabled="isSending"
            class="mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-black py-4 px-6 rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
          >
            {{ isSending ? 'TRANSMITTING...' : 'CLAIM REWARD' }}
          </button>
        </div>
      </div>

    </Transition>
  </main>
</template>

<style scoped>
/* UTILITIES */
.screen-box {
  @apply text-center bg-gray-900/40 p-10 rounded-2xl backdrop-blur-xl border w-full max-w-sm flex flex-col items-center transition-all duration-500;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
}

.btn-primary {
  @apply px-8 py-3 rounded-xl font-bold transition-all text-white bg-gradient-to-br shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border border-white/10 hover:ring-2 ring-offset-2 ring-offset-gray-900;
}

/* NODES */
.node {
  @apply absolute w-12 h-12 text-center text-xl font-bold rounded-full border-2 shadow-xl outline-none transition-all duration-300 z-10;
  line-height: 2.7rem;
}

.locked {
  @apply bg-slate-800/90 border-slate-600 text-slate-400 cursor-default shadow-inner font-mono;
}

.editable {
  @apply bg-white/90 text-slate-900 border-cyan-400 cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.3)];
}
.editable:focus {
  @apply border-cyan-300 bg-white scale-125 ring-4 ring-cyan-400/40 z-50 shadow-[0_0_25px_rgba(34,211,238,0.6)];
}

/* CUSTOM ANIMATIONS */
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* VUE TRANSITIONS (The Fade Effect) */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  filter: blur(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.05);
  filter: blur(10px);
}
</style>