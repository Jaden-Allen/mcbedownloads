export function createPanel(parent: HTMLDivElement, className: string | undefined, id: string | undefined){
    const panel = parent.appendChild(document.createElement('div'));
    if (className) panel.className = className;
    if (id) panel.id = id;
    return panel;
}
export interface TextObject{
    area: HTMLDivElement;
    object: HTMLParagraphElement | HTMLHeadingElement | HTMLStyleElement;
}
export function createText(parent: HTMLDivElement, tagName: 'h1' | 'h2' | 'h3' | 'p' | 'style', innerText: string, areaClassName: string | undefined, areaId: string | undefined, className: string | undefined, id: string | undefined){
    const textObject: TextObject = {
        area: parent.appendChild(document.createElement('div')),
        object: undefined
    }
    textObject.object = textObject.area.appendChild(document.createElement(tagName))
    if (areaClassName) textObject.area.className = areaClassName
    if (areaId) textObject.area.id = areaId
    textObject.object.innerText = innerText;
    if (className) textObject.object.className = className;
    if (id) textObject.object.id = id;

    return textObject;
}
export interface ImageObject{
    area: HTMLDivElement;
    object: HTMLImageElement;
}
export function createImage(parent: HTMLDivElement, source: string, alt: string, areaClassName: string | undefined, areaId: string | undefined, className: string | undefined, id: string | undefined){
    const imageObject: ImageObject = {
        area: parent.appendChild(document.createElement('div')),
        object: undefined
    }
    imageObject.object = imageObject.area.appendChild(document.createElement('img'));
    if (areaClassName) imageObject.area.className = areaClassName
    if (areaId) imageObject.area.id = id + areaId
    imageObject.object.src = source;
    if (className) imageObject.object.className = className;
    if (id) imageObject.object.id = id;
    imageObject.object.alt = alt;
    return imageObject;
}
export function createButton(parent: HTMLDivElement, textContent: string | undefined, className: string | undefined, id: string | undefined) {
    const button = parent.appendChild(document.createElement('button'));
    if (textContent) button.textContent = textContent;
    if (className) button.className = className;
    if (id) button.id = id;
    return button;
}