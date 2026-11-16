import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NotFound } from './components/NotFound';
import {
  Terminal,
  Database,
  Code2,
  Cpu,
  Globe,
  ExternalLink,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Trophy,
  FileText,
  Menu,
  X,
  Send,
  ArrowUp
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.36-1.53 6.36-7.16a5.8 5.8 0 0 0-1.54-4.04 5.5 5.5 0 0 0-.16-4s-1.27-.4-4.14 1.5a13.9 13.9 0 0 0-7.5 0C4.27 1.3 3 1.7 3 1.7a5.5 5.5 0 0 0-.16 4 5.8 5.8 0 0 0-1.54 4.04c0 5.6 3.25 6.8 6.35 7.15A4.8 4.8 0 0 0 6 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LeetcodeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.hash || window.location.pathname !== '/') {
              window.history.pushState(null, '', '/');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-lg tracking-tight text-slate-900 hover:text-slate-700 transition-colors cursor-pointer"
        >
          Prajwal Nangare.
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://drive.google.com/file/d/1WoJXm3SudfZcmgo2Ih7qESa07HV4EzCf/view" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            <FileText size={16} /> Resume
          </a>
          <a href="mailto:prajwalnangare41@gmail.com" className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Experience</a>
          <div className="w-full h-px bg-slate-100 my-2" />
          <a href="https://drive.google.com/file/d/1WoJXm3SudfZcmgo2Ih7qESa07HV4EzCf/view" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-600 font-medium">
            <FileText size={16} /> Resume
          </a>
          <a href="mailto:prajwalnangare41@gmail.com" onClick={() => setIsOpen(false)} className="inline-flex justify-center w-full px-4 py-3 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const TypewriterHeading = () => {
  const phrases = [
    "Full-Stack Engineer",
    "SaaS & AI Builder",
    "GenAI & Automation Developer",
    "Founder @ Codiva Labs"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullPhrase = phrases[currentPhraseIndex] || phrases[0];
    if (!currentFullPhrase) return;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentFullPhrase.substring(0, currentText.length - 1));
        if (currentText.length === 1) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 15);
    } else {
      if (currentText === currentFullPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentFullPhrase.substring(0, currentText.length + 1));
        }, 40);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-6 font-sans">
      Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Prajwal</span>.<br />
      <span className="text-slate-500 font-normal">
        {currentText}
      </span>
      <span className="text-slate-400 animate-[pulse_1s_ease-in-out_infinite] font-light">|</span>
    </motion.h1>
  );
};

