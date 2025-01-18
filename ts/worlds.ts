import { adsOverlay, ClosePopup, InitializeSearchBar, InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads, DownloadType } from "./downloads.js";
 

const categoryId = 'worlds-list';

populateList(categoryId, Downloads.Worlds);
InitializeSortButton(Downloads.Worlds, categoryId);
InitializeSearchBar(Downloads.Worlds, categoryId);

adsOverlay.Initialize();