import { Downloads } from "./downloads.js";
import { adsOverlay, populateList, SortList, SortType } from "./page.js";
// Populate all categories
populateList("addons-list", SortList(Downloads.Addons, SortType.recentlyUpdated));
populateList("worlds-list", Downloads.Worlds);
populateList("resource-packs-list", Downloads.ResourcePacks);
populateList("skin-packs-list", Downloads.SkinPacks);
adsOverlay.Initialize();
