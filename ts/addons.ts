import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads, DownloadType } from "./downloads.js";

const categoryId = 'addons-list';

populateList(categoryId, Downloads.Addons);
InitializeSortButton(Downloads.Addons, categoryId);
InitializeSearchBar(Downloads.Addons, categoryId);


adsOverlay.Initialize();