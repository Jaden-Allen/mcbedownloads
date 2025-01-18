import { nameToId, versionToId } from "./page.js";
export var DownloadType;
(function (DownloadType) {
    DownloadType[DownloadType["addon"] = 0] = "addon";
    DownloadType[DownloadType["world"] = 1] = "world";
    DownloadType[DownloadType["resource_pack"] = 2] = "resource_pack";
    DownloadType[DownloadType["skin_pack"] = 3] = "skin_pack";
})(DownloadType || (DownloadType = {}));
class DownloadsManager {
    constructor() {
        this._all = [
            {
                name: 'Energy n More',
                teaser: 'Have you ever played java edition minecraft and wished you could have power on bedrock edition? Well now you can, this addon adds new machines, and generators to the game! Such as the water mill and the windmill which will generate electricity!',
                body: 'As a java edition fan and a fan of Basic Machinery by Vatonage available here. I decided to make a power mod as well. I was playing with basic machinery only to realize the items I needed or wanted were not available to get via Basic Machinery. This addon adds new machines and generators that help make survival a bit more interesting.',
                creator: 'Jaden Allen',
                version: '1.0.0',
                thumbnail: 'assets/images/energy_n_more.png',
                creationDate: '1/1/2025',
                lastUpdated: '1/16/2025',
                downloadType: DownloadType.addon,
                filePath: 'assets/files/energy_n_more.mcaddon',
                images: ['assets/images/template_screenshot.png'],
                supportedVersions: {
                    min: '1.16.100',
                    max: 'Latest'
                }
            }
        ];
        this.getFileExtension = (filePath) => {
            const lastDotIndex = filePath.lastIndexOf('.');
            if (lastDotIndex === -1 || filePath.lastIndexOf('/') > lastDotIndex) {
                return ''; // No extension
            }
            return filePath.substring(lastDotIndex);
        };
    }
    get All() {
        return this._all;
    }
    AddTemplate(amount, downloadType) {
        for (let i = 0; i < amount; i++) {
            this._all.push({
                name: 'Template Download',
                creator: 'Jaden Allen',
                thumbnail: 'assets/images/energy_n_more.png',
                teaser: 'This is a teaser',
                filePath: "assets/files/energy_n_more.mcaddon",
                body: "This is a body",
                images: [
                    "assets/images/template_screenshot.png",
                    "assets/images/template_screenshot.png",
                    "assets/images/template_screenshot.png"
                ],
                supportedVersions: {
                    min: "1.16.100",
                    max: "1.21.40"
                },
                version: "1.0.0",
                downloadType: downloadType,
                lastUpdated: "1/1/2025",
                creationDate: "1/1/2025"
            });
        }
    }
    getDownloadString(download) {
        return nameToId(download.name) + "_" + versionToId(download.version) + this.getFileExtension(download.filePath);
    }
    generateRandomPackIconUrl() {
        const randomUrls = [
            'assets/images/ui/pack_icons/pack_thumbnail_00.png',
            'assets/images/ui/pack_icons/pack_thumbnail_01.png',
            'assets/images/ui/pack_icons/pack_thumbnail_02.png',
            'assets/images/ui/pack_icons/pack_thumbnail_03.png',
            'assets/images/ui/pack_icons/pack_thumbnail_04.png',
            'assets/images/ui/pack_icons/pack_thumbnail_05.png',
            'assets/images/ui/pack_icons/pack_thumbnail_06.png',
            'assets/images/ui/pack_icons/pack_thumbnail_07.png',
            'assets/images/ui/pack_icons/pack_thumbnail_08.png',
            'assets/images/ui/pack_icons/pack_thumbnail_09.png',
            'assets/images/ui/pack_icons/pack_thumbnail_10.png',
            'assets/images/ui/pack_icons/pack_thumbnail_11.png',
            'assets/images/ui/pack_icons/pack_thumbnail_12.png',
            'assets/images/ui/pack_icons/pack_thumbnail_13.png',
            'assets/images/ui/pack_icons/pack_thumbnail_14.png',
            'assets/images/ui/pack_icons/pack_thumbnail_15.png'
        ];
        return randomUrls[Math.round((randomUrls.length - 1) * Math.random())];
    }
    generateFormattedDateString(start, end) {
        // Generate a random date between start and end
        const randomDate = this.generateRandomDate(start, end);
        // Extract the day, month index (1-based), and year
        const day = randomDate.getDate(); // Day of the month (1–31)
        const month = randomDate.getMonth() + 1; // Month index (1-based)
        const year = randomDate.getFullYear(); // Full year (e.g., 2025)
        // Format as "DATE/MONTH INDEX/YEAR"
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    }
    generateRandomDate(start, end) {
        const startTime = start.getTime();
        const endTime = end.getTime();
        // Generate a random timestamp between start and end
        const randomTime = Math.random() * (endTime - startTime) + startTime;
        // Return a new Date object
        return new Date(randomTime);
    }
    generateTeaser() {
        // Arrays for teaser components
        const topics = ["Machines", "Energy Cables", "Pipes", "Mining", "Steel", "Ores", "Power Plants", "Innovations"];
        const actions = [
            "Now with",
            "Introducing",
            "Love",
            "Need more",
            "Upgrade your",
            "We’ve got",
            "Dreaming of",
            "Say hello to",
        ];
        const endings = [
            "like never before!",
            "at your fingertips!",
            "just for you!",
            "for the future!",
            "made simple.",
            "to power your projects.",
            "in abundance!",
            "because you deserve it.",
        ];
        // Randomly pick elements from arrays
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const randomEnding = endings[Math.floor(Math.random() * endings.length)];
        // Combine into a teaser
        return `${randomAction} ${randomTopic} ${randomEnding}`;
    }
    generateCustomName(gender) {
        const maleFirstNames = ["Liam", "Noah", "Ethan", "Mason", "Logan"];
        const femaleFirstNames = ["Emma", "Olivia", "Sophia", "Ava", "Isabella"];
        const lastNames = ["Smith", "Anderson", "Clark", "Mitchell", "Turner"];
        const firstNames = gender === "male" ? maleFirstNames : gender === "female" ? femaleFirstNames : [...maleFirstNames, ...femaleFirstNames];
        const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
        const randomLastIndex = Math.floor(Math.random() * lastNames.length);
        return `${firstNames[randomFirstIndex]} ${lastNames[randomLastIndex]}`;
    }
    generateIndustrialName() {
        // Arrays of industrial-style components
        const adjectives = ["Energy", "Global", "Dynamic", "Advanced", "Modern", "United", "Prime", "Steel"];
        const nouns = ["Solutions", "Systems", "Technologies", "Innovations", "Concepts", "Industries", "Power", "Pipes"];
        const suffixes = ["Group", "Plus", "Hub", "Corp", "Enterprises", "Wild Dreams", "World"];
        const connectors = ["&", "and", "-", "", " "];
        // Randomly pick elements from arrays
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomConnector = connectors[Math.floor(Math.random() * connectors.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        // Combine parts
        const useSuffix = Math.random() > 0.5; // Randomly decide to include a suffix
        return useSuffix
            ? `${randomAdjective} ${randomConnector} ${randomNoun} ${randomSuffix}`
            : `${randomAdjective} ${randomConnector} ${randomNoun}`;
    }
    get Addons() {
        return this.All.filter(item => item.downloadType === DownloadType.addon);
    }
    get Worlds() {
        return this.All.filter(item => item.downloadType === DownloadType.world);
    }
    get ResourcePacks() {
        return this.All.filter(item => item.downloadType === DownloadType.resource_pack);
    }
    get SkinPacks() {
        return this.All.filter(item => item.downloadType === DownloadType.skin_pack);
    }
}
export const Downloads = new DownloadsManager();
