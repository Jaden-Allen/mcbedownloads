import { Downloads } from "./downloads.js";
import { createElement, createImage, createLink, createText } from "./objects.js";
export function populateList(categoryId, items) {
    const grid = document.getElementById(categoryId);
    grid.innerHTML = "";
    items.forEach((item) => {
        createGridItem(categoryId, item, grid);
        //const wikiLink = createLink("Wiki", gridItemFooterLinksDiv, item);
    });
}
function createGridItem(categoryId, item, grid) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    grid.appendChild(gridItem);
    const thumbnail = createImage(gridItem, item.thumbnail, item.name, 'grid-element-item thumbnail-area', undefined, undefined, undefined);
    const name = createText(gridItem, 'p', item.name, 'grid-element-item name-area', undefined, undefined, undefined);
    const teaser = createText(gridItem, 'p', item.teaser, 'grid-element-item teaser-area', undefined, undefined, undefined);
    const creator = createText(gridItem, 'p', `Creator: ${item.creator}`, 'grid-element-item creator-area', undefined, undefined, undefined);
    const version = createText(gridItem, 'p', `Version: ${item.version}`, 'grid-element-item version-area', undefined, undefined, undefined);
    const downloadLink = createLink(gridItem, 'Download', undefined, undefined, 'grid-element-item element-download-link', undefined, undefined, undefined, undefined, undefined);
    downloadLink.object.addEventListener('click', function (ev) {
        if (hasCompletedAction) {
            InstantDownload(item.filePath, Downloads.getDownloadString(item));
            return;
        }
        else {
            OpenPopup();
            adsOverlay.downloadButton.addEventListener('click', function (ev) {
                ClosePopup();
                InstantDownload(item.filePath, Downloads.getDownloadString(item));
            });
        }
    });
    const wikiLink = createLink(gridItem, 'Wiki', `wiki.html#${nameToId(item.name)}`, undefined, 'grid-element-item element-wiki-link', undefined, undefined, undefined, undefined, undefined);
}
function InstantDownload(href, download) {
    const element = createElement(document.body, 'a', undefined, undefined, undefined, undefined);
    element.href = href;
    element.download = download;
    element.click();
    element.remove();
}
export function OpenPopup() {
    adsOverlay.overlay.style.visibility = 'visible';
}
export function ClosePopup() {
    adsOverlay.overlay.style.visibility = 'hidden';
}
class AdsOverlay {
    constructor() {
        this._overlay = undefined;
        this._popupContent = undefined;
        this._closePopupButton = undefined;
        this._closePopupButtonImage = undefined;
        this._closePopupButtonAudio = undefined;
        this._completeActionsText = undefined;
        this._actionArea = undefined;
        this._youtubeButton = undefined;
        this._twitchButton = undefined;
        this._downloadButton = undefined;
    }
    get overlay() {
        if (this._overlay === undefined) {
            this.Initialize();
        }
        return this._overlay;
    }
    get popupContent() {
        if (this._popupContent === undefined) {
            this.Initialize();
        }
        return this._popupContent;
    }
    get closePopupButton() {
        if (this._closePopupButton === undefined) {
            this.Initialize();
        }
        return this._closePopupButton;
    }
    get closePopupButtonImage() {
        if (this._closePopupButtonImage === undefined) {
            this.Initialize();
        }
        return this._closePopupButtonImage;
    }
    get closePopupButtonAudio() {
        if (this._closePopupButtonAudio === undefined) {
            this.Initialize();
        }
        return this._closePopupButtonAudio;
    }
    get completeActionsText() {
        if (this._completeActionsText === undefined) {
            this.Initialize();
        }
        return this._completeActionsText;
    }
    get actionArea() {
        if (this._actionArea === undefined) {
            this.Initialize();
        }
        return this._actionArea;
    }
    get youtubeButton() {
        if (this._youtubeButton === undefined) {
            this.Initialize();
        }
        return this._youtubeButton;
    }
    get twitchButton() {
        if (this._twitchButton === undefined) {
            this.Initialize();
        }
        return this._twitchButton;
    }
    get downloadButton() {
        if (this._downloadButton === undefined) {
            this.Initialize();
        }
        return this._downloadButton;
    }
    Initialize() {
        this._overlay = document.body.appendChild(document.createElement('div'));
        this._overlay.className = 'popup-overlay';
        this._overlay.id = 'popup-overlay';
        this._overlay.style.visibility = 'hidden';
        this._popupContent = this._overlay.appendChild(document.createElement('div'));
        this._popupContent.className = 'popup-content';
        this._closePopupButton = this._popupContent.appendChild(document.createElement('button'));
        this._closePopupButton.className = 'popup-close-button';
        this._closePopupButton.id = 'popup-close-button';
        this._closePopupButtonImage = this._closePopupButton.appendChild(document.createElement('img'));
        this._closePopupButtonImage.src = 'assets/images/ui/close_button_default.png';
        this._closePopupButtonAudio = this._closePopupButton.appendChild(document.createElement('audio'));
        this._closePopupButtonAudio.id = 'close-button-audio';
        this._closePopupButtonAudio.src = 'assets/sounds/ui_button.mp3';
        this._completeActionsText = this._popupContent.appendChild(document.createElement('h2'));
        this._completeActionsText.id = 'complete-actions-text';
        this._completeActionsText.textContent = 'Complete One of the following actions';
        this._actionArea = this._popupContent.appendChild(document.createElement('div'));
        this._actionArea.className = 'action-area';
        this._youtubeButton = this._actionArea.appendChild(AdsOverlay.GetNewActionAreaButton("https://www.youtube.com/@JadenAllen?sub_confirmation=1", true, 'youtube-button', 'fab fa-youtube', "Subscribe"));
        this._twitchButton = this._actionArea.appendChild(AdsOverlay.GetNewActionAreaButton("https://www.twitch.tv", true, 'twitch-button', 'fab fa-twitch', "Follow"));
        this._downloadButton = this._actionArea.appendChild(document.createElement('button'));
        this._downloadButton.className = 'download-button';
        this._downloadButton.id = 'download-button';
        this._downloadButton.disabled = true;
        this._downloadButton.textContent = "Download";
        AdsOverlay.HandleEventListeners();
    }
    static HandleEventListeners() {
        adsOverlay.youtubeButton.addEventListener('click', function (ev) {
            StartRewardTimer();
        });
        adsOverlay.twitchButton.addEventListener('click', function (ev) {
            StartRewardTimer();
        });
        adsOverlay.closePopupButton.addEventListener('click', function (ev) {
            ClosePopup();
            adsOverlay.closePopupButtonAudio.play();
        });
    }
    static GetNewActionAreaButton(href, opensNewTab, id, className, buttonText) {
        const hyperlink = document.createElement('a');
        hyperlink.href = href;
        hyperlink.target = opensNewTab ? "_blank" : '';
        hyperlink.id = id;
        hyperlink.className = id;
        const hyperlinkIcon = document.createElement('i');
        hyperlinkIcon.className = className;
        hyperlink.appendChild(hyperlinkIcon);
        hyperlink.appendChild(document.createTextNode(buttonText));
        return hyperlink;
    }
}
const dropdownButton = document.getElementById('dropdown-button');
const dropdownOptions = document.getElementById('dropdown-options');
export const adsOverlay = new AdsOverlay();
export function InitializeSortButton(list, categoryId) {
    dropdownButton.addEventListener('click', () => {
        dropdownOptions.style.display = 'block';
    });
    dropdownOptions.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            dropdownButton.textContent = target.textContent;
            dropdownOptions.style.display = 'none';
            const value = target.getAttribute('data-value');
            const text = target.textContent;
            switch (text) {
                case "Recently Updated":
                    populateList(categoryId, SortList(list, SortType.recentlyUpdated));
                    break;
                case "Name (A-Z)":
                    populateList(categoryId, SortList(list, SortType.nameAZ));
                    break;
                case "Name (Z-A)":
                    populateList(categoryId, SortList(list, SortType.nameZA));
                    break;
            }
        }
    });
}
export function InitializeSearchBar(list, categoryId) {
    upperAreaContent.searchBar.addEventListener('input', function (ev) {
        if (upperAreaContent.searchBar.value.startsWith('@')) {
            populateList(categoryId, SortListFromCreatorQuery(list, upperAreaContent.searchBar.value.substring(1)));
        }
        else if (upperAreaContent.searchBar.value.startsWith('q.')) {
            let [key, value] = upperAreaContent.searchBar.value.split("=");
            if (key != undefined && value != undefined) {
                console.warn(key + ', ' + value);
                populateList(categoryId, SortListFromQuery(list, key, value));
            }
        }
        else {
            populateList(categoryId, SortListFromNameQuery(list, upperAreaContent.searchBar.value));
        }
    });
    InitializeCommands(list, categoryId);
}
function UpdateSearchBar(list, categoryId) {
    if (upperAreaContent.searchBar.value.startsWith('@')) {
        populateList(categoryId, SortListFromCreatorQuery(list, upperAreaContent.searchBar.value.substring(1)));
    }
    else if (upperAreaContent.searchBar.value.startsWith('q.')) {
        let [key, value] = upperAreaContent.searchBar.value.split("=");
        if (key != undefined && value != undefined) {
            console.warn(key + ', ' + value);
            populateList(categoryId, SortListFromQuery(list, key, value));
        }
    }
    else {
        populateList(categoryId, SortListFromNameQuery(list, upperAreaContent.searchBar.value));
    }
}
const commands = ["q.name=", "q.last_update=", "q.date_created="];
function InitializeCommands(list, categoryId) {
    upperAreaContent.searchBar.addEventListener('click', function (ev) {
        upperAreaContent.resultsList.style.display = "";
    });
    upperAreaContent.searchBar.addEventListener('input', function (ev) {
        upperAreaContent.resultsList.style.display = "";
        const inputValue = this.value.toLowerCase();
        const filteredCommands = commands.filter(command => command.toLowerCase().includes(inputValue));
        const allNames = list.map(item => item.name);
        const filteredNames = allNames.filter(name => name.toLowerCase().includes(inputValue));
        const autoCompletions = filteredNames;
        filteredCommands.forEach(command => autoCompletions.push(command));
        if (inputValue.startsWith('@')) {
            const filteredCreators = list.map(item => item.creator).filter(item => item.toLowerCase().includes(inputValue.replace("@", "")));
            filteredCreators.forEach(creator => autoCompletions.push("@" + creator));
        }
        const filteredNameQueries = inputValue.startsWith('q.name=') ? list.map(item => item.name).filter(item => item.toLowerCase().includes(inputValue.replace('q.name=', ''))) : [];
        const filteredLastUpdateQueries = inputValue.startsWith('q.last_update=') ? list.map(item => item.lastUpdated).filter(item => item.toLowerCase().includes(inputValue.replace('q.last_update=', ''))) : [];
        const filteredDateCreatedQueries = inputValue.startsWith('q.date_created=') ? list.map(item => item.creationDate).filter(item => item.toLowerCase().includes(inputValue.replace('q.date_created=', ''))) : [];
        filteredNameQueries.forEach(query => { autoCompletions.push("q.name=" + query); });
        filteredLastUpdateQueries.forEach(query => { autoCompletions.push("q.last_update=" + query); });
        filteredDateCreatedQueries.forEach(query => { autoCompletions.push("q.date_created=" + query); });
        const resultsList = document.getElementById('autocomplete-results');
        resultsList.innerHTML = '';
        autoCompletions.forEach(autoCompletion => {
            const listItem = document.createElement("li");
            listItem.textContent = autoCompletion;
            listItem.tabIndex = 0;
            listItem.addEventListener("click", function () {
                upperAreaContent.searchBar.value = autoCompletion;
                resultsList.innerHTML = ""; // Hide suggestions after selection
                UpdateSearchBar(list, categoryId);
            });
            resultsList.appendChild(listItem);
        });
        resultsList.style.display = autoCompletions.length > 0 ? "" : "none";
    });
    document.addEventListener("click", function (event) {
        const target = event.target;
        if (!upperAreaContent.searchBar.contains(target) && !upperAreaContent.resultsList.contains(target)) {
            upperAreaContent.resultsList.style.display = "none"; // Hide the list if clicking outside
        }
        if (!dropdownOptions.contains(target) && !dropdownButton.contains(target)) {
            dropdownOptions.style.display = "none"; // Hide the list if clicking outside
        }
    });
}
const upperAreaContent = {
    searchBar: document.getElementById('search-bar'),
    resultsList: document.getElementById('autocomplete-results')
};
export var SortType;
(function (SortType) {
    SortType[SortType["recentlyUpdated"] = 0] = "recentlyUpdated";
    SortType[SortType["nameAZ"] = 1] = "nameAZ";
    SortType[SortType["nameZA"] = 2] = "nameZA";
})(SortType || (SortType = {}));
export let hasCompletedAction = false;
export function SortList(items, sortType) {
    return items.sort((a, b) => sortType === SortType.nameAZ ? a.name.localeCompare(b.name)
        : sortType === SortType.nameZA ? b.name.localeCompare(a.name)
            : sortType === SortType.recentlyUpdated ? new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
                : a.name.localeCompare(b.name));
}
export function SortListFromQuery(items, query, value) {
    switch (query) {
        case 'q.name':
            return items.filter((a) => a.name.toLowerCase().includes(value.toLowerCase()));
        case 'q.last_update':
            return items.filter((a) => a.lastUpdated.toLowerCase().includes(value.toLowerCase()));
        case 'q.date_created':
            return items.filter((a) => a.creationDate.toLowerCase().includes(value.toLowerCase()));
        default: return [];
    }
}
export function SortListFromNameQuery(items, query) {
    return items.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()));
}
export function SortListFromCreatorQuery(items, query) {
    return items.filter((a) => a.creator.toLowerCase().includes(query.toLowerCase()));
}
export function StartRewardTimer() {
    setTimeout(() => {
        hasCompletedAction = true;
        adsOverlay.completeActionsText.textContent = "Action completed!";
        adsOverlay.downloadButton.disabled = false;
    }, 5000);
}
export function nameToId(name) {
    return name.toLowerCase().replace(/\s+/g, '_');
}
export function versionToId(version) {
    return version.toLowerCase().replace(/\s+/g, '_').replace('/', '_').replace('.', '_');
}
