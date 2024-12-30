let currentImageIndex = 0;
const images = [
    'https://img.freepik.com/premium-photo/mysterious-nature-view-background-ai-generated_751835-595.jpg', 
    'https://thumbs.dreamstime.com/b/ai-generated-image-features-transparent-magic-sphere-which-mesmerizing-macro-view-bird-unfolds-sphere-291080220.jpg', 
    'https://img.freepik.com/premium-photo/two-colorful-lovebirds-standing-close-together-looking-same-direction-concept-birds-love-colorful-together-close_864588-147556.jpg', 
    'https://images.ladbiblegroup.com/v3/assets/blt949ea8e16e463049/bltd03816b9fba20e29/6486ff1e2866a82a95f2e904/ai-human-animal.webp',
    'https://img.freepik.com/premium-photo/wild-animals-thriving-protected-forest-highlighting-importance-nature-conservation_1333757-111.jpg'
];

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function changeImage(imageSrc) {
    currentImageIndex = images.indexOf(imageSrc);
    updateImage();
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
updateImage();