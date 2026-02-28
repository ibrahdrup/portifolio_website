/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

document.addEventListener("DOMContentLoaded", function () {
    const skillDataBlocks = document.querySelectorAll(".skills__data");

    skillDataBlocks.forEach((block) => {
        const percentageText = block.querySelector(".skills__percentage")?.innerText;
        const bar = block.querySelector(".skills__bar");

        if (percentageText && bar) {
            const numericValue = parseInt(percentageText.replace("%", ""), 10);
            bar.style.width = numericValue + "%";
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

function modal_work2() {
    const workImages = [
        "assets/img/work Image 2025-05-18 at 22.38.03 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.38.03.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.52.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.51.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.48.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.46.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.44 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.44.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.41 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.41.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.39.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.37 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.37.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.35.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.34.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.33.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.32.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.31.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.29.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.27 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.27.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.21.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.19 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.19.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.10.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.08.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.06.jpeg",

        "assets/img/work Image 2025-05-18 at 22.37.02.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.59 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.59.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.57.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.56.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.54.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.50.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.49.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.39 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.39.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.30.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.29.jpeg",

        "assets/img/work Image 2025-05-18 at 22.36.27.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.25.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.15 (2).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.15 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.15.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.12 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.12.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.11 (2).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.11 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.11.jpeg"
    ];


    let currentIndex = 0;

    const container = document.getElementById("workContainer");
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const caption = document.getElementById("imageCaption");
    const closeBtn = document.querySelector(".close");
    const thumbnailContainer = document.getElementById("modalThumbnails");

    // Create image elements
    workImages.forEach((imgSrc, index) => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = "work__img";

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Work image " + (index + 1);

        img.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = index;
            openModal();
        });

        a.appendChild(img);
        container.appendChild(a);
    });

    // Open modal function
    function openModal() {
        fullImage.src = workImages[currentIndex];
        caption.textContent = "Work image " + (currentIndex + 1);
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        renderThumbnails();
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    }

    closeBtn.onclick = closeModal;

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener("keydown", (e) => {
        if (modal.style.display === "block") {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % workImages.length;
                updateModalContent();
            }
            if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + workImages.length) % workImages.length;
                updateModalContent();
            }
        }
    });

    function updateModalContent() {
        fullImage.src = workImages[currentIndex];
        caption.textContent = "Work image " + (currentIndex + 1);
        updateThumbnailActiveState();
    }

    // Swipe support
    let touchStartX = 0;

    fullImage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    fullImage.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diffX = touchStartX - touchEndX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                currentIndex = (currentIndex + 1) % workImages.length;
            } else {
                currentIndex = (currentIndex - 1 + workImages.length) % workImages.length;
            }
            updateModalContent();
        }
    });

    // Zoom toggle
    fullImage.addEventListener("click", () => {
        fullImage.classList.toggle("zoomed");
    });

    // Preload images
    workImages.forEach((src) => {
        const preload = new Image();
        preload.src = src;
    });

    // Thumbnail rendering
    function renderThumbnails() {
        thumbnailContainer.innerHTML = "";
        workImages.forEach((thumbSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = thumbSrc;
            thumb.className = "modal-thumb";
            if (index === currentIndex) thumb.classList.add("active");

            thumb.addEventListener("click", () => {
                currentIndex = index;
                updateModalContent();
            });

            thumbnailContainer.appendChild(thumb);
        });
    }

    function updateThumbnailActiveState() {
        const thumbs = thumbnailContainer.querySelectorAll(".modal-thumb");
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle("active", i === currentIndex);
        });
    }
}

