import { Downloads } from "./downloads.js";
import { adsOverlay, InitializeSortButton, populateList } from "./page.js";
populateList("skin-packs-list", Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks);
adsOverlay.Initialize();
