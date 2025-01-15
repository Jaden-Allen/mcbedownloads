import { adsOverlay, ClosePopup, InitializeSearchBar, InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads, DownloadType } from "./downloads.js";
 

Downloads.AddTemplate(18, DownloadType.addon); 
Downloads.AddTemplate(18, DownloadType.world); 
Downloads.AddTemplate(18, DownloadType.resource_pack); 
Downloads.AddTemplate(18, DownloadType.skin_pack);

populateList("worlds-list", SortList(Downloads.Worlds, SortType.recentlyUpdated));
InitializeSortButton(Downloads.Worlds, "worlds-list");
InitializeSearchBar(Downloads.Worlds, "worlds-list");

adsOverlay.Initialize();