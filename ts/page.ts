import { DownloadItem } from "./downloads.js";


export function populateList(categoryId: string, items: DownloadItem[]): void {
    const grid = document.getElementById(categoryId) as HTMLDivElement;
    grid.innerHTML = "";
    items.forEach((item) => {
        createGridItem(categoryId, item, grid);
        //const wikiLink = createLink("Wiki", gridItemFooterLinksDiv, item);
    });
} 
function createGridItem(categoryId: string, item: DownloadItem, grid: HTMLDivElement){
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

    const itemName = document.createElement('div');
    itemName.className = 'grid-item-name-area';
    const itemNameSpan = document.createElement('span');
    itemNameSpan.className = 'grid-item-name'
    itemNameSpan.textContent = `${item.name}`;
    itemName.appendChild(itemNameSpan);
    gridItem.appendChild(itemName);

    const itemCreator = document.createElement('div');
    itemCreator.className = 'grid-item-creator-area'
    const itemCreatorSpan = document.createElement('span');
    itemCreatorSpan.textContent = `Creator: ${item.creator}`;
    itemCreatorSpan.className = 'grid-item-creator';
    itemCreator.appendChild(itemCreatorSpan);
    gridItem.appendChild(itemCreator);

    const itemTeaserArea = gridItem.appendChild(document.createElement('div'));
    itemTeaserArea.className = 'grid-item-teaser-area';
    const itemTeaserSpan = document.createElement('span');
    itemTeaserSpan.className = 'grid-item-teaser';
    itemTeaserSpan.textContent = `${item.teaser}`; 
    itemTeaserArea.appendChild(itemTeaserSpan);

    const itemVersionArea = gridItem.appendChild(document.createElement('div'));
    itemVersionArea.className = 'grid-item-version-area';
    const itemVersionSpan = itemVersionArea.appendChild(document.createElement('span'));
    itemVersionSpan.className = 'grid-item-version';
    itemVersionSpan.textContent = `Version: ${item.version}`

    const gridItemFooterLinksDiv = document.createElement('div');
    gridItem.appendChild(gridItemFooterLinksDiv);

    
    const downloadLink = createDownloadButton(item.filePath, "Download", gridItemFooterLinksDiv, `${nameToId(item.name)}_${item.version}.mcaddon`)
    const wikiLinkArea = gridItem.appendChild(document.createElement('div'));
    wikiLinkArea.className = 'grid-item-wiki-link-area'
    const wikiLink = wikiLinkArea.appendChild(document.createElement('a'));
    wikiLink.className = 'grid-item-wiki-link';
    wikiLink.href = `wiki.html#${nameToId(item.name)}`;
    wikiLink.text = 'Wiki'
}

export function OpenPopup(){
    adsOverlay.overlay.style.visibility = 'visible';
}
export function ClosePopup(){
    adsOverlay.overlay.style.visibility = 'hidden'
}



class AdsOverlay{
    private _overlay: HTMLDivElement = undefined;
    private _popupContent: HTMLDivElement = undefined;
    private _closePopupButton: HTMLButtonElement = undefined;
    private _closePopupButtonImage: HTMLImageElement = undefined;
    private _closePopupButtonAudio: HTMLAudioElement = undefined;
    private _completeActionsText: HTMLHeadingElement = undefined;
    private _actionArea: HTMLDivElement = undefined;
    private _youtubeButton: HTMLAnchorElement = undefined;
    private _twitchButton: HTMLAnchorElement = undefined;
    private _downloadButton: HTMLButtonElement = undefined;

    public constructor(){}

    public get overlay(){
        if (this._overlay === undefined){
            this.Initialize();
        }
        return this._overlay;
    }
    public get popupContent(){
        if (this._popupContent === undefined){
            this.Initialize();
        }
        return this._popupContent;
    }
    public get closePopupButton(){
        if (this._closePopupButton === undefined){
            this.Initialize();
        }
        return this._closePopupButton;
    }
    public get closePopupButtonImage(){
        if (this._closePopupButtonImage === undefined){
            this.Initialize();
        }
        return this._closePopupButtonImage;
    }
    public get closePopupButtonAudio(){
        if (this._closePopupButtonAudio === undefined){
            this.Initialize();
        }
        return this._closePopupButtonAudio;
    }
    public get completeActionsText(){
        if (this._completeActionsText === undefined){
            this.Initialize();
        }
        return this._completeActionsText;
    }
    public get actionArea(){
        if (this._actionArea === undefined){
            this.Initialize();
        }
        return this._actionArea;
    }
    public get youtubeButton(){
        if (this._youtubeButton === undefined){
            this.Initialize();
        }
        return this._youtubeButton;
    }
    public get twitchButton(){
        if (this._twitchButton === undefined){
            this.Initialize();
        }
        return this._twitchButton;
    }
    public get downloadButton(){
        if (this._downloadButton === undefined){
            this.Initialize();
        }
        return this._downloadButton;
    }
    public Initialize(){
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
       
        this._twitchButton = this._actionArea.appendChild(AdsOverlay.GetNewActionAreaButton("https://www.twitch.tv", true, 'twitch-button', 'fab fa-twitch', "Follow"))
        
        this._downloadButton = this._actionArea.appendChild(document.createElement('button'));
        this._downloadButton.className = 'download-button';
        this._downloadButton.id = 'download-button';
        this._downloadButton.disabled = true;
        this._downloadButton.textContent = "Download";

        AdsOverlay.HandleEventListeners();
    }

