const config = {
    style: 'mapbox://styles/owenoc/cm6xxc6tl005601s308ze9uio',
    accessToken: 'pk.eyJ1Ijoib3dlbm9jIiwiYSI6ImNtNnh0aHNsODB5ZjcyanE4NTYwMjRrZDcifQ.jIUeVxkI7mayEkFCKHcgKw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    footer: 'Map Person Stages | Customize your content and images',
    chapters: [
        {
            id: 'stage1-swipe1',
            title: 'Tracking Chinese Political Prisoners',
            image: './data/pie chart 1.jpg',
            description: 'As of 2019, the Congressional-Executive Commission on China (CECC)’s Political Prisoner Database contains information on a total of 9,975 cases of political or religious imprisonment in China. Of those, there are more than 1,598 cases of current political imprisonment in China.',
            location: {
                center: [116.4074, 39.9042], // Beijing
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage1-swipe2',
            title: 'Stage 1: Person A - Swipe 2',
            image: './images/personA2.jpg',
            description: 'Content for Person A, swipe 2.',
            location: {
                center: [116.45, 39.91],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage2-swipe1',
            title: 'Stage 2: Person B - Swipe 1',
            image: './images/personB1.jpg',
            description: 'Content for Person B, swipe 1.',
            location: {
                center: [121.4737, 31.2304], // Shanghai
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage2-swipe2',
            title: 'Stage 2: Person B - Swipe 2',
            image: './images/personB2.jpg',
            description: 'Content for Person B, swipe 2.',
            location: {
                center: [121.50, 31.22],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage3-swipe1',
            title: 'Stage 3: Person C - Swipe 1',
            image: './images/personC1.jpg',
            description: 'Content for Person C, swipe 1.',
            location: {
                center: [113.2644, 23.1291], // Guangzhou
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage3-swipe2',
            title: 'Stage 3: Person C - Swipe 2',
            image: './images/personC2.jpg',
            description: 'Content for Person C, swipe 2.',
            location: {
                center: [113.30, 23.13],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage4-swipe1',
            title: 'Stage 4: Person D - Swipe 1',
            image: './images/personD1.jpg',
            description: 'Content for Person D, swipe 1.',
            location: {
                center: [104.0665, 30.5728], // Chengdu
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage4-swipe2',
            title: 'Stage 4: Person D - Swipe 2',
            image: './images/personD2.jpg',
            description: 'Content for Person D, swipe 2.',
            location: {
                center: [104.10, 30.57],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage5-swipe1',
            title: 'Stage 5: Person E - Swipe 1',
            image: './images/personE1.jpg',
            description: 'Content for Person E, swipe 1.',
            location: {
                center: [114.0579, 22.5431], // Shenzhen
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage5-swipe2',
            title: 'Stage 5: Person E - Swipe 2',
            image: './images/personE2.jpg',
            description: 'Content for Person E, swipe 2.',
            location: {
                center: [114.07, 22.55],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
