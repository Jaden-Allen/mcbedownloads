import { Downloads, DownloadType } from "./downloads.js";
import { adsOverlay, InitializeSearchBar, InitializeSortButton, populateList } from "./page.js";

Downloads.AddTemplate(18, DownloadType.addon);
Downloads.AddTemplate(18, DownloadType.world);
Downloads.AddTemplate(18, DownloadType.resource_pack);
Downloads.AddTemplate(18, DownloadType.skin_pack);

const categoryId = 'skin-packs-list';

populateList(categoryId, Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks, categoryId);
InitializeSearchBar(Downloads.SkinPacks, categoryId);

adsOverlay.Initialize();