// PRODUCTION GRADE CINEMATIC DATASET STORE FOR SAVEAN MOVIES
const MOVIE_DATABASE = [
    {
        id: "m1",
        title: "Chronicles of Savean",
        type: "original",
        category: "Sci-Fi",
        year: 2026,
        rating: 4.9,
        duration: "2h 45m",
        age: "16+",
        description: "In a dystopian universe ruled by digital shadows, a rogue alliance fights to salvage the last remaining human consciousness inside the core engines of SAVEAN.",
        backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500",
        director: "Marcus Vance",
        cast: "Elena Rostova, Christian Bale, John Boyega",
        trending: true,
        popular: true,
        topRated: true,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: "m2",
        title: "Apex Horizon",
        type: "movie",
        category: "Action",
        year: 2026,
        rating: 4.7,
        duration: "2h 15m",
        age: "13+",
        description: "A supersonic fighter pilot stumbles onto an extraterrestrial defensive grid operating quietly along the upper stratosphere.",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
        director: "Kathryn Bigelow",
        cast: "Tom Hardy, Florence Pugh, Michael B. Jordan",
        trending: true,
        popular: true,
        topRated: false,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        id: "m3",
        title: "The Midnight Protocol",
        type: "movie",
        category: "Drama",
        year: 2025,
        rating: 4.8,
        duration: "1h 58m",
        age: "18+",
        description: "A high-stakes political drama tracking the global fallout after a whistle-blower exposes automated AI defense weapons parameters.",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
        director: "Christopher Nolan",
        cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
        trending: true,
        popular: false,
        topRated: true,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
        id: "m4",
        title: "Shadows of Kyoto",
        type: "original",
        category: "Anime",
        year: 2026,
        rating: 4.9,
        duration: "10 Episodes",
        age: "16+",
        description: "An ancient cybernetic samurai awakens in modern-day neon cyberpunk Kyoto to exact vengeance against corporate dynasties.",
        backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600",
        poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500",
        director: "Shinichiro Watanabe",
        cast: "Takeru Satoh, Nana Komatsu",
        trending: false,
        popular: true,
        topRated: true,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        id: "m5",
        title: "Cyber Resonance",
        type: "tv",
        category: "Sci-Fi",
        year: 2025,
        rating: 4.5,
        duration: "3 Seasons",
        age: "16+",
        description: "Humanity achieves mechanical neurological integration, but a anomalous signal converts millions into a single interconnected mindhive.",
        backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600",
        poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
        director: "Lana Wachowski",
        cast: "Keanu Reeves, Carrie-Anne Moss",
        trending: true,
        popular: true,
        topRated: false,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
        id: "m6",
        title: "The Abyss Dweller",
        type: "movie",
        category: "Horror",
        year: 2024,
        rating: 4.2,
        duration: "1h 45m",
        age: "18+",
        description: "A deep sea saturation diving expedition triggers seismic shifts, releasing prehistoric predatory terrors into the sub-ocean trench.",
        backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
        poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500",
        director: "James Wan",
        cast: "Vera Farmiga, Patrick Wilson",
        trending: false,
        popular: false,
        topRated: false,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },
    {
        id: "m7",
        title: "Neon Suburbia",
        type: "movie",
        category: "Comedy",
        year: 2026,
        rating: 4.4,
        duration: "2h 02m",
        age: "13+",
        description: "Two working class parents buy an advanced smart home system that accidentally traps them inside an intense gamified neighborhood war.",
        backdrop: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
        director: "Taika Waititi",
        cast: "Ryan Reynolds, Awkwafina",
        trending: true,
        popular: false,
        topRated: false,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
        id: "m8",
        title: "The Glitch In Us",
        type: "original",
        category: "Drama",
        year: 2026,
        rating: 4.6,
        duration: "1h 50m",
        age: "13+",
        description: "Two star-crossed researchers mapping human memory arrays discover their entire romance is simulated software code.",
        backdrop: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
        poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500",
        director: "Denis Villeneuve",
        cast: "Timothée Chalamet, Zendaya",
        trending: false,
        popular: true,
        topRated: true,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
    }
];

