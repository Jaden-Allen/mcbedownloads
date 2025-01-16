export function createPanel(parent, className, id) {
    const panel = parent.appendChild(document.createElement('div'));
    if (className)
        panel.className = className;
    if (id)
        panel.id = id;
    return panel;
}
export function createText(parent, tagName, innerText, areaClassName, areaId, className, id) {
    const textObject = {
        area: parent.appendChild(document.createElement('div')),
        object: undefined
    };
    textObject.object = textObject.area.appendChild(document.createElement(tagName));
    if (areaClassName)
        textObject.area.className = areaClassName;
    if (areaId)
        textObject.area.id = areaId;
    textObject.object.innerText = innerText;
    if (className)
        textObject.object.className = className;
    if (id)
        textObject.object.id = id;
    return textObject;
}
export function createImage(parent, source, alt, areaClassName, areaId, className, id) {
    const imageObject = {
        area: parent.appendChild(document.createElement('div')),
        object: undefined
    };
    imageObject.object = imageObject.area.appendChild(document.createElement('img'));
    if (areaClassName)
        imageObject.area.className = areaClassName;
    if (areaId)
        imageObject.area.id = id + areaId;
    imageObject.object.src = source;
    if (className)
        imageObject.object.className = className;
    if (id)
        imageObject.object.id = id;
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
