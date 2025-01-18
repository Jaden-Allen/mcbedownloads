import { Downloads } from "./downloads.js";
import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList } from "./page.js";
const categoryId = 'skin-packs-list';
populateList(categoryId, Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks, categoryId);
InitializeSearchBar(Downloads.SkinPacks, categoryId);
adsOverlay.Initialize();
