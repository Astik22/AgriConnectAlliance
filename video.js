function searchVideo() {
    const selectedProduct = document.getElementById("productDropdown").value;
    const videoSection = document.getElementById("videoSection");
    const productVideo = document.getElementById("productVideo");
    const noVideo = document.getElementById("noVideo");

    
    const videos = {
        "insurance": "video3.mp4",
        "rice": "ag.mp4",
        "msp": "video1.mp4",
        "fertilizer": "video 2.mp4"
    };

    if (selectedProduct && videos[selectedProduct]) {
        productVideo.src = videos[selectedProduct];
        productVideo.style.display = "block";
        noVideo.textContent = "";
        videoSection.style.display = "block";
    } else {
        productVideo.src = "";
        productVideo.style.display = "none";
        noVideo.textContent = "No video found for the selected product.";
        videoSection.style.display = "block";
    }
}