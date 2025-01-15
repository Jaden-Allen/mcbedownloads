import { Downloads, DownloadType } from "./downloads.js";
import { nameToId } from "./page.js";

Downloads.AddTemplate(1, DownloadType.addon)

const hash = window.location.hash.slice(1);
const wiki = document.getElementById('wiki_panel') as HTMLDivElement;

const download = Downloads.All.find(d => nameToId(d.name) === hash)

function populateWiki(){
    if (download === undefined){
        const errorText = wiki.appendChild(document.createElement('h1'));
        errorText.textContent = 'Error finding information about this pack...'
        return;
    }
    
    const thumbnail = createImage(wiki, download.thumbnail, 'wiki_thumbnail', 'wiki_thumbnail');
    const version = createText(wiki, 'p', 'wiki_version', 'wiki_version', `Version: ${download.version}\nSupports: ${download.supportedVersions.min} - ${download.supportedVersions.max}`)
    const title = createText(wiki, 'h2', 'wiki_title', 'wiki_title', download.name)
    const teaser = createText(wiki, 'p', 'wiki_teaser', 'wiki_teaser', download.teaser)
    const body = createText(wiki, 'p', 'wiki_body', 'wiki_body', download.body)

    const imagesHeader = createText(wiki, 'h1', 'wiki_images_header', 'wiki_images_header', 'Images');

    const imagesPanel = createPanel(wiki, 'wiki_images_panel', 'wiki_images_panel')
    setupImageCarousel(imagesPanel, download.images);
}
function createPanel(parent: HTMLDivElement, className: string, id: string){
    const panel = parent.appendChild(document.createElement('div'));
    panel.className = className;
    panel.id = id;
    return panel;
}
interface TextObject{
    area: HTMLDivElement;
    object: HTMLParagraphElement | HTMLHeadingElement | HTMLStyleElement;
}
function createText(parent: HTMLDivElement, tagName: 'h1' | 'h2' | 'h3' | 'p' | 'style', className: string, id: string, innerText: string){
    const textObject: TextObject = {
        area: parent.appendChild(document.createElement('div')),
        object: undefined
    }
    textObject.object = textObject.area.appendChild(document.createElement(tagName))
    textObject.area.className = className + "_area";
    textObject.area.id = id + '_area'
    textObject.object.innerText = innerText;
    textObject.object.className = className;
    textObject.object.id = id;

    return textObject;
}
interface ImageObject{
    area: HTMLDivElement;
    object: HTMLImageElement;
}
function createImage(parent: HTMLDivElement, source: string, className: string, id: string){
    const imageObject: ImageObject = {
        area: parent.appendChild(document.createElement('div')),
        object: undefined
    }
    imageObject.object = imageObject.area.appendChild(document.createElement('img'));
    imageObject.area.className = className + '_area';
    imageObject.area.id = id + "_area";
    imageObject.object.src = source;
    imageObject.object.className = className;
    imageObject.object.id = id;
    return imageObject;
}
function setupImageCarousel(imagesPanel: HTMLDivElement, images: string[]) {
    let currentIndex = 0;

    // Create buttons
    const leftButton = document.createElement('button');
    leftButton.textContent = '<';
    leftButton.className = 'button left';
    leftButton.onclick = () => showImage(currentIndex - 1);

    const rightButton = document.createElement('button');
    rightButton.textContent = '>';
    rightButton.className = 'button right';
    rightButton.onclick = () => showImage(currentIndex + 1);

    imagesPanel.appendChild(leftButton);
    imagesPanel.appendChild(rightButton);

    // Add images to the panel
    const imgElements = images.map((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    imagesPanel.appendChild(img);
    return img;
    });

    function showImage(index: number) {
    if (index < 0 || index >= images.length) return; // Prevent out-of-bounds
    currentIndex = index;

    imgElements.forEach((img, i) => {
        img.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    });

    // Enable/disable buttons based on bounds
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex === images.length - 1;
    }

    // Initialize the carousel
    showImage(0);
}
  
populateWiki();