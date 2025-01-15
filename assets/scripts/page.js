export function populateList(categoryId, items) {
    const grid = document.getElementById(categoryId);
    grid.innerHTML = "";
    items.forEach((item) => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        grid.appendChild(gridItem);
        const imageContainer = document.createElement('div');
        imageContainer.className = "image-container";
        gridItem.appendChild(imageContainer);
        const thumbnail = document.createElement('img');
        thumbnail.className = 'thumbnail';
        thumbnail.src = `${item.thumbnail}`;
        thumbnail.alt = `${item.name}`;
        imageContainer.appendChild(thumbnail);
        const itemName = document.createElement('p');
        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = `${item.name}`;
        itemName.appendChild(itemNameSpan);
        gridItem.appendChild(itemName);
        const itemCreator = document.createElement('p');
        const itemCreatorSpan = document.createElement('span');
        itemCreatorSpan.textContent = `${item.creator}`;
        itemCreator.appendChild(itemCreatorSpan);
        gridItem.appendChild(itemCreator);
        const gridItemFooterLinksDiv = document.createElement('div');
        gridItem.appendChild(gridItemFooterLinksDiv);
        const downloadLink = createDownloadButton(item.filePath, "Download", gridItemFooterLinksDiv, `${nameToId(item.name)}_${item.version}.mcaddon`);
        //const wikiLink = createLink("Wiki", gridItemFooterLinksDiv, item);
    });
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
export const adsOverlay = new AdsOverlay();
export function InitializeSortButton(list, categoryId) {
    const button = document.getElementById('dropdown-button');
    const options = document.getElementById('dropdown-options');
    button.addEventListener('click', () => {
        options.classList.toggle('hidden');
    });
    options.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            button.textContent = target.textContent;
            options.classList.add('hidden');
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
        populateList(categoryId, SortListFromQuery(list, upperAreaContent.searchBar.value));
    });
}
const upperAreaContent = {
    searchBar: document.getElementById('search-bar')
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
export function SortListFromQuery(items, query) {
    return items.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()));
}
export function StartRewardTimer() {
    setTimeout(() => {
        hasCompletedAction = true;
        adsOverlay.completeActionsText.textContent = "Action completed!";
        adsOverlay.downloadButton.disabled = false;
    }, 5000);
}
export function createDownloadButton(href, innerText, parent, download) {
    const link = document.createElement('button');
    link.className = 'grid-item-download-button';
    if (adsOverlay.downloadButton != null) {
        adsOverlay.downloadButton.addEventListener('click', function (ev) {
            const _link = document.createElement('a');
            _link.href = href;
            _link.download = download;
            _link.click();
            _link.remove();
        });
    }
    else {
        console.warn('Download button in the popup area is not found...');
    }
    link.addEventListener('click', function (ev) {
        if (hasCompletedAction) {
            const _link = document.createElement('a');
            _link.href = href;
            _link.download = download;
            _link.click();
            _link.remove();
        }
        else {
            OpenPopup();
        }
    });
    link.innerText = innerText;
    parent.appendChild(link);
    return link;
}
export function nameToId(name) {
    return name.toLowerCase().replace(/\s+/g, '_');
}
