// Data
const coursesData = {
  months: [
    {
      name_en: "Month 1: Foundations & AI",
      name_ar: "الشهر الأول",
      weeks: [
        {
          week_en: "Week 1",
          week_ar: "الأسبوع الأول",
          courses: [
            {
              title_en: "Python Basics 1",
              title_ar: "أساسيات البرمجة باستخدام بايثون 1",
              track: "Python",
              instructor_en: "Ahmed Fathy",
              instructor_ar: "م. أحمد فتحي",
              date: "Oct 15, 2025",
              topics_en: [
                "Programming Basics",
                "Programming Syntax",
                "Variables & Data Types",
                "Conditional Code",
                "Modular Code",
              ],
              difficulty: "Beginner",
            },
            {
              title_en: "Python Basics 2",
              title_ar: "أساسيات البرمجة باستخدام بايثون 2",
              track: "Python",
              instructor_en: "Ahmed Fathy",
              instructor_ar: "م. أحمد فتحي",
              date: "TBD",
              topics_en: [
                "Collections",
                "Iterations",
                "Using External Code",
                "Objects",
              ],
              difficulty: "Beginner",
            },
            {
              title_en: "Intro to Artificial Intelligence",
              title_ar: "مدخل إلى الذكاء الاصطناعي",
              track: "AI",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: [
                "Generative AI vs Traditional AI",
                "LLMs & Neural Networks",
                "Prompt Engineering",
                "Practical AI Applications",
                "Future of AI",
              ],
              difficulty: "Beginner",
            },
          ],
        },
        {
          week_en: "Week 2",
          week_ar: "الأسبوع الثاني",
          courses: [
            {
              title_en: "Practical Python Projects + ChatGPT",
              title_ar: "مشاريع تطبيقية باستخدام Python + ChatGPT",
              track: "Python",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Oct 22, 2025",
              topics_en: ["Building 6 Practical Projects"],
              difficulty: "Intermediate",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "Git & GitHub",
              title_ar: "Git & GitHub",
              track: "Tools",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Oct 30, 2025",
              topics_en: [
                "Git Basics",
                "Branches",
                "Merge",
                "Remote Repository",
              ],
              difficulty: "Intermediate",
            },
            {
              title_en: "Final Project: Weather App",
              title_ar: "المشروع النهائي: تطبيق الطقس",
              track: "Python",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: ["Building Weather App using API"],
              difficulty: "Intermediate",
            },
          ],
        },
        {
          week_en: "Week 4",
          week_ar: "الأسبوع الرابع",
          courses: [
            {
              title_en: "Java Crash Course",
              title_ar: "Java Crash Course",
              track: "Java",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Nov 6, 2025",
              topics_en: ["Java Basics"],
              difficulty: "Beginner",
            },
            {
              title_en: "Data Structures Fundamentals",
              title_ar: "هياكل البيانات الأساسية",
              track: "Java",
              instructor_en: "Ahmed Ali",
              instructor_ar: "م. أحمد علي",
              date: "TBD",
              topics_en: [
                "Performance Evaluation",
                "Arrays",
                "2D & Multi-D Arrays",
                "ArrayList",
                "Stack",
                "Queue",
              ],
              difficulty: "Intermediate",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 2: Mastery & Career",
      name_ar: "الشهر الثاني",
      weeks: [
        {
          week_en: "Week 1",
          week_ar: "الأسبوع الأول",
          courses: [
            {
              title_en: "Data Structure Challenges",
              title_ar: "تحديات وحلول هياكل البيانات",
              track: "Java",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Nov 14, 2025",
              topics_en: ["Solving Practical Data Structure Problems"],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 2",
          week_ar: "الأسبوع الثاني",
          courses: [
            {
              title_en: "Career Planning & Skills",
              title_ar: "كيف تخطط لمسارك الوظيفي",
              track: "Career",
              instructor_en: "Ahmed Fathy",
              instructor_ar: "م. أحمد فتحي",
              date: "Nov 23, 2025",
              topics_en: [
                "Communication Skills",
                "Building Professional Relationships",
              ],
              difficulty: "Beginner",
            },
            {
              title_en: "Professional LinkedIn Profile",
              title_ar: "ملفك الاحترافي على لينكدإن",
              track: "Career",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: ["Creating Professional Profile using ChatGPT"],
              difficulty: "Beginner",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "Path Final Project: Tic Tac Toe",
              title_ar: "المشروع النهائي للمسار: لعبة X-O",
              track: "Python",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Nov 30, 2025",
              topics_en: ["Building Tic Tac Toe Game using Python"],
              difficulty: "Intermediate",
            },
          ],
        },
        {
          week_en: "Week 4",
          week_ar: "الأسبوع الرابع",
          courses: [
            {
              title_en: "Diploma Final: Python Expense Tracker",
              title_ar:
                "المشروع النهائي للدبلومة – مسار الأسس: Python Expenses Tracker",
              track: "Python",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Dec 7, 2025",
              topics_en: ["Building Complete Expense Tracker Application"],
              difficulty: "Advanced",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 3: Web Foundations",
      name_ar: "الشهر الثالث",
      weeks: [
        {
          week_en: "Week 1",
          week_ar: "الأسبوع الأول",
          courses: [
            {
              title_en: "HTML Fundamentals",
              title_ar: "أساسيات HTML",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Dec 15, 2025",
              topics_en: [
                "Text Elements",
                "Lists",
                "Images",
                "Links",
                "Page Structure",
              ],
              difficulty: "Beginner",
            },
            {
              title_en: "CSS Fundamentals",
              title_ar: "أساسيات CSS",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: [
                "Inline/Internal/External CSS",
                "Box Model",
                "Colors",
                "Positioning",
              ],
              difficulty: "Beginner",
            },
            {
              title_en: "CSS Layouts",
              title_ar: "CSS Layout",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: ["Float", "Flexbox", "CSS Grid"],
              difficulty: "Intermediate",
            },
          ],
        },
        {
          week_en: "Week 2",
          week_ar: "الأسبوع الثاني",
          courses: [
            {
              title_en: "Advanced CSS & SASS",
              title_ar: "Advanced CSS + SASS",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Dec 22, 2025",
              topics_en: [
                "Responsive Design",
                "Animations",
                "SASS",
                "Building Personal Website",
              ],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "CSS Responsiveness",
              title_ar: "CSS Responsiveness",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Dec 29, 2025",
              topics_en: [
                "Mobile First",
                "Media Queries",
                "Responsive Layouts",
              ],
              difficulty: "Intermediate",
            },
            {
              title_en: "CSS Animations",
              title_ar: "CSS Animation",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: ["CSS Animations", "Transitions", "Transform Effects"],
              difficulty: "Intermediate",
            },
          ],
        },
        {
          week_en: "Week 4",
          week_ar: "الأسبوع الرابع",
          courses: [
            {
              title_en: "HTML & CSS Projects",
              title_ar: "مشاريع HTML & CSS",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Jan 5, 2026",
              topics_en: [
                "Profile Card",
                "Personal Website",
                "Quran Tab Landing Page",
              ],
              difficulty: "Intermediate",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 4: Web & JavaScript Start",
      name_ar: "الشهر الرابع",
      weeks: [
        {
          week_en: "Week 1",
          week_ar: "الأسبوع الأول",
          courses: [
            {
              title_en: "HTML & CSS Final Project",
              title_ar: "المشروع النهائي: HTML & CSS",
              track: "HTML & CSS",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Feb 13, 2026",
              topics_en: ["Complete Website Project"],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "JavaScript Basics",
              title_ar: "JavaScript Basics",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Feb 27, 2026",
              topics_en: ["Variables", "Functions", "DOM Manipulation"],
              difficulty: "Beginner",
            },
          ],
        },
        {
          week_en: "Week 4",
          week_ar: "الأسبوع الرابع",
          courses: [
            {
              title_en: "JavaScript Intermediate",
              title_ar: "JavaScript Intermediate",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Mar 8, 2026",
              topics_en: ["Events", "Data Types", "Looping", "Control Flow"],
              difficulty: "Intermediate",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 5: JavaScript Mastery",
      name_ar: "الشهر الخامس",
      weeks: [
        {
          week_en: "Week 1",
          week_ar: "الأسبوع الأول",
          courses: [
            {
              title_en: "JavaScript Projects I",
              title_ar: "مشاريع JavaScript I",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Mar 16, 2026",
              topics_en: [
                "Age Calculator",
                "Calculator App",
                "Tic Tac Toe Game",
              ],
              difficulty: "Intermediate",
            },
          ],
        },
        {
          week_en: "Week 2",
          week_ar: "الأسبوع الثاني",
          courses: [
            {
              title_en: "Advanced JavaScript",
              title_ar: "Advanced JavaScript",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Mar 23, 2026",
              topics_en: ["OOP", "ES Modules", "Security", "Flow Control"],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "JavaScript Projects II",
              title_ar: "مشاريع JavaScript II",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Mar 30, 2026",
              topics_en: ["QuranTab", "GitHub Search", "Todo App"],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 4",
          week_ar: "الأسبوع الرابع",
          courses: [
            {
              title_en: "Final Project: Todo App",
              title_ar: "المشروع النهائي: Todo App",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Apr 6, 2026",
              topics_en: ["Todo App using Figma Design"],
              difficulty: "Advanced",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 6: React & JavaScript Final",
      name_ar: "الشهر السادس",
      weeks: [
        {
          week_en: "Week 1",
          week_ar: "الأسبوع الأول",
          courses: [
            {
              title_en: "JavaScript Path Final: Note App",
              title_ar: "المشروع النهائي للدبلومة – مسار جافاسكريبت: Note App",
              track: "JavaScript",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Apr 14, 2026",
              topics_en: ["Building Complete Note Taking Application"],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "ReactJS Basics",
              title_ar: "ReactJS Basics",
              track: "React",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Apr 28, 2026",
              topics_en: ["Components", "State Management", "Interactivity"],
              difficulty: "Beginner",
            },
          ],
        },
        {
          week_en: "Week 4",
          week_ar: "الأسبوع الرابع",
          courses: [
            {
              title_en: "Advanced ReactJS",
              title_ar: "Advanced ReactJS",
              track: "React",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "May 7, 2026",
              topics_en: [
                "Reducers",
                "Context API",
                "Routing",
                "API Integration",
              ],
              difficulty: "Advanced",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 7: React Projects",
      name_ar: "الشهر السابع",
      weeks: [
        {
          week_en: "Week 2",
          week_ar: "الأسبوع الثاني",
          courses: [
            {
              title_en: "React Projects",
              title_ar: "مشاريع React JS",
              track: "React",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "TBD",
              topics_en: ["News Feed Application", "Around the World Project"],
              difficulty: "Advanced",
            },
          ],
        },
        {
          week_en: "Week 3",
          week_ar: "الأسبوع الثالث",
          courses: [
            {
              title_en: "React Path Final: Blog Project",
              title_ar: "المشروع النهائي للمسار: Blog using Figma",
              track: "React",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "May 28, 2026",
              topics_en: ["Building Blog Application from Figma Design"],
              difficulty: "Advanced",
            },
          ],
        },
      ],
    },
    {
      name_en: "Month 8: Graduation",
      name_ar: "الشهر الثامن",
      weeks: [
        {
          week_en: "Graduation",
          week_ar: "التخرج",
          courses: [
            {
              title_en: "Diploma Final Project: E-Commerce",
              title_ar: "مشروع E-commerce باستخدام React",
              track: "React",
              instructor_en: "TBD",
              instructor_ar: "قريباً",
              date: "Jun 10, 2026",
              topics_en: [
                "Building Complete E-commerce Application with React",
              ],
              difficulty: "Advanced",
            },
          ],
        },
      ],
    },
  ],
  tracks: [
    { name_en: "Python", name_ar: "بايثون", color: "#f4b942", icon: "🐍" },
    {
      name_en: "HTML & CSS",
      name_ar: "HTML & CSS",
      color: "#5b9df9",
      icon: "🎨",
    },
    {
      name_en: "JavaScript",
      name_ar: "جافاسكريبت",
      color: "#f7a238",
      icon: "⚡",
    },
    { name_en: "React", name_ar: "React", color: "#61dafb", icon: "⚛️" },
    { name_en: "Java", name_ar: "جافا", color: "#ed8936", icon: "☕" },
    {
      name_en: "AI",
      name_ar: "الذكاء الاصطناعي",
      color: "#9f7aea",
      icon: "🤖",
    },
    { name_en: "Tools", name_ar: "الأدوات", color: "#48bb78", icon: "🛠️" },
    {
      name_en: "Career",
      name_ar: "المسار الوظيفي",
      color: "#ec4899",
      icon: "💼",
    },
  ],
};

// State Management (using JavaScript variables instead of localStorage)
let appState = {
  language: "ar",
  theme: "dark",
  completedCourses: [],
  filters: {
    tracks: [],
    difficulty: [],
  },
  sidebarOpen: true,
  progressOpen: false,
  searchQuery: "",
};

// Persist appState to localStorage
function saveAppState() {
  try {
    localStorage.setItem("appState", JSON.stringify(appState));
  } catch (e) {
    console.error("Failed to save appState:", e);
  }
}

function loadAppState() {
  try {
    const stored = localStorage.getItem("appState");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge stored state into default appState
      Object.assign(appState, parsed);
    }
  } catch (e) {
    console.error("Failed to load appState:", e);
  }
}

// Initialize App
function initApp() {
  // Load persisted state first
  loadAppState();

  // Set initial theme (may be overridden by loaded state)
  document.documentElement.setAttribute("data-color-scheme", appState.theme);

  // Handle initial responsive state
  if (window.innerWidth <= 1024) {
    appState.sidebarOpen = false;
  }

  // Render all components reflecting loaded state
  renderSidebar();
  renderContent();
  renderProgressDashboard();
  renderFilterPanel();
  updateProgress();

  // Apply initial UI state
  renderSidebarState();
  renderProgressState();

  // Setup event listeners
  setupEventListeners();

  // Update language based on loaded state
  updateLanguage();

  // Sync search input with loaded state
  if (appState.searchQuery) {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = appState.searchQuery;
    }
  }

  // Initialize Smooth Scroll (Lenis)
  initSmoothScroll();
}

// Smooth Scroll & Parallax
function initSmoothScroll() {
  if (typeof Lenis === 'undefined') return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Parallax Effect
  const shapes = document.querySelectorAll('.parallax-shape');
  
  lenis.on('scroll', ({ scroll }) => {
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.1; // Different speed for each shape
      const yPos = scroll * speed;
      shape.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Helper to safely add listener
  const addListener = (id, event, handler) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(event, handler);
    }
  };

  // Menu button
  addListener("menuBtn", "click", toggleSidebar);

  // Language toggle
  addListener("langBtn", "click", toggleLanguage);

  // Theme toggle
  addListener("themeBtn", "click", toggleTheme);

  // Filter button
  addListener("filterBtn", "click", toggleFilterPanel);
  addListener("filterCloseBtn", "click", toggleFilterPanel);

  // Search
  addListener("searchInput", "input", handleSearch);

  // Reset progress
  addListener("resetProgressBtn", "click", resetProgress);

  // Clear filters
  addListener("clearFiltersBtn", "click", clearFilters);

  // Progress toggle (mobile)
  addListener("progressBtn", "click", toggleProgress);

  // Backdrop click
  addListener("backdrop", "click", closeAllOverlays);

  // Window resize handler
  window.addEventListener("resize", handleResize);
}

// Toggle Sidebar
function toggleSidebar() {
  appState.sidebarOpen = !appState.sidebarOpen;
  renderSidebarState();
  saveAppState();
}

// Toggle Progress (Mobile)
function toggleProgress() {
  appState.progressOpen = !appState.progressOpen;
  renderProgressState();
}

// Close All Overlays
// Close All Overlays
function closeAllOverlays() {
  const backdrop = document.getElementById("backdrop");

  if (window.innerWidth <= 1024 && appState.sidebarOpen) {
    appState.sidebarOpen = false;
    renderSidebarState();
  }
  if (window.innerWidth <= 1400 && appState.progressOpen) {
    appState.progressOpen = false;
    renderProgressState();
  }

  // Close filter panel if open
  const filterPanel = document.getElementById("filterPanel");
  if (filterPanel && filterPanel.classList.contains("open")) {
    filterPanel.classList.remove("open");
    // Only remove backdrop if no other overlays are open
    if (!appState.sidebarOpen && !appState.progressOpen) {
      backdrop.classList.remove("active");
    }
  }
}

// Handle Resize
function handleResize() {
  // Reset states if moving between breakpoints
  if (window.innerWidth > 1024 && !appState.sidebarOpen) {
    // If moving to desktop, ensure sidebar is visible if it was closed on mobile
    // Or keep it closed? Let's keep it consistent with state
    renderSidebarState();
  }
  if (window.innerWidth > 1400) {
    appState.progressOpen = false; // Reset mobile progress state
    renderProgressState();
  }
}

// Render Sidebar State
function renderSidebarState() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const backdrop = document.getElementById("backdrop");
  const isMobile = window.innerWidth <= 1024;

  if (isMobile) {
    // Mobile Logic
    if (appState.sidebarOpen) {
      sidebar.classList.add("active");
      backdrop.classList.add("active");
    } else {
      sidebar.classList.remove("active");
      if (!appState.progressOpen) {
        backdrop.classList.remove("active");
      }
    }
    // Cleanup desktop classes
    sidebar.classList.remove("hidden");
    mainContent.classList.remove("sidebar-hidden");
  } else {
    // Desktop Logic
    if (appState.sidebarOpen) {
      sidebar.classList.remove("hidden");
      mainContent.classList.remove("sidebar-hidden");
    } else {
      sidebar.classList.add("hidden");
      mainContent.classList.add("sidebar-hidden");
    }
    // Cleanup mobile classes
    sidebar.classList.remove("active");
    if (!appState.progressOpen) backdrop.classList.remove("active");
  }
}

// Render Progress State
function renderProgressState() {
  const dashboard = document.getElementById("progressDashboard");
  const backdrop = document.getElementById("backdrop");
  const isMobile = window.innerWidth <= 1400;

  if (isMobile) {
    if (appState.progressOpen) {
      dashboard.classList.add("active");
      backdrop.classList.add("active");
    } else {
      dashboard.classList.remove("active");
      if (!appState.sidebarOpen || window.innerWidth > 1024) {
        backdrop.classList.remove("active");
      }
    }
  } else {
    dashboard.classList.remove("active");
    if (!appState.sidebarOpen || window.innerWidth > 1024) {
      backdrop.classList.remove("active");
    }
  }
}

// Toggle Language
function toggleLanguage() {
  appState.language = appState.language === "en" ? "ar" : "en";
  updateLanguage();
  // Persist language change
  saveAppState();
}

function updateLanguage() {
  const isArabic = appState.language === "ar";

  // Update HTML direction
  document.documentElement.setAttribute("lang", appState.language);
  document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");

  // Update button text
  document.querySelector(".lang-text").textContent = isArabic ? "EN" : "AR";

  // Update all translatable elements
  document.querySelectorAll("[data-en]").forEach((el) => {
    const text = isArabic
      ? el.getAttribute("data-ar")
      : el.getAttribute("data-en");
    el.textContent = text;
  });

  // Update placeholders
  document.querySelectorAll("[data-placeholder-en]").forEach((el) => {
    const placeholder = isArabic
      ? el.getAttribute("data-placeholder-ar")
      : el.getAttribute("data-placeholder-en");
    el.setAttribute("placeholder", placeholder);
  });

  // Re-render content
  renderContent();
  renderSidebar();
  renderProgressDashboard();
}

// Toggle Theme
function toggleTheme() {
  appState.theme = appState.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-color-scheme", appState.theme);
  // Persist theme change
  saveAppState();
}

// Toggle Filter Panel
function toggleFilterPanel() {
  const panel = document.getElementById("filterPanel");
  const backdrop = document.getElementById("backdrop");
  panel.classList.toggle("open");

  if (panel.classList.contains("open")) {
    backdrop.classList.add("active");
  } else {
    // Only remove backdrop if no other overlays are open
    // Check if sidebar or progress is open on mobile
    const isMobileSidebarOpen =
      window.innerWidth <= 1024 && appState.sidebarOpen;
    const isMobileProgressOpen =
      window.innerWidth <= 1400 && appState.progressOpen;

    if (!isMobileSidebarOpen && !isMobileProgressOpen) {
      backdrop.classList.remove("active");
    }
  }
}

// Render Sidebar
function renderSidebar() {
  const nav = document.getElementById("sidebarNav");
  const isArabic = appState.language === "ar";

  nav.innerHTML = coursesData.months
    .map((month, index) => {
      const progress = calculateMonthProgress(index);
      const circumference = 2 * Math.PI * 14;
      const offset = circumference - (progress / 100) * circumference;

      return `
      <div class="sidebar__nav-item">
        <button class="sidebar__month-btn" data-month="${index}">
          <span>${isArabic ? month.name_ar : month.name_en}</span>
          <div class="sidebar__month-progress">
            <svg viewBox="0 0 32 32">
              <circle class="month-progress-bg" cx="16" cy="16" r="14"></circle>
              <circle class="month-progress-fill" cx="16" cy="16" r="14"
                style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};"></circle>
            </svg>
          </div>
        </button>
      </div>
    `;
    })
    .join("");

  // Add click listeners
  nav.querySelectorAll(".sidebar__month-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const monthIndex = parseInt(e.currentTarget.getAttribute("data-month"));
      scrollToMonth(monthIndex);
    });
  });
}

// Render Content
function renderContent() {
  const wrapper = document.getElementById("contentWrapper");
  const isArabic = appState.language === "ar";

  const filteredData = getFilteredCourses();

  // Calculate total courses found
  let totalCourses = 0;
  filteredData.forEach(month => {
    month.weeks.forEach(week => {
      totalCourses += week.courses.length;
    });
  });

  // Update search count display
  const searchCount = document.getElementById("searchCount");
  if (appState.searchQuery) {
    searchCount.textContent = `${totalCourses} ${
      isArabic ? "نتيجة" : "results"
    }`;
  } else {
    searchCount.textContent = "";
  }

  if (filteredData.length === 0) {
    wrapper.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--color-text-secondary);">
        <h2 style="font-size: var(--font-size-2xl); margin-bottom: 16px;">${
          isArabic ? "لم يتم العثور على نتائج" : "No results found"
        }</h2>
        <p>${
          isArabic
            ? "جرب تغيير الفلاتر أو البحث"
            : "Try changing filters or search"
        }</p>
      </div>
    `;
    return;
  }

  wrapper.innerHTML = filteredData
    .map((month, monthIndex) => {
      return `
      <section class="month-section" id="month-${monthIndex}">
        <div class="month-section__header">
          <h2 class="month-section__title">${
            isArabic ? month.name_ar : month.name_en
          }</h2>
        </div>
        ${month.weeks
          .map((week, weekIndex) => {
            if (week.courses.length === 0) return "";
            return `
            <div class="week-section">
              <h3 class="week-section__title">${
                isArabic ? week.week_ar : week.week_en
              }</h3>
              <div class="course-grid">
                ${week.courses
                  .map((course) =>
                    renderCourseCard(course, monthIndex, weekIndex)
                  )
                  .join("")}
              </div>
            </div>
          `;
          })
          .join("")}
      </section>
    `;
    })
    .join("");

  // Add event listeners to course cards
  document.querySelectorAll(".course-card").forEach((card) => {
    card.addEventListener("click", handleCourseClick);
  });
}

// Render Course Card
function renderCourseCard(course, monthIndex, weekIndex) {
  const isArabic = appState.language === "ar";
  const track = coursesData.tracks.find((t) => t.name_en === course.track);
  const courseId = `${monthIndex}-${weekIndex}-${course.title_en}`;
  const isCompleted = appState.completedCourses.includes(courseId);

  const initials = course.instructor_en
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  // Topics logic
  const topics = course.topics_en || [];
  const visibleTopics = topics.slice(0, 3);
  const hiddenTopics = topics.slice(3);
  const hasHidden = hiddenTopics.length > 0;

  return `
    <div class="course-card ${
      isCompleted ? "completed" : ""
    }" data-course-id="${courseId}">
      <div class="course-card__track-bar" style="background: ${
        track.color
      };"></div>
      <div class="course-card__content">
        <div class="course-card__header">
          <div class="course-card__avatar">${initials}</div>
          <div class="course-card__badges">
            ${
              course.difficulty
                ? `<span class="course-card__badge badge-difficulty">${
                    isArabic
                      ? getDifficultyArabic(course.difficulty)
                      : course.difficulty
                  }</span>`
                : ""
            }
          </div>
        </div>
        <h3 class="course-card__title">${
          isArabic ? course.title_ar : course.title_en
        }</h3>
        <p class="course-card__instructor">${
          isArabic ? course.instructor_ar : course.instructor_en
        }</p>
        <p class="course-card__date">📅 ${course.date}</p>
        ${
          topics.length > 0
            ? `
          <div class="course-card__topics">
            <p class="course-card__topics-title">${
              isArabic ? "المواضيع" : "Topics"
            }:</p>
            <ul class="course-card__topics-list">
              ${visibleTopics
                .map((topic) => `<li>${topic}</li>`)
                .join("")}
              ${
                hasHidden
                  ? hiddenTopics
                      .map((topic) => `<li class="topic-extra">${topic}</li>`)
                      .join("")
                  : ""
              }
              ${
                hasHidden
                  ? `<li class="topic-more-count">${
                      isArabic
                        ? `+${hiddenTopics.length} أخرى`
                        : `+${hiddenTopics.length} more`
                    }</li>`
                  : ""
              }
            </ul>
          </div>
        `
            : ""
        }
        <div class="course-card__footer">
          <button class="btn ${
            isCompleted ? "btn--completed" : "btn--primary"
          }" onclick="event.stopPropagation(); toggleCourse('${courseId}')">
            ${
              isCompleted
                ? isArabic
                  ? "✓ مكتمل"
                  : "✓ Completed"
                : isArabic
                ? "تم بحمد الله"
                : "Mark Complete"
            }
          </button>
        </div>
      </div>
    </div>
  `;
}

function getDifficultyArabic(difficulty) {
  const map = {
    Beginner: "مبتدئ",
    Intermediate: "متوسط",
    Advanced: "متقدم",
  };
  return map[difficulty] || difficulty;
}

// Handle Course Click
function handleCourseClick(e) {
  // Prevent expansion if clicking the button (handled by stopPropagation in inline onclick, but good to be safe)
  if (e.target.tagName === "BUTTON" || e.target.closest("button")) return;
  
  const card = e.currentTarget;
  // Toggle expanded class
  card.classList.toggle("expanded");
}

// Toggle Course Completion
function toggleCourse(courseId) {
  const index = appState.completedCourses.indexOf(courseId);
  if (index > -1) {
    appState.completedCourses.splice(index, 1);
  } else {
    appState.completedCourses.push(courseId);
  }

  // Persist change
  saveAppState();

  renderContent();
  updateProgress();
  renderSidebar();
  renderProgressDashboard();
}

// Render Progress Dashboard
function renderProgressDashboard() {
  const isArabic = appState.language === "ar";

  // Overall progress
  const overallPercent = calculateOverallProgress();
  updateCircularProgress("overallProgress", overallPercent);
  document.getElementById("overallPercent").textContent = `${overallPercent}%`;

  // Track progress
  const trackProgressContainer = document.getElementById("trackProgress");
  trackProgressContainer.innerHTML = coursesData.tracks
    .map((track) => {
      const percent = calculateTrackProgress(track.name_en);
      return `
      <div class="track-progress__item">
        <div class="track-progress__info">
          <span class="track-progress__icon">${track.icon}</span>
          <span class="track-progress__name">${
            isArabic ? track.name_ar : track.name_en
          }</span>
        </div>
        <span class="track-progress__percent">${percent}%</span>
      </div>
    `;
    })
    .join("");

  // Achievements
  renderAchievements();

  // Next course
  renderNextCourse();
}

function renderAchievements() {
  const isArabic = appState.language === "ar";
  const achievements = [
    { icon: "🎯", text: isArabic ? "البداية" : "Started", threshold: 1 },
    { icon: "🔥", text: isArabic ? "نشط" : "Active", threshold: 5 },
    { icon: "⭐", text: isArabic ? "نجم" : "Star", threshold: 10 },
    { icon: "🏆", text: isArabic ? "بطل" : "Champion", threshold: 20 },
    { icon: "👑", text: isArabic ? "ملك" : "Master", threshold: 30 },
    { icon: "🎓", text: isArabic ? "خريج" : "Graduate", threshold: 40 },
  ];

  const completed = appState.completedCourses.length;
  const achievementsList = document.getElementById("achievementsList");

  achievementsList.innerHTML = achievements
    .map((ach) => {
      const unlocked = completed >= ach.threshold;
      return `
      <div class="achievement-badge ${unlocked ? "unlocked" : ""}">
        <div class="achievement-badge__icon">${ach.icon}</div>
        <div class="achievement-badge__text">${ach.text}</div>
      </div>
    `;
    })
    .join("");
}

function renderNextCourse() {
  const isArabic = appState.language === "ar";
  const nextCourse = getNextCourse();
  const nextCourseContent = document.getElementById("nextCourseContent");

  if (!nextCourse) {
    nextCourseContent.innerHTML = `<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">${
      isArabic ? "تم بحمد الله! 🎉" : "All courses completed! 🎉"
    }</p>`;
    return;
  }

  const track = coursesData.tracks.find((t) => t.name_en === nextCourse.track);

  nextCourseContent.innerHTML = `
    <div class="next-course__card">
      <h4 class="next-course__card-title">${
        isArabic ? nextCourse.title_ar : nextCourse.title_en
      }</h4>
      <p class="next-course__card-track">${track.icon} ${
    isArabic ? track.name_ar : track.name_en
  }</p>
    </div>
  `;
}

function getNextCourse() {
  for (const month of coursesData.months) {
    for (const week of month.weeks) {
      for (const course of week.courses) {
        const monthIndex = coursesData.months.indexOf(month);
        const weekIndex = month.weeks.indexOf(week);
        const courseId = `${monthIndex}-${weekIndex}-${course.title_en}`;
        if (!appState.completedCourses.includes(courseId)) {
          return course;
        }
      }
    }
  }
  return null;
}

// Render Filter Panel
function renderFilterPanel() {
  const isArabic = appState.language === "ar";
  const trackFilters = document.getElementById("trackFilters");

  trackFilters.innerHTML = coursesData.tracks
    .map((track) => {
      const isActive = appState.filters.tracks.includes(track.name_en);
      return `
      <button class="filter-pill ${isActive ? "active" : ""}" data-track="${
        track.name_en
      }">
        <span>${track.icon} ${isArabic ? track.name_ar : track.name_en}</span>
      </button>
    `;
    })
    .join("");

  // Add event listeners
  trackFilters.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      const track = e.currentTarget.getAttribute("data-track");
      toggleFilter("tracks", track);
    });
  });

  // Difficulty filters
  document
    .querySelectorAll("#difficultyFilters .filter-pill")
    .forEach((pill) => {
      pill.addEventListener("click", (e) => {
        const difficulty = e.currentTarget.getAttribute("data-difficulty");
        toggleFilter("difficulty", difficulty);
      });
    });

  updateFilterBadge();
}

function toggleFilter(type, value) {
  const index = appState.filters[type].indexOf(value);
  if (index > -1) {
    appState.filters[type].splice(index, 1);
  } else {
    appState.filters[type].push(value);
  }

  // Persist filter changes
  saveAppState();

  renderFilterPanel();
  renderContent();
  updateFilterBadge();
}

function clearFilters() {
  appState.filters.tracks = [];
  appState.filters.difficulty = [];
  renderFilterPanel();
  renderContent();
  updateFilterBadge();
}

function updateFilterBadge() {
  const count =
    appState.filters.tracks.length + appState.filters.difficulty.length;
  const badge = document.getElementById("filterBadge");
  badge.textContent = count;
  if (count > 0) {
    badge.classList.add("active");
  } else {
    badge.classList.remove("active");
  }
}

// Get Filtered Courses
function getFilteredCourses() {
  let filtered = JSON.parse(JSON.stringify(coursesData.months));

  // Apply track filter
  if (appState.filters.tracks.length > 0) {
    filtered = filtered.map((month) => ({
      ...month,
      weeks: month.weeks.map((week) => ({
        ...week,
        courses: week.courses.filter((course) =>
          appState.filters.tracks.includes(course.track)
        ),
      })),
    }));
  }

  // Apply difficulty filter
  if (appState.filters.difficulty.length > 0) {
    filtered = filtered.map((month) => ({
      ...month,
      weeks: month.weeks.map((week) => ({
        ...week,
        courses: week.courses.filter((course) =>
          appState.filters.difficulty.includes(course.difficulty)
        ),
      })),
    }));
  }

  // Apply Search Filter
  if (appState.searchQuery) {
    const query = appState.searchQuery;
    filtered = filtered.map((month) => ({
      ...month,
      weeks: month.weeks.map((week) => ({
        ...week,
        courses: week.courses.filter((course) => {
          const searchableText = [
            course.title_en,
            course.title_ar,
            course.instructor_en,
            course.instructor_ar,
            ...(course.topics_en || []),
          ]
            .join(" ")
            .toLowerCase();
          return searchableText.includes(query);
        }),
      })),
    }));
  }

  // Filter out empty weeks and months
  filtered = filtered.map(month => ({
    ...month,
    weeks: month.weeks.filter(week => week.courses.length > 0)
  })).filter(month => month.weeks.length > 0);

  return filtered;
}

// Handle Search
function handleSearch(e) {
  appState.searchQuery = e.target.value.toLowerCase().trim();
  renderContent();
  
  // Update search count (optional, can be done in renderContent or here)
  // But since renderContent re-renders everything, we might want to update the count separately or let renderContent handle it.
  // Actually, let's let renderContent handle the "No results" view, but we might want to update the count badge if we had one.
  // The original code updated #searchCount. Let's keep that behavior but based on filtered results.
  // However, getFilteredCourses is called inside renderContent.
  // Let's update the search count AFTER renderContent is called, or inside it.
  // For simplicity, let's just trigger renderContent, and we'll update the count display inside renderContent or a separate helper called by it.
  // Wait, the original code updated #searchCount. Let's add a helper to update that count.
}

// Calculate Progress
function calculateOverallProgress() {
  let total = 0;
  coursesData.months.forEach((month) => {
    month.weeks.forEach((week) => {
      total += week.courses.length;
    });
  });

  const completed = appState.completedCourses.length;
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function calculateMonthProgress(monthIndex) {
  const month = coursesData.months[monthIndex];
  let total = 0;
  let completed = 0;

  month.weeks.forEach((week, weekIndex) => {
    week.courses.forEach((course) => {
      total++;
      const courseId = `${monthIndex}-${weekIndex}-${course.title_en}`;
      if (appState.completedCourses.includes(courseId)) {
        completed++;
      }
    });
  });

  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function calculateTrackProgress(trackName) {
  let total = 0;
  let completed = 0;

  coursesData.months.forEach((month, monthIndex) => {
    month.weeks.forEach((week, weekIndex) => {
      week.courses.forEach((course) => {
        if (course.track === trackName) {
          total++;
          const courseId = `${monthIndex}-${weekIndex}-${course.title_en}`;
          if (appState.completedCourses.includes(courseId)) {
            completed++;
          }
        }
      });
    });
  });

  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function updateCircularProgress(elementId, percent) {
  const circle = document.getElementById(elementId);
  if (!circle) return;

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = offset;
}

function updateProgress() {
  // Update overall progress
  const overallPercent = calculateOverallProgress();
  updateCircularProgress("overallProgress", overallPercent);
  document.getElementById("overallPercent").textContent = `${overallPercent}%`;

  // Update floating progress
  updateCircularProgress("floatingProgressFill", overallPercent);
  document.getElementById(
    "floatingProgressText"
  ).textContent = `${overallPercent}%`;

  // Floating progress circle calculation
  const floatingCircle = document.getElementById("floatingProgressFill");
  const floatingRadius = 26;
  const floatingCircumference = 2 * Math.PI * floatingRadius;
  const floatingOffset =
    floatingCircumference - (overallPercent / 100) * floatingCircumference;
  floatingCircle.style.strokeDasharray = floatingCircumference;
  floatingCircle.style.strokeDashoffset = floatingOffset;
}

// Reset Progress
function resetProgress() {
  const isArabic = appState.language === "ar";
  const confirmMsg = isArabic
    ? "هل أنت متأكد من إعادة تعيين كل التقدم؟"
    : "Are you sure you want to reset all progress?";

  if (confirm(confirmMsg)) {
    appState.completedCourses = [];
    // Persist reset
    saveAppState();
    renderContent();
    updateProgress();
    renderSidebar();
    renderProgressDashboard();
  }
}

// Scroll to Month
function scrollToMonth(monthIndex) {
  const section = document.getElementById(`month-${monthIndex}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Initialize on load
window.addEventListener("DOMContentLoaded", initApp);
