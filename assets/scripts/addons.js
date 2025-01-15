import { InitializeSortButton, populateList, SortList, SortType } from "./page.js";
import { Downloads } from "./downloads.js";
populateList("addons-list", SortList(Downloads.Addons, SortType.recentlyUpdated));
InitializeSortButton(Downloads.Addons);
