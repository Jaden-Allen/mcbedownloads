import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads, DownloadType } from "./downloads.js";

Downloads.AddTemplate(18, DownloadType.addon); 
Downloads.AddTemplate(18, DownloadType.world); 
Downloads.AddTemplate(18, DownloadType.resource_pack); 
Downloads.AddTemplate(18, DownloadType.skin_pack); 

const categoryId = 'addons-list';

populateList(categoryId, Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks, categoryId);
InitializeSearchBar(Downloads.SkinPacks, categoryId);


adsOverlay.Initialize();