    private static HandleEventListeners(){
        adsOverlay.youtubeButton.addEventListener('click', function(ev){
            StartRewardTimer();
        })
        adsOverlay.twitchButton.addEventListener('click', function(ev){
            StartRewardTimer();
        })
        adsOverlay.closePopupButton.addEventListener('click', function(ev){
            ClosePopup();
            adsOverlay.closePopupButtonAudio.play();
        })
    }
    private static GetNewActionAreaButton(href: string, opensNewTab: boolean, id: string, className: string, buttonText: string){
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
export function InitializeSortButton(list: DownloadItem[], categoryId: string){
    
    dropdownButton.addEventListener('click', () => {
        dropdownOptions.style.display = 'block'
    });
    
    dropdownOptions.addEventListener('click', (event) => {
        const target = event.target as HTMLElement
        if (target.tagName === 'LI') {
            dropdownButton.textContent = target.textContent;
            dropdownOptions.style.display = 'none'
            const value = target.getAttribute('data-value');
            const text = target.textContent;
    
            switch(text){
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

export function InitializeSearchBar(list: DownloadItem[], categoryId: string){
    upperAreaContent.searchBar.addEventListener('input', function(ev){
        if (upperAreaContent.searchBar.value.startsWith('@')){
            populateList(categoryId, SortListFromCreatorQuery(list, upperAreaContent.searchBar.value.substring(1)));
        } 
        else if (upperAreaContent.searchBar.value.startsWith('q.')){
            let [key, value] = upperAreaContent.searchBar.value.split("=");
            if (key != undefined && value != undefined){
                console.warn(key + ', ' + value)
                populateList(categoryId, SortListFromQuery(list, key, value));
            }
            
        }
        else{
            populateList(categoryId, SortListFromNameQuery(list, upperAreaContent.searchBar.value));
        }
    })
    InitializeCommands(list, categoryId);
}
function UpdateSearchBar(list: DownloadItem[], categoryId: string){
    if (upperAreaContent.searchBar.value.startsWith('@')){
        populateList(categoryId, SortListFromCreatorQuery(list, upperAreaContent.searchBar.value.substring(1)));
    } 
    else if (upperAreaContent.searchBar.value.startsWith('q.')){
        let [key, value] = upperAreaContent.searchBar.value.split("=");
        if (key != undefined && value != undefined){
            console.warn(key + ', ' + value)
            populateList(categoryId, SortListFromQuery(list, key, value));
        }
        
    }
    else{
        populateList(categoryId, SortListFromNameQuery(list, upperAreaContent.searchBar.value));
    }
}
const commands = ["q.name=", "q.last_update=", "q.date_created="];
function InitializeCommands(list: DownloadItem[], categoryId: string){
    upperAreaContent.searchBar.addEventListener('click', function(ev){
        upperAreaContent.resultsList.style.display = ""
    })
    upperAreaContent.searchBar.addEventListener('input', function(ev){
        upperAreaContent.resultsList.style.display = ""
        const inputValue = this.value.toLowerCase();
        const filteredCommands = commands.filter(command => command.toLowerCase().includes(inputValue));
        const allNames = list.map(item => item.name);
        const filteredNames = allNames.filter(name => name.toLowerCase().includes(inputValue));
        
        const autoCompletions = filteredNames;
        filteredCommands.forEach(command => autoCompletions.push(command));

        if (inputValue.startsWith('@')){
            const filteredCreators = list.map(item => item.creator).filter(item => item.toLowerCase().includes(inputValue.replace("@", "")))
            filteredCreators.forEach(creator => autoCompletions.push("@" + creator));
        }

        const filteredNameQueries = inputValue.startsWith('q.name=') ? list.map(item => item.name).filter(item => item.toLowerCase().includes(inputValue.replace('q.name=', ''))) : []
        const filteredLastUpdateQueries = inputValue.startsWith('q.last_update=') ? list.map(item => item.lastUpdated).filter(item => item.toLowerCase().includes(inputValue.replace('q.last_update=', ''))) : []
        const filteredDateCreatedQueries = inputValue.startsWith('q.date_created=') ? list.map(item => item.creationDate).filter(item => item.toLowerCase().includes(inputValue.replace('q.date_created=', ''))) : []

        filteredNameQueries.forEach(query => {autoCompletions.push("q.name=" + query)});
        filteredLastUpdateQueries.forEach(query => {autoCompletions.push("q.last_update=" + query)});
        filteredDateCreatedQueries.forEach(query => {autoCompletions.push("q.date_created=" + query)});

        const resultsList = document.getElementById('autocomplete-results')
        resultsList.innerHTML = '';


        autoCompletions.forEach(autoCompletion => {
            const listItem = document.createElement("li");
            listItem.textContent = autoCompletion;
            listItem.tabIndex = 0;
            listItem.addEventListener("click", function() {
                
              upperAreaContent.searchBar.value = autoCompletion;
              resultsList.innerHTML = ""; // Hide suggestions after selection

              UpdateSearchBar(list, categoryId);

            });
            resultsList.appendChild(listItem);
        });
        resultsList.style.display = autoCompletions.length > 0 ? "" : "none";
    })

    document.addEventListener("click", function(event) {
        const target = event.target as Node;
        if (!upperAreaContent.searchBar.contains(target) && !upperAreaContent.resultsList.contains(target)) {
            upperAreaContent.resultsList.style.display = "none"; // Hide the list if clicking outside
        }
        if (!dropdownOptions.contains(target) && !dropdownButton.contains(target)) {
            dropdownOptions.style.display = "none"; // Hide the list if clicking outside
        }
    });
}

const upperAreaContent = {
    searchBar: document.getElementById('search-bar') as HTMLInputElement,
    resultsList: document.getElementById('autocomplete-results') as HTMLInputElement
}

export enum SortType{
    recentlyUpdated,
    nameAZ,
    nameZA,
}
export let hasCompletedAction = false;
export function SortList(items: DownloadItem[], sortType: SortType){
    return items.sort((a, b) => sortType === SortType.nameAZ ? a.name.localeCompare(b.name)
     : sortType === SortType.nameZA ? b.name.localeCompare(a.name)
     : sortType === SortType.recentlyUpdated ?  new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
     : a.name.localeCompare(b.name))
}
export function SortListFromQuery(items: DownloadItem[], query: string, value: string){
    switch(query){
        case 'q.name':
        return items.filter((a) => a.name.toLowerCase().includes(value.toLowerCase()));
        case 'q.last_update':
        return items.filter((a) => a.lastUpdated.toLowerCase().includes(value.toLowerCase()));
        case 'q.date_created':
        return items.filter((a) => a.creationDate.toLowerCase().includes(value.toLowerCase()));
        default: return [];
    }
}
export function SortListFromNameQuery(items: DownloadItem[], query: string){
    return items.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()));
}
export function SortListFromCreatorQuery(items: DownloadItem[], query: string){
    return items.filter((a) => a.creator.toLowerCase().includes(query.toLowerCase()));
}
export function StartRewardTimer(){
    setTimeout(() =>{
        hasCompletedAction = true;
        adsOverlay.completeActionsText.textContent = "Action completed!"
        adsOverlay.downloadButton.disabled = false;
    }, 5000)
}

export function createDownloadButton(href: string, innerText: string, parent: HTMLDivElement, download: string): HTMLButtonElement{
    const link = document.createElement('button');
    link.className = 'grid-item-download-button'
    
    if (adsOverlay.downloadButton != null){
        adsOverlay.downloadButton.addEventListener('click', function(ev){
            const _link = document.createElement('a');
            _link.href = href;
            _link.download = download;
            _link.click();
            _link.remove();
        })
    }
    else{
        console.warn('Download button in the popup area is not found...');
    }
    link.addEventListener('click', function(ev){
        if (hasCompletedAction){
            const _link = document.createElement('a');
            _link.href = href;
            _link.download = download;
            _link.click();
            _link.remove();
        }
        else{
            OpenPopup();
        }
    })
    link.innerText = innerText;
    parent.appendChild(link);
    return link;
}
export function nameToId(name: string){
    return name.toLowerCase().replace(/\s+/g, '_');
}

