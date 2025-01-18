import { Downloads } from "./downloads.js";
import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList } from "./page.js";
const categoryId = 'resource-packs-list';
populateList(categoryId, Downloads.ResourcePacks);
InitializeSortButton(Downloads.ResourcePacks, categoryId);
InitializeSearchBar(Downloads.ResourcePacks, categoryId);
adsOverlay.Initialize();
