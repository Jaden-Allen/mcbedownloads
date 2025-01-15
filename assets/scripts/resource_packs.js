import { Downloads, DownloadType } from "./downloads.js";
import { adsOverlay, InitializeSortButton, populateList } from "./page.js";
Downloads.AddTemplate(18, DownloadType.addon);
Downloads.AddTemplate(18, DownloadType.world);
Downloads.AddTemplate(18, DownloadType.resource_pack);
Downloads.AddTemplate(18, DownloadType.skin_pack);
populateList("resource-packs-list", Downloads.ResourcePacks);
InitializeSortButton(Downloads.ResourcePacks, "resource-packs-list");
adsOverlay.Initialize();
