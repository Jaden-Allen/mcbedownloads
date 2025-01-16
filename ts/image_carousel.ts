
export function createImageElement(src: string): HTMLImageElement {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Image";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    img.style.opacity = "0";  // Start as hidden (we will fade it in)
    return img;
}

let currentIndex: number = 0;
export function InitializeImageCarousel(images: string[], carousel: Element, prevButton: HTMLButtonElement, nextButton: HTMLButtonElement){
    
    
    if (carousel) {
        const initialImage = createImageElement(images[currentIndex]);
        initialImage.style.transform = "translateX(0)";
        initialImage.style.opacity = "1";
        carousel.appendChild(initialImage);
    }
    
    function updateImage(direction: "next" | "prev"): void {
        prevButton?.setAttribute("disabled", "true");
        nextButton?.setAttribute("disabled", "true");
    
        const currentImage = carousel.querySelector("img") as HTMLImageElement;
    
        const newIndex = direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    
        const newImage = createImageElement(images[newIndex]);
    
        if (direction === "next") {
        newImage.style.transform = "translateX(100%)";
        } else {
        newImage.style.transform = "translateX(-100%)";
        }
    
        carousel.appendChild(newImage);
    
        setTimeout(() => {
        currentImage.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
        currentImage.style.opacity = "0";
    
        newImage.style.transform = "translateX(0)";
        newImage.style.opacity = "1";
        }, 50);
    
        // Update the current index
        currentIndex = newIndex;
    
        // Remove the old image after transition
        requestAnimationFrame(() => {
        setTimeout(() => {
            if (carousel.contains(currentImage)) {
            carousel.removeChild(currentImage);
            }
    
            // Re-enable buttons after the animation ends
            prevButton?.removeAttribute("disabled");
            nextButton?.removeAttribute("disabled");
        }, 500); // Remove after the animation ends (500ms to match the transition duration)
        });
    }
    
    // Attach event listeners to buttons
    prevButton?.addEventListener("click", () => updateImage("prev"));
    nextButton?.addEventListener("click", () => updateImage("next"));
}