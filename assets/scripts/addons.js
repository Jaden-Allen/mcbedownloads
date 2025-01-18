import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList } from "./page.js";
import { Downloads } from "./downloads.js";
const categoryId = 'addons-list';
populateList(categoryId, Downloads.Addons);
InitializeSortButton(Downloads.Addons, categoryId);
InitializeSearchBar(Downloads.Addons, categoryId);
adsOverlay.Initialize();
