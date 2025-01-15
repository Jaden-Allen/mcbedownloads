import { Downloads } from "./downloads";
import { adsOverlay, InitializeSortButton, populateList } from "./page";
populateList("skin-packs-list", Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks);
adsOverlay.Initialize();
