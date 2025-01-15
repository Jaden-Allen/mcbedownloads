export var DownloadType;
(function (DownloadType) {
    DownloadType[DownloadType["addon"] = 0] = "addon";
    DownloadType[DownloadType["world"] = 1] = "world";
    DownloadType[DownloadType["resource_pack"] = 2] = "resource_pack";
    DownloadType[DownloadType["skin_pack"] = 3] = "skin_pack";
})(DownloadType || (DownloadType = {}));
class DownloadsManager {
    get All() {
        return [
            {
                name: "Energy n More",
                creator: "Jaden Allen",
                thumbnail: "..assets/images/energy_n_more.png",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "..assets/files/energy_n_more.mcaddon",
                body: "Find osmium then make the powered spawner and other machines",
                images: [
                    "../assets/images/energy_n_more.jpg"
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
                thumbnail: "..assets/images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "..assets/files/energy_n_more.mcaddon",
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
                thumbnail: "..assets/images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../assets/files/energy_n_more.mcaddon",
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
                thumbnail: "../assets/images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../assets/files/energy_n_more.mcaddon",
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
                thumbnail: "../assets/images/energy_n_more.jpg",
                teaser: "Now with Machines and Energy Cables!",
                filePath: "../assets/files/energy_n_more.mcaddon",
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
        ];
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