function modal_work() {
    const workMedia = [
        "assets/img/work Image 2025-05-18 at 22.38.03 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.38.03.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.52.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.51.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.48.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.46.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.44 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.44.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.41 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.41.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.39.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.37 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.37.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.35.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.34.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.33.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.32.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.31.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.29.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.27 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.27.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.21.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.19 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.19.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.10.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.08.jpeg",
        "assets/img/work Image 2025-05-18 at 22.37.06.jpeg",

        "assets/img/work Image 2025-05-18 at 22.37.02.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.59 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.59.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.57.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.56.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.54.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.50.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.49.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.39 (1).jpeg",
        // "assets/img/work Image 2025-05-18 at 22.36.39.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.30.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.29.jpeg",

        "assets/img/work Image 2025-05-18 at 22.36.27.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.25.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.15 (2).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.15 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.15.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.12 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.12.jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.11 (2).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.11 (1).jpeg",
        "assets/img/work Image 2025-05-18 at 22.36.11.jpeg",
        "assets/img/work Video 2025-05-18 at 22.48.06.mp4",
        "assets/img/work Video 2025-05-18 at 22.47.59.mp4",
        "assets/img/work Video 2025-05-18 at 22.42.29.mp4",
        "assets/img/work Video 2025-05-18 at 22.41.27.mp4",
        "assets/img/work Video 2025-05-18 at 22.41.01.mp4",
        // "assets/img/work Video 2025-05-18 at 22.40.16.mp4",
        "assets/img/work Video 2025-05-18 at 22.40.11.mp4",
        "assets/img/work Video 2025-05-18 at 22.38.56.mp4",
        "assets/img/WhatsApp Image 2026-02-27 at 17.54.32.jpeg",
        "assets/img/WhatsApp Image 2026-02-27 at 17.54.33.jpeg",
        "assets/img/WhatsApp Image 2026-02-27 at 17.55.01.jpeg",
        "assets/img/WhatsApp Image 2026-02-27 at 17.57.11.jpeg",
        "assets/img/WhatsApp Image 2026-02-27 at 17.58.03.jpeg",
        "assets/img/WhatsApp Video 2026-02-27 at 18.00.16.mp4",
        "assets/img/WhatsApp Video 2026-02-28 at 10.41.54.mp4",
        "assets/img/WhatsApp Video 2026-02-28 at 10.42.06.mp4",
    ];

    let currentIndex = 0;

    const container = document.getElementById("workContainer");
    const modal = document.getElementById("imageModal");
    const modalContent = document.querySelector(".modal-content");
    const caption = document.getElementById("imageCaption");
    const closeBtn = document.querySelector(".close");
    const thumbnailContainer = document.getElementById("modalThumbnails");

    // Add thumbnails to grid
    workMedia.forEach((mediaSrc, index) => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = "work__img";

        const isVideo = mediaSrc.endsWith(".mp4");

        let element;
        if (isVideo) {
            element = document.createElement("video");
            element.src = mediaSrc;
            element.muted = true;
            element.loop = true;
            element.preload = "metadata";
            element.playsInline = true;
        } else {
            element = document.createElement("img");
            element.src = mediaSrc;
            element.alt = "Work image " + (index + 1);
            element.loading = "lazy";
            element.decoding = "async";
        }

        element.className = "media-thumb";
        element.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = index;
            openModal();
        });

        a.appendChild(element);
        container.appendChild(a);
    });

    function openModal() {
        renderModalMedia();
        caption.textContent = "Work item " + (currentIndex + 1);
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        renderThumbnails();
    }

    function renderModalMedia() {
        const oldMedia = modalContent.querySelector("img, video");
        if (oldMedia) oldMedia.remove();

        const mediaSrc = workMedia[currentIndex];
        let newMedia;

        const onLoadOrReady = () => {
            newMedia.className = "modal-media";
            modalContent.insertBefore(newMedia, caption);
        };

        if (mediaSrc.endsWith(".mp4")) {
            newMedia = document.createElement("video");
            newMedia.src = mediaSrc;
            newMedia.controls = true;
            newMedia.autoplay = true;
            newMedia.oncanplaythrough = onLoadOrReady;
        } else {
            newMedia = document.createElement("img");
            newMedia.src = mediaSrc;
            newMedia.id = "fullImage";
            newMedia.onload = onLoadOrReady;
        }
    }


    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    }

    closeBtn.onclick = closeModal;

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener("keydown", (e) => {
        if (modal.style.display === "block") {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % workMedia.length;
                updateModalContent();
            }
            if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + workMedia.length) % workMedia.length;
                updateModalContent();
            }
        }
    });

    function updateModalContent() {
        renderModalMedia();
        caption.textContent = "Work item " + (currentIndex + 1);
        updateThumbnailActiveState();
    }

    // Thumbnails
    function renderThumbnails() {
        thumbnailContainer.innerHTML = "";
        workMedia.forEach((thumbSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = thumbSrc;
            thumb.className = "modal-thumb";
            if (index === currentIndex) thumb.classList.add("active");

            thumb.addEventListener("click", () => {
                currentIndex = index;
                updateModalContent();
            });

            thumbnailContainer.appendChild(thumb);
        });
    }

    function updateThumbnailActiveState() {
        const thumbs = thumbnailContainer.querySelectorAll(".modal-thumb");
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle("active", i === currentIndex);
        });
    }
    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    modalContent.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    modalContent.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX - 50) {
            // Swiped left
            currentIndex = (currentIndex + 1) % workMedia.length;
            updateModalContent();
        }
        if (touchEndX > touchStartX + 50) {
            // Swiped right
            currentIndex = (currentIndex - 1 + workMedia.length) % workMedia.length;
            updateModalContent();
        }
    }
}



modal_work()



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
