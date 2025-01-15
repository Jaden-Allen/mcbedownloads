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
    public get All(): DownloadItem[]{
        return [
            {
                name: "Energy n More",
                creator: "Jaden Allen",
                thumbnail: "../images/energy_n_more.png",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../files/energy_n_more.mcaddon",
                body: "Find osmium then make the powered spawner and other machines",
                images: [
                    "../images/energy_n_more.jpg"
                ],
                supportedVersions: {
                    min: "1.16.100",
                    max: "1.21.40"
                },
                version: "1.0.0",
                downloadType: DownloadType.addon,
                lastUpdated: "1/13/2025",
                creationDate: "1/13/2025"
            },
            {
                name: "Manhunt",
                creator: "Jaden Allen",
                thumbnail: "../images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../files/energy_n_more.mcaddon",
                body: "Find osmium then make the powered spawner and other machines",
                images: [
                    "images/energy_n_more.jpg"
                ],
                supportedVersions: {
                    min: "1.16.100",
                    max: "1.21.40"
                },
                version: "1.0.0",
                downloadType: DownloadType.addon,
                lastUpdated: "1/13/2025",
                creationDate: "1/13/2025"
            },
            {
                name: "Manhunt",
                creator: "Jaden Allen",
                thumbnail: "../images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../files/energy_n_more.mcaddon",
                body: "Find osmium then make the powered spawner and other machines",
                images: [
                    "images/energy_n_more.jpg"
                ],
                supportedVersions: {
                    min: "1.16.100",
                    max: "1.21.40"
                },
                version: "1.0.0",
                downloadType: DownloadType.resource_pack,
                lastUpdated: "1/13/2025",
                creationDate: "1/13/2025"
            },
            {
                name: "Manhunt",
                creator: "Jaden Allen",
                thumbnail: "../images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../files/energy_n_more.mcaddon",
                body: "Find osmium then make the powered spawner and other machines",
                images: [
                    "images/energy_n_more.jpg"
                ],
                supportedVersions: {
                    min: "1.16.100",
                    max: "1.21.40"
                },
                version: "1.0.0",
                downloadType: DownloadType.world,
                lastUpdated: "1/13/2025",
                creationDate: "1/13/2025"
            },
            {
                name: "Manhunt",
                creator: "Jaden Allen",
                thumbnail: "../images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../files/energy_n_more.mcaddon",
                body: "Find osmium then make the powered spawner and other machines",
                images: [
                    "images/energy_n_more.jpg"
                ],
                supportedVersions: {
                    min: "1.16.100",
                    max: "1.21.40"
                },
                version: "1.0.0",
                downloadType: DownloadType.skin_pack,
                lastUpdated: "1/13/2025",
                creationDate: "1/13/2025"
            }
        ]
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