import { adsOverlay, InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads, DownloadType } from "./downloads.js";

Downloads.AddTemplate(18, DownloadType.addon); 
Downloads.AddTemplate(18, DownloadType.world); 
Downloads.AddTemplate(18, DownloadType.resource_pack); 
Downloads.AddTemplate(18, DownloadType.skin_pack); 

populateList("addons-list", SortList(Downloads.Addons, SortType.recentlyUpdated));
InitializeSortButton(Downloads.Addons, "addons-list");


adsOverlay.Initialize();