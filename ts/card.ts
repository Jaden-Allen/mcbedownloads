import { DownloadItem, Downloads } from "./downloads.js";
import { adsOverlay, ClosePopup, ConvertDownloadItemToCorrectedPaths, CorrectPath, hasCompletedAction, InstantDownload, nameToId, OpenPopup } from "./page.js";

export function createCard(categoryId: string, _item: DownloadItem, grid: HTMLDivElement) {
    const item = ConvertDownloadItemToCorrectedPaths(_item);

    const card = document.createElement("div");
    card.className = "card";
    grid.appendChild(card);

    const thumbnail = document.createElement("img");
    thumbnail.src = item.thumbnail;
    thumbnail.alt = item.name;
    card.appendChild(thumbnail);

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    card.appendChild(cardContent);

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = item.name;
    cardContent.appendChild(title);

    const teaser = document.createElement("div");
    teaser.className = "teaser";
    teaser.innerText = item.teaser;
    cardContent.appendChild(teaser);

    const author = document.createElement("div");
    author.className = "meta";
    author.innerText = `Author: ${item.creator}`;
    cardContent.appendChild(author);

    const version = document.createElement('div');
    version.className = "meta";
    version.innerText = `Version: ${item.version}`;
    cardContent.appendChild(version);

    const links = document.createElement("div");
    links.className = "links";
    cardContent.appendChild(links);

    const downloadLink = document.createElement("a");
    downloadLink.innerText = "Download";
    downloadLink.href = "#"; // optional, just to act like a link
    downloadLink.onclick = function (e) {
        e.preventDefault();
        if (hasCompletedAction) {
            InstantDownload(item.filePath, Downloads.getDownloadString(item));
        } else {
            OpenPopup();
            adsOverlay.downloadButton.addEventListener('click', function (ev) {
                ClosePopup();
                InstantDownload(item.filePath, Downloads.getDownloadString(item));
            }, { once: true }); // prevents multiple triggers
        }
    };
    links.appendChild(downloadLink);

    const wikiLink = document.createElement("a");
    wikiLink.innerText = "Wiki";
    wikiLink.href = CorrectPath(`/wiki/#${nameToId(item.name)}`);
    links.appendChild(wikiLink);
}