// STATE STATE HOOKS MANAGEMENT
let currentProfile = "Alex";
let watchlist = JSON.parse(localStorage.getItem("savean_watchlist")) || [];
let watchHistory = JSON.parse(localStorage.getItem("savean_history")) || [];
let activeSection = "homeView";
let activeHeroIndex = 0;
let heroRotationInterval = null;
let searchHistory = ["Savean", "Action 2026", "Nolan"];

// RUN TIME SYSTEM BOOTSTRAPPER
document.addEventListener("DOMContentLoaded", () => {
    initProfiles();
    initNavigation();
    initHeroBanner();
    generateContentRows();
    initSearchEngine();
    initModalEvents();
    initCustomVideoPlayer();
    initExtraFeatures();
    renderWatchlist();
    renderHistory();
});

// PROFILE PLATFORM COMPONENT
function initProfiles() {
    const profileGrid = document.getElementById("profileGrid");
    const profileOverlay = document.getElementById("profileOverlay");
    
    profileGrid.querySelectorAll(".profile-card:not(.add-profile)").forEach(card => {
        card.addEventListener("click", () => {
            currentProfile = card.getAttribute("data-user");
            document.getElementById("currentProfileName").innerText = currentProfile;
            
            const avatarColor = card.querySelector(".avatar").style.background;
            document.getElementById("currentAvatarHeader").style.background = avatarColor;
            
            profileOverlay.classList.add("hidden");
            showNotification(`Welcome back, ${currentProfile}!`);
            startHeroRotation();
        });
    });

    document.getElementById("profileTrigger").addEventListener("click", () => {
        profileOverlay.classList.remove("hidden");
        stopHeroRotation();
    });
}

// ROUTING NAVIGATION LAYER
function initNavigation() {
    const links = document.querySelectorAll(".nav-link, .mobile-link");
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target");
            if(!target) return;

            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Sync structural links across mobile/desktop layouts
            document.querySelectorAll(`[data-target="${target}"]`).forEach(l => l.classList.add("active"));

            document.querySelectorAll(".view-section").forEach(sec => {
                sec.classList.add("hidden");
                sec.classList.remove("active");
            });

            const targetSection = document.getElementById(target);
            targetSection.classList.remove("hidden");
            setTimeout(() => targetSection.classList.add("active"), 50);
            
            activeSection = target;
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if(target === "moviesView") renderGrid("moviesGrid", MOVIE_DATABASE.filter(m => m.type === "movie"));
            if(target === "tvView") renderGrid("tvGrid", MOVIE_DATABASE.filter(m => m.type === "tv"));
            if(target === "originalsView") renderGrid("originalsGrid", MOVIE_DATABASE.filter(m => m.type === "original"));
            if(target === "trendingView") renderGrid("trendingGrid", MOVIE_DATABASE.filter(m => m.trending));
        });
    });

    // Sidebar expand/collapse handler toggles
    const sidebar = document.getElementById("mainSidebar");
    document.getElementById("toggleSidebar").addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
}

