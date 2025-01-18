import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList } from "./page.js";
import { Downloads } from "./downloads.js";
const categoryId = 'worlds-list';
populateList(categoryId, Downloads.Worlds);
InitializeSortButton(Downloads.Worlds, categoryId);
InitializeSearchBar(Downloads.Worlds, categoryId);
adsOverlay.Initialize();
