import { Downloads } from "./downloads.js";
import { InitializeImageCarousel } from "./image_carousel.js";
import { createButton, createElement, createImage, createText } from "./objects.js";
import { nameToId } from "./page.js";
const hash = window.location.hash.slice(1);
const wiki = document.getElementById('wiki-container');
const download = Downloads.All.find(d => nameToId(d.name) === hash);
function populateWiki() {
    if (download === undefined) {
        const errorText = wiki.appendChild(document.createElement('h1'));
        errorText.textContent = 'Error finding information about this pack...';
        return;
    }
    const thumbnail = createImage(wiki, download.thumbnail, download.name, 'wiki-item thumbnail-area', undefined, undefined, undefined);
    const name = createText(wiki, 'h2', download.name, 'wiki-item name-area', undefined, undefined, undefined);
    const teaser = createText(wiki, 'p', download.teaser, 'wiki-item teaser-area', undefined, undefined, undefined);
    const creator = createText(wiki, 'p', `Creator: ${download.creator}`, 'wiki-item creator-area', undefined, undefined, undefined);
    const version = createText(wiki, 'p', `Version: ${download.version}\nMin: ${download.supportedVersions.min}\nMax: ${download.supportedVersions.max}`, 'wiki-item version-area', undefined, undefined, undefined);
    const body = createText(wiki, 'p', download.body, 'wiki-item body-area', undefined, undefined, undefined);
    const imagesHeader = createText(wiki, 'h1', 'Images', 'wiki-item images-label', undefined, undefined, undefined);
    const imagesArea = createElement(wiki, 'div', 'wiki-item images-area', undefined, undefined, undefined);
    const previousButton = createButton(imagesArea, '<', undefined, 'previous-image-button');
    const carousel = createElement(imagesArea, 'div', 'carousel', undefined, undefined, undefined);
    const nextButton = createButton(imagesArea, '>', undefined, 'next-image-button');
    InitializeImageCarousel(download.images, carousel, previousButton, nextButton);
}
populateWiki();
