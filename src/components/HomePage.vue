<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoImg from '../assets/logo.png'
import bgImg   from '../assets/PhotoCollage.png'

const router = useRouter()

const activeModal = ref(null)
const modalTitles = {
  about:   'ABOUT US',
  terms:   'TERMS OF USE',
  privacy: 'PRIVACY POLICY',
  contact: 'CONTACT US',
}
function openModal(name) { activeModal.value = name }
function closeModal()    { activeModal.value = null }
</script>

<template>
  <div class="page">
    <div class="bg" :style="{ backgroundImage: `url(${bgImg})` }"></div>
    <div class="overlay"></div>

    <!-- HERO -->
    <main class="hero">
      <div class="logo-wrap">
        <img :src="logoImg" alt="Pilikula" class="logo-img" />
      </div>
      <div class="text-block">
        <p class="pre-title">PILIIN ANG</p>
        <h1 class="main-title">PELIKULANG PILIPINO</h1>
        <p class="tagline">Bida ang kuwento natin.</p>
      </div>
      <button class="cta-btn" @click="router.push('/signup')">Get Started</button>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <nav class="footer-nav">
        <a href="#" @click.prevent="openModal('about')">About Us</a>
        <span>|</span>
        <a href="#" @click.prevent="openModal('terms')">Term of Use</a>
        <span>|</span>
        <a href="#" @click.prevent="openModal('privacy')">Privacy Policy</a>
        <span>|</span>
        <a href="#" @click.prevent="openModal('contact')">Contact Us</a>
      </nav>
      <div class="socials">
        <a href="https://www.facebook.com/share/1KaERTybm5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </div>
      <p class="copyright">
        Copyright &copy; 2025 Film Development Council of the Philippines. All Rights Reserved.
      </p>
    </footer>

    <!-- MODALS -->
    <transition name="modal-fade">
      <div v-if="activeModal" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-box">

          <!-- Header -->
          <div class="modal-header">
            <div class="modal-bg-overlay"></div>
            <h2 class="modal-title">{{ modalTitles[activeModal] }}</h2>
            <button class="modal-close" @click="closeModal">✕</button>
          </div>

          <!-- Body -->
          <div class="modal-body">

            <!-- ABOUT US -->
            <template v-if="activeModal === 'about'">
              <p>PiliKula is a web-based film review and cinema discourse platform committed to the critical examination, promotion, and advancement of Filipino cinema. The platform serves as a digital space for the evaluation and appreciation of local films, including mainstream, independent, regional, and student productions.</p>
              <p>PiliKula aims to foster informed audience engagement through film reviews, analytical articles, curated recommendations, and feature content. Its approach integrates critical analysis with cultural sensitivity, ensuring all content is presented constructively, balanced, and respectful of creative works and their creators.</p>
              <p>The platform recognizes film criticism as a form of cultural participation and seeks to contribute to the broader discourse surrounding Filipino storytelling. By providing visibility to both established and emerging filmmakers, PiliKula supports the development of a more inclusive and sustainable local film industry.</p>
              <p>PiliKula is intended for film students, enthusiasts, and general audiences who seek accessible yet meaningful engagement with cinema. Through its content, the platform aims to promote awareness, appreciation, and continued support for Filipino films.</p>
            </template>

            <!-- TERMS OF USE -->
            <template v-if="activeModal === 'terms'">
              <h4>1. Acceptance of Terms</h4>
              <p>By accessing, browsing, or using the PiliKula website, users acknowledge that they have read, understood, and agreed to be bound by these Terms of Use. If the user does not agree with any part of these terms, they must discontinue use of the website.</p>
              <h4>2. Permitted Use</h4>
              <p>The content provided on PiliKula is intended solely for informational, educational, and non-commercial purposes. Users agree to use the website in accordance with applicable laws and regulations.</p>
              <h4>3. Intellectual Property Rights</h4>
              <p>All original content is the property of PiliKula and is protected under applicable intellectual property laws. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited. Third-party materials are used for commentary, criticism, and educational purposes in accordance with fair use principles.</p>
              <h4>4. User Conduct</h4>
              <p>Users agree not to: post or transmit unlawful, harmful, defamatory, or offensive content; engage in disruptive, abusive, or inappropriate behavior; distribute spam, advertisements, or misleading information.</p>
              <h4>5. Disclaimer of Content</h4>
              <p>All reviews, opinions, and analyses published on PiliKula reflect the views of the respective authors and are inherently subjective. No guarantees are made regarding completeness, reliability, or objectivity.</p>
              <h4>6. External Links</h4>
              <p>PiliKula does not endorse or assume responsibility for the content, policies, or practices of external sites linked from the website.</p>
              <h4>7. Limitation of Liability</h4>
              <p>PiliKula shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or its content.</p>
              <h4>8. Amendments</h4>
              <p>PiliKula reserves the right to modify or update these Terms of Use at any time without prior notice. Continued use constitutes acceptance of any revised terms.</p>
            </template>

            <!-- PRIVACY POLICY -->
            <template v-if="activeModal === 'privacy'">
              <h4>1. Collection of Information</h4>
              <p>PiliKula may collect limited personal information voluntarily provided by users, including names and email addresses. Non-personal data such as browser type, device information, and usage statistics may also be collected.</p>
              <h4>2. Purpose of Data Collection</h4>
              <p>Collected information shall be used solely to improve website functionality, respond to user inquiries, manage subscriptions, and analyze audience engagement.</p>
              <h4>3. Data Sharing and Disclosure</h4>
              <p>PiliKula does not sell, rent, or trade personal information to third parties. Information may be disclosed only when required by law or necessary to protect the platform's rights, safety, or integrity.</p>
              <h4>4. Cookies and Tracking Technologies</h4>
              <p>The website may use cookies and similar technologies to enhance the user experience. Users can adjust browser settings to decline cookies, though this may affect certain functionality.</p>
              <h4>5. Data Security</h4>
              <p>PiliKula implements reasonable administrative and technical measures to protect personal information. However, no method of data transmission over the Internet is entirely secure.</p>
              <h4>6. Third-Party Services</h4>
              <p>The platform may use third-party tools that collect and process data in accordance with their own privacy policies. PiliKula assumes no responsibility for the practices of such third parties.</p>
              <h4>7. User Rights</h4>
              <p>Users have the right to request access to, correction of, or deletion of their personal data, subject to applicable laws and regulations.</p>
              <h4>8. Policy Updates</h4>
              <p>This Privacy Policy may be revised periodically. Continued use of the website signifies acceptance of such updates.</p>
            </template>

            <!-- CONTACT US -->
            <template v-if="activeModal === 'contact'">
              <p>For inquiries, feedback, or concerns regarding PiliKula, its content, or its policies, email us at <a href="mailto:pilikula.official@gmail.com" class="contact-email">pilikula.official@gmail.com</a></p>
            </template>

          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
