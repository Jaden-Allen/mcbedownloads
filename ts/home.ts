import { Downloads, DownloadType } from "./downloads.js";
import {adsOverlay, populateList, SortList, SortType } from "./page.js";


Downloads.AddTemplate(6, DownloadType.addon); 
Downloads.AddTemplate(6, DownloadType.world); 
Downloads.AddTemplate(6, DownloadType.resource_pack); 
Downloads.AddTemplate(6, DownloadType.skin_pack); 
  
// Populate all categories
populateList("addons-list", SortList(Downloads.Addons, SortType.recentlyUpdated));
populateList("worlds-list", Downloads.Worlds);
populateList("resource-packs-list", Downloads.ResourcePacks);
populateList("skin-packs-list", Downloads.SkinPacks);

adsOverlay.Initialize();