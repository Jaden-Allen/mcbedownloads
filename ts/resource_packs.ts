import { Downloads } from "./downloads.js";
import { adsOverlay, InitializeSortButton, populateList } from "./page.js";
 
populateList("resource-packs-list", Downloads.ResourcePacks);
InitializeSortButton(Downloads.ResourcePacks);

adsOverlay.Initialize();