import { Downloads } from "./downloads.js";
import { nameToId } from "./page.js";

const hash = window.location.hash.slice(1);
const wiki = document.getElementById('wiki') as HTMLElement;




const download = Downloads.All.find(d => nameToId(d.name) === hash)
if (download === undefined){
    const errorText = wiki.appendChild(document.createElement('h1'));
    errorText.textContent = 'Error finding information about this pack...'
    
}
else{
    const thumbnail = wiki.appendChild(document.createElement('img'));
    thumbnail.src = `${download.thumbnail}`
}

