const cards = document.querySelectorAll(".project-card");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");
const lightVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const img = card.querySelector("img");
        const video = card.querySelector("video");

        lightbox.style.display = "flex";

        if (img) {
            lightImg.src = img.src;
            lightImg.style.display = "block";
            lightVideo.style.display = "none";
        }

        if (video) {
            lightVideo.src = video.src;
            lightVideo.style.display = "block";
            lightImg.style.display = "none";
            lightVideo.play();
        }

    });
});

closeBtn.onclick = () => {
    lightbox.style.display = "none";
    lightVideo.pause();
};

lightbox.onclick = (e) => {
    if (e.target !== lightImg && e.target !== lightVideo) {
        lightbox.style.display = "none";
        lightVideo.pause();
    }
};