import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads } from "./downloads.js";
populateList("worlds-list", SortList(Downloads.Worlds, SortType.recentlyUpdated));
InitializeSortButton(Downloads.Worlds, "worlds-list");
InitializeSearchBar(Downloads.Worlds, "worlds-list");
adsOverlay.Initialize();
