import { adsOverlay, hasCompletedAction, OpenPopup } from "./page.js";

export interface TextObject{
    area: HTMLDivElement;
    object: HTMLParagraphElement | HTMLHeadingElement | HTMLStyleElement;
}
export function createText(parent: HTMLDivElement, tagName: 'h1' | 'h2' | 'h3' | 'p' | 'style', innerText: string, areaClassName: StringOrUndefined, areaId: string | undefined = undefined, className: string | undefined = undefined, id: string | undefined){
    const textObject: TextObject = {
        area: createElement(parent, 'div', areaClassName, areaId, undefined, undefined),
        object: undefined
    }
    textObject.object = createElement(textObject.area, tagName, className, id, innerText, undefined);
    return textObject;
}
export interface ImageObject{
    area: HTMLDivElement;
    object: HTMLImageElement;
}
export function createImage(parent: HTMLDivElement, source: string, alt: string, areaClassName: StringOrUndefined, areaId: StringOrUndefined, className: StringOrUndefined, id: StringOrUndefined){
    const imageObject: ImageObject = {
        area: createElement(parent, 'div', areaClassName, areaId, undefined, undefined),
        object: undefined
    }
    imageObject.object = createElement(imageObject.area, 'img', className, id, undefined, undefined);
    imageObject.object.src = source;
    imageObject.object.alt = alt;
    return imageObject;
}
export function createButton(parent: HTMLDivElement, textContent: StringOrUndefined, className: StringOrUndefined, id: StringOrUndefined) {
    const button = parent.appendChild(document.createElement('button'));
    if (textContent) button.textContent = textContent;
    if (className) button.className = className;
    if (id) button.id = id;
    return button;
}
export interface AnchorObject{
    area: HTMLDivElement;
    span: HTMLSpanElement;
    object: HTMLAnchorElement;
}
export function createLink(parent: HTMLDivElement, innerText: string, href: StringOrUndefined, download: StringOrUndefined, areaClassName: StringOrUndefined, areaId: StringOrUndefined, className: StringOrUndefined, id: StringOrUndefined, spanClassName: StringOrUndefined, spanId: StringOrUndefined){
    const anchor: AnchorObject = {
        area: createElement(parent, 'div', areaClassName, areaId, undefined, undefined),
        span: undefined,
        object: undefined
    }
    anchor.object = createElement(anchor.area, 'a', className, id, undefined, undefined);
    anchor.span = createElement(anchor.object, 'span', spanClassName, spanId, innerText, undefined);
    if (download) anchor.object.download = download;
    if (href) anchor.object.href = href;

    return anchor;
}

export function createElement<T extends keyof HTMLElementTagNameMap>(parent: HTMLElement, type: T, className: StringOrUndefined, id: StringOrUndefined, innerText: StringOrUndefined, textContent: StringOrUndefined){
    const element = parent.appendChild(document.createElement(type));
    if (className) element.className = className;
    if (id) element.id = id;
    if (textContent) element.textContent = textContent;
    if (innerText) element.innerText = innerText;
    return element;
}

export type StringOrUndefined = string | undefined;