const Hero = () => (
  <section id="about" className="relative min-h-screen flex items-center pt-20 bg-slate-50 overflow-hidden">
    {/* Aesthetic Ambient Orbs */}
    <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-400/5 blur-[100px] animate-[spin_20s_linear_infinite]" />
    <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-purple-400/5 blur-[100px] animate-[spin_25s_linear_infinite_reverse]" />

    <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-3xl"
      >
        <TypewriterHeading />

        <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
          A Full-Stack Developer based in Pune, India, driven by building practical, high-impact software. Through founding Codiva Labs, I've developed end-to-end SaaS platforms, algorithmic market signal tools, and AI-powered business workflows. I am now seeking full-time Software Engineering opportunities where I can tackle complex technical challenges at scale.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#projects" className="px-6 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-2">
            View My Work <ChevronRight size={16} />
          </a>
          <a href="https://drive.google.com/file/d/1WoJXm3SudfZcmgo2Ih7qESa07HV4EzCf/view" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
            <FileText size={16} /> View Resume
          </a>
          <a href="https://github.com/prajwalnangare01" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-transparent text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <GithubIcon size={16} /> GitHub Profile
          </a>
          <a href="https://leetcode.com/u/prajwalnangare01/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-transparent text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <LeetcodeIcon size={16} /> LeetCode
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CodivaSection = () => {
  return (
    <section id="codiva" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          My Agency
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700/50 hover:border-slate-600 transition-colors shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <h3 className="text-3xl font-extrabold text-white mb-2">Codiva.</h3>
              <p className="text-slate-400 font-medium mb-6">Founder & Full-Stack Lead</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://codivalabs.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-md text-sm font-semibold hover:bg-slate-100 transition-colors">
                  <ExternalLink size={16} /> Visit Website
                </a>
                <a href="https://instagram.com/codiva_labs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-slate-600 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors">
                  <InstagramIcon size={16} /> Instagram
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Founded a software and digital product studio delivering production-grade web platforms, vertical SaaS solutions, and AI automation pipelines. Under Codiva, we build and launch proprietary ventures—including TurfFlow, RVOLX, Aladin, and Prosperia—alongside live commercial client websites and interactive showcases, supported by an autonomous $0/month serverless content engine running daily on @codiva_labs.
              </p>
              <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-3 text-sm text-slate-400">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-slate-300 font-medium">Services & Products:</span>
                  <a href="#turfflow" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    TurfFlow
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="#rvolx" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    RVOLX
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="#aladin" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    Aladin <span className="text-[11px] text-amber-400 font-medium">(Coming Soon)</span>
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="#prosperia" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    Prosperia
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-slate-300 font-medium">Interactive Showcase:</span>
                  <a href="https://codivalabs.com/portfolio" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors inline-flex items-center gap-1 font-normal">
                    12 Live Demos <ExternalLink size={13} />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-slate-300 font-medium">Live Client Sites:</span>
                  <a href="https://www.powerupfitness.co.in/" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    Power Up Fitness
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="https://artistabysupriya.com/" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    Artista Salon
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="https://theadsarchitect.netlify.app/" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    The Ads Architects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    { title: "Frontend", skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "MUI"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "MongoDB", "MySQL", "Redis"] },
    { title: "AI / ML", skills: ["Python", "Generative AI", "Agentic AI", "RAG", "GANs", "Deep Learning", "Machine Learning", "PyTorch", "TensorFlow", "Scikit-learn", "MediaPipe", "n8n"] },
    { title: "DevOps & Tools", skills: ["GitHub Actions", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "Vercel", "Render"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-slate-900 mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          Technical Skills
        </motion.h2>
        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 py-4 border-b border-slate-100 last:border-0"
            >
              <div className="w-full md:w-1/4 font-medium text-slate-900">{cat.title}</div>
              <div className="w-full md:w-3/4 flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white border border-slate-200/60 rounded-md text-xs font-semibold text-slate-600 shadow-sm hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: "ai-gym-coach",
      category: "hand-coded",
      title: "AI Gym Coach — Real-Time Computer Vision & Voice Fitness Assistant",
      subtitle: "Hand-Coded Skeletal Kinematics & Real-Time Rep-Counting Engine",
      description: "Built for automated personal fitness training and real-time exercise posture correction without requiring an expensive gym trainer. Uses live webcam video via MediaPipe Pose Landmarker and WebRTC to monitor skeletal joint angles in real time, automatically count valid reps, and diagnose improper posture across 5 exercises (squats, push-ups, curls, shoulder press, lunges), delivering instant corrective voice coaching via Groq (Llama 3.3) and gTTS while logging sessions in SQLite.",
      learnings: "Real-time computer vision pipelines with MediaPipe Pose Landmarker, calculating joint angles using 2D/3D trigonometry vectors, streaming low-latency camera frames via WebRTC, and integrating local LLM voice feedback with persistent SQLite session tracking.",
      tags: ["Python", "MediaPipe", "WebRTC", "Trigonometry / Geometry", "Streamlit", "SQLite", "Groq (Llama 3.3)"],
      highlight: "Written Without AI",
      github: "https://github.com/prajwalnangare01/AI-Gym-Coach",
      demo: "https://ai-gym-coach-ktsskhrh7kk6vc9uxjpkum.streamlit.app/"
    },
    {
      id: "weather-app",
      category: "hand-coded",
      title: "Weather App — Real-Time Geolocation & Forecast Application",
      subtitle: "Hand-Coded Asynchronous JavaScript & REST API Weather Engine",
      description: "Built for instant global weather lookups with automatic location detection without manual city searches. Features real-time atmospheric data fetching via WeatherAPI, automatic HTML5 Geolocation detection, dynamic gradient UI transitions, background weather videos, and a fully responsive layout built with pure CSS3 Flexbox.",
      learnings: "Core vanilla JavaScript fundamentals, asynchronous programming with Promises & the Fetch API, browser Geolocation API, DOM lifecycle manipulation without external libraries, and mobile-first CSS Flexbox layout architecture.",
      tags: ["JavaScript (Vanilla)", "HTML5", "CSS3 Flexbox", "WeatherAPI", "DOM Manipulation", "Async / Fetch API"],
      highlight: "Written Without AI",
      github: "https://github.com/prajwalnangare01/WeatherApp",
      demo: "https://weatherappprajwal.netlify.app/"
    },
    {
      id: "wanderlust",
      category: "hand-coded",
      title: "WanderLust — Full-Stack Vacation Rental & Property Listing Platform",
      subtitle: "Hand-Coded Full-Stack MVC Architecture & Authentication System",
      description: "Built as a full-featured vacation rental and property marketplace clone of Airbnb. Enables travelers and property hosts to discover, list, and review accommodations with secure cookie-based session authentication via Passport.js, Cloudinary media storage, Mapbox geolocation mapping, and full CRUD operations on MongoDB Atlas.",
      learnings: "Full-stack Model-View-Controller (MVC) architecture, relational document modeling and schema validations in MongoDB/Mongoose, server-side rendering with EJS templates, secure session authentication with Passport.js, and cloud media management with Cloudinary.",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap 5", "Passport.js", "Cloudinary"],
      highlight: "Written Without AI",
      github: "https://github.com/prajwalnangare01/WanderLust",
      demo: "https://wanderlust-lwq5.onrender.com/"
    },
    {
      id: "turfflow",
      category: "saas",
      title: "TurfFlow — Multi-Sport Arena SaaS & WhatsApp Booking Engine",
      subtitle: "Omnichannel Sports Arena Management & Automated Reservation Engine",
      description: "Launched under Codiva Labs for sports arena and box cricket turf operators to completely automate customer reservations, payments, and daily facility operations without manual staff or phone calls. Enables players to check availability and book instantly via web or conversational WhatsApp (English/Hinglish). Solves double-booking race conditions through 5-minute Redis distributed slot locks, automates Razorpay payments with webhook idempotency and late-capture auto-refunds, generates 4-digit QR Gate Passes, and automates dynamic pricing, rainout cancellations, and monthly owner financial ledgers.",
      tags: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Redis", "Razorpay", "Baileys + n8n"],
      highlight: "🚀 Codiva Venture · Flagship B2B SaaS",
      github: null,
      demo: "https://turfflow-codiva.vercel.app/",
      instagram: "https://instagram.com/turf_flow"
    },
    {
      id: "rvolx",
      category: "saas",
      title: "RVOLX — Institutional Intraday Quantitative Signals Platform",
      subtitle: "Quantitative Trading Signals Engine & Ultra-Low-Latency Delivery",
      description: "Launched under Codiva Labs as a quantitative trading signals SaaS for NSE NIFTY 200 cash equities firing at 09:30 AM IST using Relative Volume (RVOL >= 2.5x), 14-period ATR volatility corridors, and strict >=1:2 Risk-to-Reward filters. Engineered an air-gapped HMAC-SHA256 signal ingestion bridge (<15ms latency), 3-tier RBAC across 4 web portals, and sub-450ms consent-verified WhatsApp alert delivery.",
      tags: ["Next.js 14", "TypeScript", "PostgreSQL 18", "HMAC-SHA256", "Baileys WhatsApp", "Razorpay"],
      highlight: "📈 Codiva Venture · FinTech SaaS",
      github: null,
      demo: "https://rvolx.netlify.app/",
      instagram: "https://instagram.com/rvol_x"
    },
    {
      id: "prosperia",
      category: "saas",
      title: "Prosperia — AI Real Estate Lead & Revenue Recovery SaaS",
      subtitle: "AI PropTech Lead Qualification, Calendar Scheduler & Pipeline CRM",
      description: "Launched under Codiva Labs as an autonomous customer acquisition and pipeline revenue recovery SaaS engineered for real estate agencies and developers. Features omnichannel conversational lead capture and qualification via Groq Llama 3.3 and Gemini tool contracts, semantic property inventory matching using pgvector, automated site visit booking with two-way calendar sync, and dormant CRM lead re-activation campaigns.",
      tags: ["React 18", "Node.js", "Express", "PostgreSQL", "Supabase RLS", "pgvector", "Groq AI", "Meta APIs"],
      highlight: "🏢 Codiva Venture · PropTech AI SaaS",
      github: "https://github.com/bott-127001/Prosperia",
      demo: "https://real-estate-iota-six-59.vercel.app/"
    },
    {
      id: "codiva-media",
      category: "saas",
      title: "Codiva Autonomous Media Engine — Serverless AI Content Pipeline",
      subtitle: "Autonomous Cloud Publishing & Multi-Model Generation System",
      description: "Built to completely automate brand growth, developer educational content, and social media marketing for Codiva Labs without manual graphic design or scheduling. Autonomously writes, designs, and publishes technical MERN stack carousels (2 posts daily) directly to Instagram (@codiva_labs) at $0.00/month infrastructure cost—powered by ephemeral GitHub Actions cron runners, a multi-model Gemini AI chain, Git-as-a-database state tracking, C++ SVG-to-PNG rasterization (<150ms renders), and Meta Graph API publishing.",
      tags: ["Node.js", "GitHub Actions", "Google Gemini API", "@resvg/resvg-js", "Meta Graph API v23.0"],
      highlight: "⚡ $0/mo Serverless System",
      github: "https://github.com/prajwalnangare01/codiva_automation",
      demo: "https://instagram.com/codiva_labs"
    },
    {
      id: "hemalens",
      category: "saas",
      title: "HemaLens — AI Blood Report Analyzer",
      subtitle: "AI Medical Diagnostic & Biomarker Analysis Tool",
      description: "Built to make complex medical blood test reports easily understandable for patients without waiting for clinical consultations. Analyzes uploaded pathology report images to extract critical hematology biomarkers (CBC, hemoglobin, platelets, lipid profiles), detect out-of-range anomalies, and translate dense medical jargon into clear, simplified health summaries in English and Hindi—complete with personalized dietary and lifestyle recommendations powered by Google Gemini AI.",
      tags: ["Node.js", "Express.js", "JavaScript", "Google Gemini AI"],
      highlight: "🏆 Hackathon Runner-Up",
      github: "https://github.com/prajwalnangare01/HemaLens",
      demo: "https://hemalens-nu.vercel.app/"
    },
    {
      id: "aladin",
      category: "saas",
      title: "Aladin — SMC-Based XAUUSD Forex Technical Indicator",
      subtitle: "Smart Money Concepts (SMC) Institutional Gold Market Structure Engine",
      description: "Built for quantitative and algorithmic Forex traders to identify high-probability institutional setups on XAUUSD (Gold / US Dollar). In active development under Codiva Labs, the engine formulates automated Change of Character (CHOCH) structural trend reversals, detects resting Trendline Liquidity (TJL) retail stop clusters, and confirms high-probability mitigation entries using multi-timeframe Order Blocks and 3-candle Fair Value Gaps (FVG).",
      tags: ["Pine Script v5", "TypeScript", "Algorithmic Trading", "Smart Money Concepts (SMC)", "Technical Analysis"],
      highlight: "⏳ Coming Soon · Institutional Forex Indicator",
      github: null,
      demo: null,
      comingSoon: true
    }
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handCodedCount = projects.filter((p) => p.category === "hand-coded").length;
  const saasCount = projects.filter((p) => p.category === "saas").length;

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-slate-900 tracking-tight uppercase text-sm tracking-widest text-slate-400"
            >
              Selected Projects
            </motion.h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl">
              Showcasing both <strong className="text-slate-800 font-semibold">projects written without AI</strong> (pure code to master algorithms, DOM APIs, and computer vision geometry) and <strong className="text-slate-800 font-semibold">scaled SaaS & AI architectures</strong>.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveCategory("hand-coded")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === "hand-coded"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            Written Without AI ({handCodedCount})
          </button>
          <button
            onClick={() => setActiveCategory("saas")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === "saas"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            SaaS & AI Architectures ({saasCount})
          </button>
        </div>

        <div className="flex flex-col">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              id={proj.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-12 border-b border-slate-200/60 last:border-0 flex flex-col md:flex-row gap-6 md:gap-12 items-start hover:bg-slate-100/30 transition-colors rounded-xl px-4 -mx-4 cursor-default scroll-mt-24"
            >
              <div className="w-full md:w-1/3 shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-lg font-bold text-slate-900">{proj.title}</h3>
                <p className="text-slate-500 text-sm mt-1 mb-4">{proj.subtitle}</p>
                {proj.highlight && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200/80">
                    {proj.highlight}
                  </span>
                )}
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-slate-600 leading-relaxed mb-4">
                  {proj.description}
                </p>
                {proj.learnings && (
                  <div className="mb-5 py-3 px-4 rounded-md bg-slate-100/80 border border-slate-200 text-xs leading-relaxed">
                    <span className="font-semibold text-slate-900 block mb-1">What I Learned:</span>
                    <span className="text-slate-600">{proj.learnings}</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-medium mb-6">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-300" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                      <GithubIcon size={16} /> View Code
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {proj.instagram && (
                    <a href={proj.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                      <InstagramIcon size={16} /> Instagram
                    </a>
                  )}
                  {proj.comingSoon && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-start"
        >
          <a
            href="https://github.com/prajwalnangare01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
          >
            <GithubIcon size={16} /> View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Founder & Full-Stack Lead",
      company: "Codiva Labs",
      date: "Jul 2025 – Present",
      points: [
        <>
          <strong className="text-slate-900 font-semibold">What is Codiva:</strong> Founded a <strong className="text-slate-900 font-semibold">digital product and software engineering agency</strong> delivering custom web platforms, scalable SaaS architectures, and autonomous AI automation systems for businesses and startups.
        </>,
        <>
          <strong className="text-slate-900 font-semibold">Services & Platforms Built:</strong>
          <span className="block mt-1.5 space-y-1.5 pl-3 border-l-2 border-slate-200">
            <span className="block">• <strong className="text-slate-900 font-semibold">TurfFlow:</strong> Sports arena & box cricket booking SaaS with automated WhatsApp reservations, 5-minute Redis slot locking, and Razorpay auto-refunds.</span>
            <span className="block">• <strong className="text-slate-900 font-semibold">RVOLX:</strong> Quantitative intraday trading signals platform for NSE NIFTY 200 cash equities with HMAC-SHA256 signal ingestion bridge and sub-450ms WhatsApp alerts.</span>
            <span className="block">• <strong className="text-slate-900 font-semibold">Prosperia:</strong> AI-powered real estate lead qualification, site visit scheduling, and pipeline CRM engineered to stop lead drop-offs and recover revenue.</span>
            <span className="block">• <strong className="text-slate-900 font-semibold">Aladin <span className="text-xs text-amber-600 font-medium">(Coming Soon):</span></strong> Institutional SMC-based Forex technical analysis engine for XAUUSD (Gold) spot price action, detecting CHOCH reversals and liquidity pools.</span>
          </span>
        </>,
        <>
          <strong className="text-slate-900 font-semibold">Clients & Demos Delivered:</strong>
          <span className="block mt-2 space-y-2 pl-3 border-l-2 border-slate-200">
            <span className="block">
              <span className="text-slate-700 font-medium block mb-1.5">• <strong className="text-slate-900 font-semibold">3+ Live Commercial Client Platforms:</strong></span>
              <span className="flex flex-wrap items-center gap-2 pl-4">
                <a
                  href="https://www.powerupfitness.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200/80 transition-colors"
                >
                  Power Up Fitness <ExternalLink size={12} className="text-slate-400" />
                </a>
                <a
                  href="https://artistabysupriya.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200/80 transition-colors"
                >
                  Artista Salon <ExternalLink size={12} className="text-slate-400" />
                </a>
                <a
                  href="https://theadsarchitect.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200/80 transition-colors"
                >
                  The Ads Architects <ExternalLink size={12} className="text-slate-400" />
                </a>
              </span>
            </span>
            <span className="block pt-1">
              <span className="text-slate-700 font-medium block mb-1.5">• <strong className="text-slate-900 font-semibold">Interactive Prototype Showcase:</strong></span>
              <span className="block pl-4">
                <a
                  href="https://codivalabs.com/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200/80 transition-colors"
                >
                  12+ Live Prototype Demos across multiple industry verticals <ExternalLink size={12} className="text-slate-400" />
                </a>
              </span>
            </span>
          </span>
        </>
      ]
    },
    {
      role: "Frontend Implementation Intern",
      company: "Parplaero",
      date: "Feb 2026 - Aug 2026",
      points: [
        "Implemented responsive frontend interfaces from Figma designs using modern web technologies.",
        "Developed reusable UI components and improved responsiveness and user experience across web applications."
      ]
    },
    {
      role: "Web Development Intern",
      company: "DThrill Software Solutions",
      date: "Jun 2023 - Jul 2023",
      points: [
        "Learned core web development fundamentals including HTML, CSS, JavaScript, and responsive design.",
        "Worked on frontend implementation tasks and gained practical experience in website development."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-slate-900 mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          Experience & Education
        </motion.h2>

        {/* Experience List */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Professional Experience</h3>
          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group py-8 border-b border-slate-200/60 last:border-0 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-slate-50/50 transition-colors rounded-xl px-4 -mx-4 cursor-default"
              >
                <div className="w-full md:w-1/4 shrink-0 text-slate-500 text-sm font-medium pt-1 group-hover:translate-x-2 transition-transform duration-300">
                  {exp.date}
                </div>
                <div className="w-full md:w-3/4">
                  <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
                  <div className="text-slate-600 font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-slate-300 mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education List */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Education</h3>
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-6 border-b border-slate-100 flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="w-full md:w-1/4 shrink-0 text-slate-500 text-sm font-medium pt-1">2024 – 2027</div>
              <div className="w-full md:w-3/4">
                <h4 className="text-lg font-bold text-slate-900">BSc Computer Science</h4>
                <div className="text-slate-600 mb-1">ASM College, Pimpri</div>
                <div className="text-sm text-slate-500">CGPA: 8.5</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-6 flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="w-full md:w-1/4 shrink-0 text-slate-500 text-sm font-medium pt-1">2021 – 2024</div>
              <div className="w-full md:w-3/4">
                <h4 className="text-lg font-bold text-slate-900">Diploma in Information Technology</h4>
                <div className="text-slate-600 mb-1">AISSMS Polytechnic, Pune</div>
                <div className="text-sm text-slate-500">77.00%</div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-10 border-t border-slate-200 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <div className="text-slate-500 text-sm font-medium order-2 md:order-1 mt-4 md:mt-0">
        © {new Date().getFullYear()} Prajwal Nangare. All rights reserved.
      </div>

      <div className="flex items-center gap-6 text-slate-600 order-1 md:order-2">
        <a href="mailto:prajwalnangare41@gmail.com" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="Email">
          <Mail size={18} />
        </a>
        <a href="tel:+919579158374" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="Phone">
          <Phone size={18} />
        </a>
        <a href="https://www.linkedin.com/in/prajwal-nangare-5988042b2/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="LinkedIn">
          <LinkedinIcon size={18} />
        </a>
        <a href="https://github.com/prajwalnangare01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="GitHub">
          <GithubIcon size={18} />
        </a>
        <a href="https://leetcode.com/u/prajwalnangare01/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="LeetCode">
          <LeetcodeIcon size={18} />
        </a>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const circleRadius = 22;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-white text-slate-900 shadow-xl hover:bg-slate-50 transition-colors z-50 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      {/* SVG Background/Progress Circle */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r={circleRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-slate-200"
        />
        <motion.circle
          cx="28"
          cy="28"
          r={circleRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          style={{ pathLength: scaleProgress }}
          className="text-blue-500"
          strokeLinecap="round"
        />
      </svg>
      {/* Icon */}
      <ArrowUp size={20} className="relative z-10" />
    </motion.button>
  );
};

function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigateHome = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isKnownRoute = currentPath === '/' || currentPath === '' || currentPath === '/index.html';

  if (!isKnownRoute) {
    return <NotFound onNavigateHome={handleNavigateHome} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 relative">
      <div className="noise-bg"></div>
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <CodivaSection />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