// TOAST NOTIFIER HANDLER
function showNotification(message) {
    const container = document.getElementById("notificationContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fas fa-info-circle" style="color:var(--color-accent)"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// HERO CAROUSEL ENGINE ELEMENTS
function initHeroBanner() {
    updateHeroDisplay();
    
    const indicators = document.getElementById("heroIndicators");
    indicators.innerHTML = "";
    MOVIE_DATABASE.slice(0, 4).forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `indicator-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener("click", () => {
            activeHeroIndex = idx;
            updateHeroDisplay();
        });
        indicators.appendChild(dot);
    });
}

function startHeroRotation() {
    if(heroRotationInterval) clearInterval(heroRotationInterval);
    heroRotationInterval = setInterval(() => {
        activeHeroIndex = (activeHeroIndex + 1) % 4;
        updateHeroDisplay();
    }, 8000);
}

function stopHeroRotation() {
    if(heroRotationInterval) clearInterval(heroRotationInterval);
}

function updateHeroDisplay() {
    const hero = MOVIE_DATABASE[activeHeroIndex];
    if(!hero) return;

    document.getElementById("heroImage").style.backgroundImage = `url('${hero.backdrop}')`;
    document.getElementById("heroTitle").innerText = hero.title;
    document.getElementById("heroDesc").innerText = hero.description;
    document.getElementById("heroYear").innerText = hero.year;
    document.getElementById("heroAge").innerText = hero.age;
    document.getElementById("heroDuration").innerText = hero.duration;
    document.getElementById("heroGenre").innerText = hero.category;

    // Reset indicator active nodes
    const dots = document.querySelectorAll(".indicator-dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeHeroIndex);
    });

    // Hook core buttons explicitly to active hero database instance
    const playBtn = document.getElementById("heroPlayBtn");
    const trailerBtn = document.getElementById("heroTrailerBtn");
    const listBtn = document.getElementById("heroMyListBtn");

    playBtn.onclick = () => launchVideoPlayer(hero);
    trailerBtn.onclick = () => launchVideoPlayer(hero, true);
    
    const isSaved = watchlist.some(m => m.id === hero.id);
    listBtn.innerHTML = isSaved ? `<i class="fas fa-check" style="color:var(--color-accent)"></i>` : `<i class="fas fa-plus"></i>`;
    listBtn.onclick = () => {
        toggleWatchlist(hero);
        updateHeroDisplay();
    };
}

// CONTENT ROWS LAYOUT MATRIX COMPILER
function generateContentRows() {
    const rootRows = document.getElementById("dynamicRows");
    rootRows.innerHTML = "";

    // Generate Top 10 Special UI Row Structure
    const top10Slider = document.getElementById("top10Slider");
    top10Slider.innerHTML = "";
    MOVIE_DATABASE.slice(0, 8).forEach((movie, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "top10-card-wrapper";
        wrapper.innerHTML = `
            <div class="rank-number">${index + 1}</div>
            <div class="movie-card" data-id="${movie.id}">
                <img src="${movie.poster}" class="skeleton" onload="this.classList.remove('skeleton')">
                <div class="card-details-hover">
                    <h4>${movie.title}</h4>
                    <div class="card-meta-inline">
                        <span>★ ${movie.rating}</span>
                        <span>${movie.year}</span>
                    </div>
                </div>
            </div>
        `;
        top10Slider.appendChild(wrapper);
    });

    // Dynamic Generic Rows Map definitions
    const sections = [
        { title: "Trending Now", filter: m => m.trending },
        { title: "Popular Titles", filter: m => m.popular },
        { title: "Top Rated Masterpieces", filter: m => m.topRated },
        { title: "SAVEAN Originals Premium", filter: m => m.type === 'original' },
        { title: "Action Dominance", filter: m => m.category === 'Action' },
        { title: "Sci-Fi Visions", filter: m => m.category === 'Sci-Fi' }
    ];

    sections.forEach(sec => {
        const rowContainer = document.createElement("div");
        rowContainer.className = "row-container";
        
        const filteredMovies = MOVIE_DATABASE.filter(sec.filter);
        
        let cardsHtml = "";
        filteredMovies.forEach(m => {
            cardsHtml += `
                <div class="movie-card" data-id="${m.id}">
                    <img src="${m.poster}" class="skeleton" onload="this.classList.remove('skeleton')">
                    <div class="card-details-hover">
                        <h4>${m.title}</h4>
                        <div class="card-meta-inline">
                            <span>★ ${m.rating}</span>
                            <span>${m.duration}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        rowContainer.innerHTML = `
            <h2 class="row-title">${sec.title}</h2>
            <div class="carousel-wrapper">
                <button class="slider-arrow left-arrow"><i class="fas fa-chevron-left"></i></button>
                <div class="movie-row">${cardsHtml}</div>
                <button class="slider-arrow right-arrow"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        rootRows.appendChild(rowContainer);
    });

    // Attach row sliding architecture handlers
    document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
        const row = wrapper.querySelector(".movie-row, .top10-slider");
        const left = wrapper.querySelector(".left-arrow");
        const right = wrapper.querySelector(".right-arrow");
        
        if(!row || !left || !right) return;

        left.addEventListener("click", () => row.scrollBy({ left: -400, behavior: 'smooth' }));
        right.addEventListener("click", () => row.scrollBy({ left: 400, behavior: 'smooth' }));
    });

    // Attach Global Delegation Event Listener onto Cards elements
    document.addEventListener("click", (e) => {
        const targetCard = e.target.closest(".movie-card");
        if(targetCard) {
            const mid = targetCard.getAttribute("data-id");
            const movieObj = MOVIE_DATABASE.find(m => m.id === mid);
            if(movieObj) openDetailsModal(movieObj);
        }
    });
}

// GENERIC CATEGORIES EXPLORE CARDS GRID GENERATION ENGINE
function renderGrid(containerId, items) {
    const grid = document.getElementById(containerId);
    if(!grid) return;
    grid.innerHTML = "";
    
    if(items.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><p>No content vectors allocated here.</p></div>`;
        return;
    }

    items.forEach(m => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.setAttribute("data-id", m.id);
        card.innerHTML = `
            <img src="${m.poster}" class="skeleton" onload="this.classList.remove('skeleton')">
            <div class="card-details-hover">
                <h4>${m.title}</h4>
                <div class="card-meta-inline">
                    <span>★ ${m.rating}</span>
                    <span>${m.year}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// SEARCH INTELLIGENCE ENGINE IMPLEMENTATION
function initSearchEngine() {
    const trigger = document.getElementById("searchTrigger");
    const mTrigger = document.getElementById("mobileSearchTrigger");
    const mBtn = document.getElementById("mobileSearchBtn");
    const overlay = document.getElementById("searchOverlay");
    const close = document.getElementById("closeSearchBtn");
    const input = document.getElementById("searchInput");
    const clearInput = document.getElementById("clearSearchInputBtn");

    const openSearch = () => { overlay.classList.remove("hidden"); input.focus(); execSearch(); };
    if(trigger) trigger.onclick = openSearch;
    if(mTrigger) mTrigger.onclick = openSearch;
    if(mBtn) mBtn.onclick = openSearch;

    close.onclick = () => overlay.classList.add("hidden");
    clearInput.onclick = () => { input.value = ""; execSearch(); };

    input.addEventListener("input", execSearch);
    document.getElementById("filterGenre").addEventListener("change", execSearch);
    document.getElementById("filterYear").addEventListener("change", execSearch);

    renderSearchHistoryTags();
}

function execSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const genre = document.getElementById("filterGenre").value;
    const year = document.getElementById("filterYear").value;
    const grid = document.getElementById("searchResultsGrid");
    const title = document.getElementById("searchResultTitle");

    let results = MOVIE_DATABASE;

    if(query) {
        results = results.filter(m => 
            m.title.toLowerCase().includes(query) || 
            m.description.toLowerCase().includes(query) || 
            m.cast.toLowerCase().includes(query) ||
            m.director.toLowerCase().includes(query)
        );
        title.innerText = `Search results for "${query}"`;
    } else {
        title.innerText = "Top Recommended Searches & Discoveries";
    }

    if(genre !== "all") results = results.filter(m => m.category === genre);
    if(year !== "all") {
        if(year === "classic") results = results.filter(m => m.year < 2024);
        else results = results.filter(m => m.year === parseInt(year));
    }

    grid.innerHTML = "";
    if(results.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1"><i class="fas fa-search"></i><p>No titles match the search parameters on SAVEAN MOVIES.</p></div>`;
        return;
    }

    results.forEach(m => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.setAttribute("data-id", m.id);
        card.innerHTML = `
            <img src="${m.poster}">
            <div class="card-details-hover">
                <h4>${m.title}</h4>
                <div class="card-meta-inline">
                    <span>★ ${m.rating}</span>
                    <span>${m.year}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSearchHistoryTags() {
    const box = document.getElementById("historyKeywords");
    box.innerHTML = "";
    searchHistory.forEach(k => {
        const tag = document.createElement("span");
        tag.className = "history-tag";
        tag.innerText = k;
        tag.onclick = () => {
            document.getElementById("searchInput").value = k;
            execSearch();
        };
        box.appendChild(tag);
    });
}

// MOVIE DETAILS CONTROLLER DISPLAY MODAL
function initModalEvents() {
    const modal = document.getElementById("detailsModal");
    document.getElementById("closeModalBtn").onclick = () => modal.classList.add("hidden");
    modal.onclick = (e) => { if(e.target === modal) modal.classList.add("hidden"); };
}

function openDetailsModal(movie) {
    const modal = document.getElementById("detailsModal");
    modal.classList.remove("hidden");

    document.getElementById("modalHero").style.backgroundImage = `url('${movie.backdrop}')`;
    document.getElementById("modalTitle").innerText = movie.title;
    document.getElementById("modalYear").innerText = movie.year;
    document.getElementById("modalAge").innerText = movie.age;
    document.getElementById("modalDuration").innerText = movie.duration;
    document.getElementById("modalDesc").innerText = movie.description;
    document.getElementById("modalDirector").innerText = movie.director;
    document.getElementById("modalCast").innerText = movie.cast;
    document.getElementById("modalGenres").innerText = movie.category;

    const starsBox = document.getElementById("modalStars");
    starsBox.innerHTML = "";
    const floorStars = Math.floor(movie.rating);
    for(let i=0; i<floorStars; i++) starsBox.innerHTML += `<i class="fas fa-star"></i>`;
    if(movie.rating % 1 !== 0) starsBox.innerHTML += `<i class="fas fa-star-half-alt"></i>`;

    // Hook buttons actions
    document.getElementById("modalPlayBtn").onclick = () => { modal.classList.add("hidden"); launchVideoPlayer(movie); };
    document.getElementById("modalTrailerBtn").onclick = () => { modal.classList.add("hidden"); launchVideoPlayer(movie, true); };
    
    const listBtn = document.getElementById("modalListBtn");
    const updateListBtnUI = () => {
        const isSaved = watchlist.some(m => m.id === movie.id);
        listBtn.innerHTML = isSaved ? `<i class="fas fa-check" style="color:var(--color-accent)"></i>` : `<i class="fas fa-plus"></i>`;
    };
    updateListBtnUI();
    listBtn.onclick = () => { toggleWatchlist(movie); updateListBtnUI(); };

    // Trigger local explicit virtualized download logic mockups
    const dlBtn = document.getElementById("modalDownloadBtn");
    dlBtn.onclick = () => startMockDownload(movie);

    // Build alternative similar algorithmic recommendations elements layout
    const simGrid = document.getElementById("modalSimilarGrid");
    simGrid.innerHTML = "";
    MOVIE_DATABASE.filter(m => m.category === movie.category && m.id !== movie.id).slice(0, 4).forEach(m => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.setAttribute("data-id", m.id);
        card.style.minWidth = "100%"; card.style.height = "180px";
        card.innerHTML = `
            <img src="${m.poster}">
            <div class="card-details-hover">
                <h4 style="font-size:0.8rem">${m.title}</h4>
            </div>
        `;
        simGrid.appendChild(card);
    });
}

// PREMIUM EXCLUSIVE CUSTOM VIDEO PLAYER COMPONENT INTERNALS
function initCustomVideoPlayer() {
    const layer = document.getElementById("videoPlayerLayer");
    const video = document.getElementById("mainVideoNode");
    const controls = document.getElementById("playerControls");
    const pBtn = document.getElementById("playPauseBtn");
    const vSlider = document.getElementById("volumeSlider");
    const vMute = document.getElementById("volumeMuteBtn");
    const progressContainer = document.getElementById("progressBarContainer");
    const timeline = document.getElementById("progressTimeline");
    const buffered = document.getElementById("progressBuffered");
    const handle = document.getElementById("progressHandle");
    const timeDisplay = document.getElementById("playerTimeDisplay");
    const fullscreen = document.getElementById("fullscreenBtn");

    const togglePlay = () => {
        if(video.paused) { video.play(); pBtn.innerHTML = `<i class="fas fa-pause"></i>`; }
        else { video.pause(); pBtn.innerHTML = `<i class="fas fa-play"></i>`; }
    };

    pBtn.onclick = togglePlay;
    video.onclick = togglePlay;

    // Fast progress skips
    document.getElementById("rewindBtn").onclick = () => video.currentTime -= 10;
    document.getElementById("forwardBtn").onclick = () => video.currentTime += 10;

    // Time update matrix display logic hooks
    video.addEventListener("timeupdate", () => {
        const current = video.currentTime;
        const total = video.duration || 0;
        const pct = (current / total) * 100;
        
        timeline.style.width = `${pct}%`;
        handle.style.left = `${pct}%`;

        // Render mathematical calculation readout string
        timeDisplay.innerText = `${formatPlaybackTime(current)} / ${formatPlaybackTime(total)}`;

        // Trigger dynamic overlay conditions hooks for cinematic actions
        const introBtn = document.getElementById("skipIntroBtn");
        if(current > 10 && current < 30) introBtn.classList.remove("hidden");
        else introBtn.classList.add("hidden");
    });

    video.addEventListener("progress", () => {
        if (video.buffered.length > 0) {
            const bufEnd = video.buffered.end(video.buffered.length - 1);
            const duration = video.duration;
            if(duration > 0) buffered.style.width = `${(bufEnd / duration) * 100}%`;
        }
    });

    // Handle timeline mouse drags tracking calculations
    let isDraggingTimeline = false;
    progressContainer.onmousedown = (e) => { isDraggingTimeline = true; updateScrubTimeline(e); };
    window.onmousemove = (e) => { if(isDraggingTimeline) updateScrubTimeline(e); };
    window.onmouseup = () => isDraggingTimeline = false;

    function updateScrubTimeline(e) {
        const rect = progressContainer.getBoundingClientRect();
        let posX = (e.clientX - rect.left) / rect.width;
        if(posX < 0) posX = 0; if(posX > 1) posX = 1;
        video.currentTime = posX * video.duration;
    }

    // Audio operations control matrices
    vSlider.oninput = () => {
        video.volume = vSlider.value;
        vMute.innerHTML = video.volume === 0 ? `<i class="fas fa-volume-mute"></i>` : `<i class="fas fa-volume-up"></i>`;
    };
    vMute.onclick = () => {
        if(video.muted || video.volume === 0) { video.muted = false; video.volume = 0.8; vSlider.value = 0.8; vMute.innerHTML = `<i class="fas fa-volume-up"></i>`; }
        else { video.muted = true; vSlider.value = 0; vMute.innerHTML = `<i class="fas fa-volume-mute"></i>`; }
    };

    // Quality & Playback speeds mappings selector controls execution
    document.querySelectorAll("#speedDropdown span").forEach(node => {
        node.onclick = () => {
            document.querySelectorAll("#speedDropdown span").forEach(s => s.classList.remove("active"));
            node.classList.add("active");
            video.playbackRate = parseFloat(node.getAttribute("data-speed"));
        };
    });

    document.querySelectorAll("#qualityDropdown span").forEach(node => {
        node.onclick = () => {
            document.querySelectorAll("#qualityDropdown span").forEach(q => q.classList.remove("active"));
            node.classList.add("active");
            showNotification(`Switching resolution pipeline to ${node.innerText}`);
            const currentPlaybackMarkerTime = video.currentTime;
            document.getElementById("videoLoader").style.display = "block";
            setTimeout(() => {
                document.getElementById("videoLoader").style.display = "none";
                video.currentTime = currentPlaybackMarkerTime;
            }, 1200);
        };
    });

    // Screen real estate toggle states handlers
    fullscreen.onclick = () => {
        if(!document.fullscreenElement) layer.requestFullscreen().catch(() => {});
        else document.exitFullscreen();
    };

    document.getElementById("pipBtn").onclick = () => video.requestPictureInPicture().catch(() => {});

    document.getElementById("skipIntroBtn").onclick = () => video.currentTime = 32;

    document.getElementById("exitPlayerBtn").onclick = () => {
        video.pause();
        // Log watch markers into localized historic tracking stores arrays lists indexes
        logWatchHistory(video.dataset.activeMovieId, video.currentTime);
        layer.classList.add("hidden");
    };
}

function launchVideoPlayer(movie, isTrailer = false) {
    const layer = document.getElementById("videoPlayerLayer");
    const video = document.getElementById("mainVideoNode");
    
    video.dataset.activeMovieId = movie.id;
    video.src = movie.videoUrl;
    document.getElementById("playerMovieTitle").innerText = movie.title;
    document.getElementById("playerMovieSubtitle").innerText = isTrailer ? "Exclusive Trailer Exhibition" : "Ultra HD 4K Main Feature Asset";
    
    layer.classList.remove("hidden");
    document.getElementById("videoLoader").style.display = "block";

    video.oncanplay = () => {
        document.getElementById("videoLoader").style.display = "none";
        // Attempt to extract historical bookmark pointer references vectors to resume playback state operations
        const historicLog = watchHistory.find(h => h.id === movie.id && h.profile === currentProfile);
        if(historicLog && !isTrailer) {
            video.currentTime = historicLog.timestamp;
            showNotification(`Resuming your stream sequence from ${formatPlaybackTime(historicLog.timestamp)}`);
        }
        video.play().catch(() => {});
    };
}

function formatPlaybackTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h > 0 ? h + ':' : ''}${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

// WATCHLIST DATA ARRAY ARCHITECTURE LOGIC
function toggleWatchlist(movie) {
    const index = watchlist.findIndex(m => m.id === movie.id);
    if(index > -1) {
        watchlist.splice(index, 1);
        showNotification(`Removed "${movie.title}" from My List`);
    } else {
        watchlist.push(movie);
        showNotification(`Added "${movie.title}" to My List`);
    }
    localStorage.setItem("savean_watchlist", JSON.stringify(watchlist));
    renderWatchlist();
}

function renderWatchlist() {
    renderGrid("myListGrid", watchlist);
    const stateEmptyNode = document.getElementById("myListEmpty");
    if(stateEmptyNode) stateEmptyNode.classList.toggle("hidden", watchlist.length > 0);
}

// HISTORY AND TRACKING ARCHITECTURES
function logWatchHistory(movieId, timestamp) {
    const mObj = MOVIE_DATABASE.find(m => m.id === movieId);
    if(!mObj || timestamp < 10) return;

    // Check if duplicate element exists inside same running execution sequence block index range
    const index = watchHistory.findIndex(h => h.id === movieId && h.profile === currentProfile);
    if(index > -1) watchHistory.splice(index, 1);

    watchHistory.unshift({
        id: movieId,
        title: mObj.title,
        poster: mObj.poster,
        timestamp: timestamp,
        profile: currentProfile,
        dateString: new Date().toLocaleDateString()
    });

    localStorage.setItem("savean_history", JSON.stringify(watchHistory));
    renderHistory();
    updateContinueWatchingRow();
}

function renderHistory() {
    const container = document.getElementById("historyLogList");
    if(!container) return;
    container.innerHTML = "";

    const activeProfileHistory = watchHistory.filter(h => h.profile === currentProfile);
    document.getElementById("historyEmpty").classList.toggle("hidden", activeProfileHistory.length > 0);

    activeProfileHistory.forEach(h => {
        const row = document.createElement("div");
        row.className = "history-item";
        row.innerHTML = `
            <div class="hist-meta">
                <img src="${h.poster}">
                <div>
                    <h4>${h.title}</h4>
                    <p style="font-size:0.8rem; color:var(--color-gray)">Paused at: ${formatPlaybackTime(h.timestamp)} on ${h.dateString}</p>
                </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="resumeHistoryTrack('${h.id}')"><i class="fas fa-play"></i> Resume</button>
        `;
        container.appendChild(row);
    });
}

function resumeHistoryTrack(movieId) {
    const movie = MOVIE_DATABASE.find(m => m.id === movieId);
    if(movie) launchVideoPlayer(movie);
}

function updateContinueWatchingRow() {
    const row = document.getElementById("continueWatchingRow");
    const track = document.getElementById("continueRow");
    const activeProfileHistory = watchHistory.filter(h => h.profile === currentProfile);

    if(activeProfileHistory.length === 0) {
        row.classList.add("hidden");
        return;
    }

    row.classList.remove("hidden");
    track.innerHTML = "";

    activeProfileHistory.forEach(h => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.setAttribute("data-id", h.id);
        card.innerHTML = `
            <img src="${h.poster}">
            <div class="card-details-hover" style="opacity:1; background:rgba(0,0,0,0.8)">
                <h4 style="font-size:0.85rem">${h.title}</h4>
                <div class="dl-bar" style="width:100%"><div class="dl-fill" style="width:50%"></div></div>
            </div>
        `;
        track.appendChild(card);
    });
}

// DOWNLOADING ENGINE MOCK VIRTUAL PANEL
function startMockDownload(movie) {
    const queue = document.getElementById("downloadQueueList");
    const dlNode = document.createElement("div");
    dlNode.className = "download-item";
    
    const uniqueDlId = "dl_" + Date.now();
    dlNode.id = uniqueDlId;

    dlNode.innerHTML = `
        <div class="dl-meta">
            <img src="${movie.poster}">
            <div>
                <h4>${movie.title}</h4>
                <div class="dl-progress-container">
                    <span id="${uniqueDlId}_txt" style="font-size:0.8rem; color:var(--color-accent)">Initializing Download Vectors...</span>
                    <div class="dl-bar"><div class="dl-fill" id="${uniqueDlId}_fill" style="width:0%"></div></div>
                </div>
            </div>
        </div>
        <button class="btn btn-secondary btn-sm" style="border-radius:50%; width:36px; height:36px; padding:0;"><i class="fas fa-times"></i></button>
    `;
    queue.appendChild(dlNode);
    showNotification(`Downloading sequence allocated for "${movie.title}"`);

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 5;
        if(progress >= 100) {
            progress = 100;
            clearInterval(interval);
            document.getElementById(`${uniqueDlId}_txt`).innerText = "Stored Offline (Verified)";
            document.getElementById(`${uniqueDlId}_txt`).style.color = "var(--color-white)";
            showNotification(`Download finished: "${movie.title}" is available offline.`);
        } else {
            document.getElementById(`${uniqueDlId}_txt`).innerText = `Downloading Manifest Assets: ${progress}%`;
        }
        document.getElementById(`${uniqueDlId}_fill`).style.width = `${progress}%`;
    }, 600);
}

// SYSTEM EXTRA ENHANCEMENT HANDLERS OVERLAYS (KEYBOARD BINDINGS AND UI ANIMATION EXTENSIONS)
function initExtraFeatures() {
    // Back to top scrolling operations matrix configurations
    const btt = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 600) btt.style.display = "flex";
        else btt.style.display = "none";
    });
    btt.onclick = () => window.scrollTo({ top:0, behavior: 'smooth' });

    // Global Key Bindings Interface Mappings
    window.addEventListener("keydown", (e) => {
        if(e.key === "Escape") {
            document.getElementById("detailsModal").classList.add("hidden");
            document.getElementById("searchOverlay").classList.add("hidden");
        }
        // Player explicit space keys handlers binding constraints checks condition triggers
        const playerLayer = document.getElementById("videoPlayerLayer");
        if(!playerLayer.classList.contains("hidden") && e.key === " ") {
            e.preventDefault();
            document.getElementById("playPauseBtn").click();
        }
    });

    // Clean up tracking caches logs configurations interfaces components logic pointers
    document.getElementById("clearHistoryBtn").onclick = () => {
        watchHistory = watchHistory.filter(h => h.profile !== currentProfile);
        localStorage.setItem("savean_history", JSON.stringify(watchHistory));
        renderHistory();
        updateContinueWatchingRow();
        showNotification("Profile historical data logs completely expunged.");
    };

    updateContinueWatchingRow();
      }
