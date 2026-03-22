<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoImg from '../assets/logo.png'
import bgImg   from '../assets/PhotoCollage.png'

const router   = useRouter()
const email    = ref('')
const password = ref('')
const showPopup = ref(false)

function handleSubmit() {
  if (!email.value || !password.value) return

  // Show welcome popup then navigate
  showPopup.value = true
  setTimeout(() => {
    showPopup.value = false
    router.push('/main')
  }, 2200)
}
</script>

<template>
  <div class="page">
    <div class="bg" :style="{ backgroundImage: `url(${bgImg})` }"></div>
    <div class="overlay"></div>

    <!-- SIGN UP CARD -->
    <main class="card-wrap">
      <h1 class="title">SIGN UP</h1>

      <div class="form">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="input-field"
          autocomplete="email"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input-field"
          autocomplete="new-password"
        />

        <button class="submit-btn" @click="handleSubmit">Let's start!</button>

        <p class="or-label">Or sign up using</p>

        <!-- Facebook only -->
        <div class="social-icons">
          <a
            href="https://www.facebook.com/share/1KaERTybm5/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="social-icon"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>

        <div class="logo-wrap">
          <img :src="logoImg" alt="Pilikula" class="logo-img" />
        </div>
      </div>
    </main>

    <!-- WELCOME POPUP -->
    <transition name="popup-fade">
      <div v-if="showPopup" class="popup-backdrop">
        <div class="popup-box">
          <!-- Gold check icon -->
          <div class="popup-icon">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="7,12 10,15 17,8"/>
            </svg>
          </div>
          <h2 class="popup-title">Welcome to PiliKula!</h2>
          <p class="popup-msg">You're now part of the community. Get ready to explore Filipino cinema.</p>
          <!-- Progress bar -->
          <div class="popup-bar">
            <div class="popup-bar-fill"></div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
/* ── Lock to viewport ── */
.page {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #07091a;
  overflow: hidden;
}

/* ── Background ── */
.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 7, 22, 0.62);
  z-index: 1;
}

/* ── Card ── */
.card-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.9rem, 2.2vh, 1.5rem);
  width: 100%;
  max-width: 480px;
  padding: 0 1.5rem;
  animation: fadeUp 0.75s ease both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.title {
  font-family: 'Trebuchet MS', 'Franklin Gothic Medium', 'Arial Narrow', sans-serif;
  font-size: clamp(2rem, 6vw, 3.2rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.12em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.7);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.7rem, 1.8vh, 1.1rem);
  width: 100%;
}

.input-field {
  width: 100%;
  max-width: 320px;
  padding: clamp(0.6rem, 1.4vh, 0.9rem) 1.2rem;
  background: rgba(255, 255, 255, 0.88);
  border: none;
  border-radius: 30px;
  font-family: 'Trebuchet MS', sans-serif;
  font-size: clamp(0.82rem, 1.2vw, 0.95rem);
  color: #1a1a2e;
  outline: none;
  transition: background 0.2s, box-shadow 0.2s;
}
.input-field::placeholder { color: #555; }
.input-field:focus {
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.45);
}

.submit-btn {
  width: 100%;
  max-width: 320px;
  padding: clamp(0.62rem, 1.5vh, 0.9rem) 1.5rem;
  background: #F5A623;
  border: none;
  border-radius: 30px;
  font-family: 'Trebuchet MS', sans-serif;
  font-size: clamp(0.85rem, 1.3vw, 1rem);
  font-weight: 700;
  color: #1a1a2e;
  cursor: pointer;
  letter-spacing: 0.06em;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}
.submit-btn:hover {
  background: #e09510;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
}

.or-label {
  font-family: 'Trebuchet MS', sans-serif;
  font-size: clamp(0.7rem, 1vw, 0.82rem);
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.05em;
}

.social-icons { display: flex; gap: 1.1rem; align-items: center; }
.social-icon {
  color: #ffffff;
  display: flex;
  transition: color 0.2s, transform 0.18s;
}
.social-icon:hover { color: #F5A623; transform: translateY(-2px); }

.logo-wrap { margin-top: 0.2rem; }
.logo-img {
  height: clamp(24px, 3.2vw, 38px);
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 1px 5px rgba(0,0,0,0.6)) brightness(1.05);
}

/* ══════════════════════
   WELCOME POPUP
══════════════════════ */
.popup-backdrop {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 7, 22, 0.75);
  backdrop-filter: blur(6px);
}

.popup-box {
  background: #0f1225;
  border: 1px solid rgba(245, 166, 35, 0.35);
  border-radius: 16px;
  padding: 2.2rem 2.5rem 1.8rem;
  max-width: 360px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7),
              0 0 40px rgba(245, 166, 35, 0.12);
  animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.8) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.popup-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(245, 166, 35, 0.1);
  border: 2px solid rgba(245, 166, 35, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: iconPop 0.5s 0.15s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes iconPop {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.popup-title {
  font-family: 'Trebuchet MS', 'Franklin Gothic Medium', sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.45rem);
  font-weight: 900;
  color: #F5A623;
  letter-spacing: 0.04em;
  text-align: center;
  margin-top: 0.3rem;
}

.popup-msg {
  font-family: 'Trebuchet MS', sans-serif;
  font-size: clamp(0.75rem, 1.2vw, 0.88rem);
  color: #b0b8d8;
  line-height: 1.6;
  text-align: center;
}

/* Progress bar auto-fills over 2s to signal redirect */
.popup-bar {
  width: 100%;
  height: 3px;
  background: rgba(245, 166, 35, 0.2);
  border-radius: 2px;
  margin-top: 0.8rem;
  overflow: hidden;
}
.popup-bar-fill {
  height: 100%;
  width: 0%;
  background: #F5A623;
  border-radius: 2px;
  animation: fillBar 2s linear forwards;
}
@keyframes fillBar {
  from { width: 0%; }
  to   { width: 100%; }
}

/* Popup transition */
.popup-fade-enter-active { transition: opacity 0.25s ease; }
.popup-fade-leave-active { transition: opacity 0.3s ease; }
.popup-fade-enter-from, .popup-fade-leave-to { opacity: 0; }

/* ── Responsive ── */
@media (max-width: 480px) {
  .input-field, .submit-btn { max-width: 100%; }
}
@media (orientation: landscape) and (max-height: 520px) {
  .card-wrap { gap: 0.4rem; }
  .title { font-size: clamp(1.3rem, 4.5vh, 2rem); }
  .input-field, .submit-btn { padding: 0.42rem 1rem; }
}
</style>