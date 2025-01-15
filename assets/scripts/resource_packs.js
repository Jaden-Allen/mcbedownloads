import { Downloads } from "./downloads.js";
import { InitializeSortButton, populateList } from "./page.js";
populateList("resource-packs-list", Downloads.ResourcePacks);
InitializeSortButton(Downloads.ResourcePacks);
