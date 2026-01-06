<template>
  <canvas 
    ref="canvas" 
    class="absolute inset-0 pointer-events-none"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  mouseX: { type: Number, default: 0 },
  mouseY: { type: Number, default: 0 }
})

const canvas = ref(null)
let ctx = null
let particles = []
let animationId = null
let mousePosition = { x: 0, y: 0 }

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * 2 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.opacity = Math.random() * 0.5 + 0.2
    this.originalX = this.x
    this.originalY = this.y
  }

  update(mouseX, mouseY) {
    // Mouse interaction
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 150

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance
      const angle = Math.atan2(dy, dx)
      this.x -= Math.cos(angle) * force * 2
      this.y -= Math.sin(angle) * force * 2
    }

    // Normal movement
    this.x += this.speedX
    this.y += this.speedY

    // Return to original position slowly
    this.x += (this.originalX - this.x) * 0.01
    this.y += (this.originalY - this.y) * 0.01

    // Wrap around edges
    if (this.x < 0) this.x = this.canvas.width
    if (this.x > this.canvas.width) this.x = 0
    if (this.y < 0) this.y = this.canvas.height
    if (this.y > this.canvas.height) this.y = 0
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`
    ctx.fill()
  }
}

const init = () => {
  if (!canvas.value) return
  
  ctx = canvas.value.getContext('2d')
  resizeCanvas()
  
  // Create particles
  const particleCount = Math.min(100, Math.floor((canvas.value.width * canvas.value.height) / 15000))
  particles = Array.from({ length: particleCount }, () => new Particle(canvas.value))
  
  animate()
}

const resizeCanvas = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

const animate = () => {
  if (!ctx || !canvas.value) return
  
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  // Update and draw particles
  particles.forEach(particle => {
    particle.update(mousePosition.x, mousePosition.y)
    particle.draw(ctx)
  })

  // Draw connections
  particles.forEach((p1, i) => {
    particles.slice(i + 1).forEach(p2 => {
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 120) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 120)})`
        ctx.lineWidth = 0.5
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }
    })
  })

  animationId = requestAnimationFrame(animate)
}

watch(() => [props.mouseX, props.mouseY], ([x, y]) => {
  mousePosition.x = x
  mousePosition.y = y
})

onMounted(() => {
  init()
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeCanvas)
})
</script>