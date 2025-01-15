export interface DownloadItem {
    name: string;
    creator: string;
    supportedVersions: {min: string, max: string};
    teaser: string;
    body: string;
    filePath: string;
    thumbnail: string;
    images: string[];
    version: string;
    lastUpdated: string;
    downloadType: DownloadType;
    creationDate: string;
}
export enum DownloadType{
    addon,
    world,
    resource_pack,
    skin_pack
}

class DownloadsManager{
    private _all: DownloadItem[] = [];

    public get All(): DownloadItem[]{
        return this._all;
    }
    public AddTemplate(amount: number, downloadType: DownloadType){
        for(let i = 0; i < amount; i++){
            this._all.push(
                {
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
                }
            )
        }
    }
    private generateRandomPackIconUrl(){
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
        ]

        return randomUrls[Math.round((randomUrls.length - 1) * Math.random())]
    }
    private generateFormattedDateString(start: Date, end: Date): string {
        // Generate a random date between start and end
        const randomDate = this.generateRandomDate(start, end);
      
        // Extract the day, month index (1-based), and year
        const day = randomDate.getDate(); // Day of the month (1–31)
        const month = randomDate.getMonth() + 1; // Month index (1-based)
        const year = randomDate.getFullYear(); // Full year (e.g., 2025)
      
        // Format as "DATE/MONTH INDEX/YEAR"
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
      }
    private generateRandomDate(start: Date, end: Date): Date {
        const startTime = start.getTime();
        const endTime = end.getTime();
      
        // Generate a random timestamp between start and end
        const randomTime = Math.random() * (endTime - startTime) + startTime;
      
        // Return a new Date object
        return new Date(randomTime);
      }
    private generateTeaser(): string {
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
    private generateCustomName(gender?: "male" | "female"): string {
        const maleFirstNames = ["Liam", "Noah", "Ethan", "Mason", "Logan"];
        const femaleFirstNames = ["Emma", "Olivia", "Sophia", "Ava", "Isabella"];
        const lastNames = ["Smith", "Anderson", "Clark", "Mitchell", "Turner"];
      
        const firstNames = gender === "male" ? maleFirstNames : gender === "female" ? femaleFirstNames : [...maleFirstNames, ...femaleFirstNames];
        
        const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
        const randomLastIndex = Math.floor(Math.random() * lastNames.length);
      
        return `${firstNames[randomFirstIndex]} ${lastNames[randomLastIndex]}`;
      }
    private generateIndustrialName(): string {
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
    public get Addons(): DownloadItem[]{
        return this.All.filter(item => item.downloadType === DownloadType.addon);
    }
    public get Worlds(): DownloadItem[]{
        return this.All.filter(item => item.downloadType === DownloadType.world);
    }
    public get ResourcePacks(): DownloadItem[]{
        return this.All.filter(item => item.downloadType === DownloadType.resource_pack);
    }
    public get SkinPacks(): DownloadItem[]{
        return this.All.filter(item => item.downloadType === DownloadType.skin_pack);
    }
}
export const Downloads = new DownloadsManager();