/* ─── Lock to viewport ─── */
.page {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #07091a;
  overflow: hidden;
}

/* ─── Photo collage background ─── */
.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* ─── Dark overlay ─── */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(4,7,22,0.88) 0%, rgba(4,7,22,0.65) 45%, rgba(4,7,22,0.25) 100%);
  z-index: 1;
}

/* ─── Hero ─── */
.hero {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(1rem, 3.5vw, 2.5rem) clamp(1.8rem, 7vw, 6rem);
  gap: clamp(0.5rem, 1.5vh, 1.1rem);
  animation: fadeUp 0.75s ease both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.logo-wrap { display: flex; align-items: center; }
.logo-img { height: clamp(32px, 3.8vw, 54px); width: auto; object-fit: contain; filter: drop-shadow(0 1px 6px rgba(0,0,0,0.7)) brightness(1.05); }
.text-block { display: flex; flex-direction: column; }
.pre-title { font-family: 'Trebuchet MS', sans-serif; font-weight: 900; color: #dde2f8; letter-spacing: 0.14em; line-height: 1; }
.main-title { font-family: 'Trebuchet MS', 'Franklin Gothic Medium', 'Arial Narrow', sans-serif; font-weight: 900; color: #ffffff; line-height: 1.0; letter-spacing: 0.01em; text-shadow: 0 2px 28px rgba(0,0,0,0.65); }
.tagline { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(0.8rem, 1.4vw, 1.05rem); font-style: italic; color: #F5A623; letter-spacing: 0.04em; }
.cta-btn { margin-top: clamp(0.1rem, 0.6vh, 0.5rem); padding: clamp(0.42rem, 1vh, 0.7rem) clamp(1.2rem, 3vw, 2.2rem); border: 2px solid #F5A623; background: transparent; color: #F5A623; font-family: 'Trebuchet MS', sans-serif; font-size: clamp(0.72rem, 1.05vw, 0.92rem); font-weight: 700; letter-spacing: 0.1em; cursor: pointer; border-radius: 3px; transition: background 0.22s, color 0.22s, transform 0.15s; }
.cta-btn:hover { background: #F5A623; color: #07091a; transform: translateY(-2px); }

/* ─── Footer ─── */
.footer { position: relative; z-index: 2; background: rgba(4,6,18,0.92); border-top: 1px solid rgba(245,166,35,0.18); padding: clamp(0.5rem, 1.3vh, 0.95rem) clamp(1rem, 3vw, 2rem); display: flex; flex-direction: column; align-items: center; gap: clamp(0.25rem, 0.65vh, 0.55rem); }
.footer-nav { display: flex; align-items: center; gap: clamp(0.3rem, 0.8vw, 0.7rem); flex-wrap: wrap; justify-content: center; }
.footer-nav a { color: #b0b8d8; text-decoration: underline; font-size: clamp(0.58rem, 0.92vw, 0.8rem); font-family: 'Trebuchet MS', sans-serif; white-space: nowrap; transition: color 0.2s; cursor: pointer; }
.footer-nav a:hover { color: #F5A623; }
.footer-nav span { color: rgba(255,255,255,0.22); font-size: 0.7rem; }
.socials { display: flex; gap: 0.7rem; }
.socials a { color: #b0b8d8; display: flex; transition: color 0.2s, transform 0.18s; }
.socials a:hover { color: #F5A623; transform: translateY(-2px); }
.copyright { font-family: 'Trebuchet MS', sans-serif; font-size: clamp(0.5rem, 0.78vw, 0.68rem); color: rgba(176,184,216,0.4); text-align: center; }

/* ─── Modals ─── */
.modal-backdrop { position: fixed; inset: 0; background: rgba(4,7,22,0.85); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px); }
.modal-box { background: #0f1225; border: 1px solid rgba(245,166,35,0.25); border-radius: 10px; width: 100%; max-width: 620px; max-height: 88vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.7); }
.modal-header { position: relative; height: 120px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.modal-bg-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, #0d1530 0%, #1a2245 50%, #0d1530 100%); }
.modal-title { position: relative; z-index: 2; font-family: 'Trebuchet MS', 'Franklin Gothic Medium', sans-serif; font-size: clamp(1.4rem, 4vw, 2.2rem); font-weight: 900; color: #F5A623; letter-spacing: 0.12em; text-shadow: 0 2px 12px rgba(0,0,0,0.8); text-align: center; }
.modal-close { position: absolute; top: 0.8rem; right: 0.9rem; z-index: 10; background: rgba(0,0,0,0.5); border: 1px solid rgba(245,166,35,0.4); color: #e8eaf6; width: 30px; height: 30px; border-radius: 50%; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s, color 0.2s; }
.modal-close:hover { background: #F5A623; color: #07091a; }
.modal-body { overflow-y: auto; padding: 1.5rem 1.8rem 2rem; display: flex; flex-direction: column; gap: 1rem; scrollbar-width: thin; scrollbar-color: #F5A623 #0f1225; }
.modal-body::-webkit-scrollbar { width: 4px; }
.modal-body::-webkit-scrollbar-track { background: #0f1225; }
.modal-body::-webkit-scrollbar-thumb { background: #F5A623; border-radius: 2px; }
.modal-body p { font-size: clamp(0.78rem, 1.2vw, 0.88rem); color: #c5cae9; line-height: 1.75; }
.modal-body h4 { font-size: clamp(0.82rem, 1.3vw, 0.95rem); font-weight: 700; color: #e8eaf6; margin-top: 0.3rem; }
.contact-email { color: #F5A623; font-weight: 700; text-decoration: none; transition: opacity 0.2s; }
.contact-email:hover { opacity: 0.8; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.96); }

/* ─── Responsive ─── */
@media (max-width: 480px) {
  .hero { padding: 1rem 1.4rem; }
  .main-title { font-size: clamp(2rem, 10.5vw, 3rem); }
  .footer-nav { gap: 0.2rem; }
}
@media (min-width: 481px) and (max-width: 768px) {
  .main-title { font-size: clamp(2.2rem, 8vw, 4rem); }
}
@media (min-width: 1400px) {
  .main-title { font-size: clamp(4.5rem, 5.5vw, 7rem); }
  .logo-img   { height: clamp(44px, 3.6vw, 58px); }
}
@media (orientation: landscape) and (max-height: 520px) {
  .hero { gap: 0.3rem; padding: 0.6rem clamp(1.5rem, 6vw, 4rem); }
  .main-title  { font-size: clamp(1.4rem, 5.5vh, 2.8rem); }
  .pre-title, .tagline { font-size: clamp(0.6rem, 1.5vh, 0.82rem); }
  .cta-btn   { padding: 0.28rem 1rem; font-size: 0.66rem; }
  .logo-img  { height: clamp(22px, 4vh, 36px); }
  .footer    { padding: 0.35rem 1rem; gap: 0.18rem; }
}
</style>