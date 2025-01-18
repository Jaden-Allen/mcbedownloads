export function createText(parent, tagName, innerText, areaClassName, areaId = undefined, className = undefined, id) {
    const textObject = {
        area: createElement(parent, 'div', areaClassName, areaId, undefined, undefined),
        object: undefined
    };
    textObject.object = createElement(textObject.area, tagName, className, id, innerText, undefined);
    return textObject;
}
export function createImage(parent, source, alt, areaClassName, areaId, className, id) {
    const imageObject = {
        area: createElement(parent, 'div', areaClassName, areaId, undefined, undefined),
        object: undefined
    };
    imageObject.object = createElement(imageObject.area, 'img', className, id, undefined, undefined);
    imageObject.object.src = source;
    imageObject.object.alt = alt;
    return imageObject;
}
export function createButton(parent, textContent, className, id) {
    const button = parent.appendChild(document.createElement('button'));
    if (textContent)
        button.textContent = textContent;
    if (className)
        button.className = className;
    if (id)
        button.id = id;
    return button;
}
export function createLink(parent, innerText, href, download, areaClassName, areaId, className, id, spanClassName, spanId) {
    const anchor = {
        area: createElement(parent, 'div', areaClassName, areaId, undefined, undefined),
        span: undefined,
        object: undefined
    };
    anchor.object = createElement(anchor.area, 'a', className, id, undefined, undefined);
    anchor.span = createElement(anchor.object, 'span', spanClassName, spanId, innerText, undefined);
    if (download)
        anchor.object.download = download;
    if (href)
        anchor.object.href = href;
    return anchor;
}
export function createElement(parent, type, className, id, innerText, textContent) {
    const element = parent.appendChild(document.createElement(type));
    if (className)
        element.className = className;
    if (id)
        element.id = id;
    if (textContent)
        element.textContent = textContent;
    if (innerText)
        element.innerText = innerText;
    return element;
}
