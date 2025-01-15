import { Downloads, DownloadType } from "./downloads.js";
import { adsOverlay, InitializeSortButton, populateList } from "./page.js";
Downloads.AddTemplate(18, DownloadType.addon);
Downloads.AddTemplate(18, DownloadType.world);
Downloads.AddTemplate(18, DownloadType.resource_pack);
Downloads.AddTemplate(18, DownloadType.skin_pack);
populateList("skin-packs-list", Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks, "skin-packs-list");
adsOverlay.Initialize();
