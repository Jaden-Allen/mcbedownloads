import { Downloads } from "./downloads";
import { InitializeSortButton, populateList } from "./page";
populateList("skin-packs-list", Downloads.SkinPacks);
InitializeSortButton(Downloads.SkinPacks);
