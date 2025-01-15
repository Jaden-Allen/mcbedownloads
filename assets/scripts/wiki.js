import { Downloads, DownloadType } from "./downloads.js";
import { nameToId } from "./page.js";
Downloads.AddTemplate(1, DownloadType.addon);
const hash = window.location.hash.slice(1);
const wiki = document.getElementById('wiki_panel');
const download = Downloads.All.find(d => nameToId(d.name) === hash);
function populateWiki() {
    if (download === undefined) {
        const errorText = wiki.appendChild(document.createElement('h1'));
        errorText.textContent = 'Error finding information about this pack...';
        return;
    }
    else {
        const thumbnail = wiki.appendChild(document.createElement('img'));
        thumbnail.src = `${download.thumbnail}`;
    }
}
populateWiki();
