export function populateList(categoryId, items) {
    const closePopupButton = document.getElementById("popup-close-button");
    closePopupButton.addEventListener('click', function (ev) {
        ClosePopup();
        const closeButtonSound = document.getElementById('close-button-audio');
        closeButtonSound.play();
    });
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
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.visibility = 'visible';
}
export function ClosePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.visibility = 'hidden';
}
export function InitializeSortButton(list) {
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
                    populateList("addons-list", SortList(list, SortType.recentlyUpdated));
                    break;
                case "Name (A-Z)":
                    populateList("addons-list", SortList(list, SortType.nameAZ));
                    break;
                case "Name (Z-A)":
                    populateList("addons-list", SortList(list, SortType.nameZA));
                    break;
            }
        }
    });
}
export function InitializeSearchBar(list) {
    upperAreaContent.searchBar.addEventListener('input', function (ev) {
        populateList("addons-list", SortListFromQuery(list, upperAreaContent.searchBar.value));
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
const actionArea = {
    youtubeButton: document.getElementById('youtube-button'),
    twitchButton: document.getElementById('twitch-button'),
    downloadButton: document.getElementById('download-button')
};
export function InitializeAdsPage() {
    actionArea.youtubeButton.addEventListener('click', function (ev) {
        StartRewardTimer();
    });
    actionArea.twitchButton.addEventListener('click', function (ev) {
        StartRewardTimer();
    });
}
export function StartRewardTimer() {
    setTimeout(() => {
        hasCompletedAction = true;
        const completeActionsText = document.getElementById('complete-actions-text');
        completeActionsText.textContent = "Action completed!";
        actionArea.downloadButton.disabled = false;
    }, 5000);
}
export function createDownloadButton(href, innerText, parent, download) {
    const link = document.createElement('button');
    link.className = 'grid-item-download-button';
    actionArea.downloadButton.addEventListener('click', function (ev) {
        const _link = document.createElement('a');
        _link.href = href;
        _link.download = download;
        _link.click();
        _link.remove();
    });
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
