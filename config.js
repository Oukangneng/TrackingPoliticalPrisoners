const config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoib3dlbm9jIiwiYSI6ImNtNnh0aHNsODB5ZjcyanE4NTYwMjRrZDcifQ.jIUeVxkI7mayEkFCKHcgKw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    footer: 'Tracking Chinese Political Prisoners',
    chapters: [
        {
            id: 'stage1-swipe1',
            title: 'Tracking Chinese Political Prisoners | By Owen OConnell',
            image: './data/pie chart 1.jpg',
            description: 'As of 2019, the Congressional-Executive Commission on China (CECC)’s Political Prisoner Database contains information on a total of 9,975 cases of political or religious imprisonment in China. Of those, there are more than 1,598 cases of current political imprisonment in China.',
            location: {
                center: [116.4074, 39.9042], // Beijing
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage1-swipe2',
            title: 'Deng Chaunbin',
            image: './data/polp1.png',
            description: 'Chinese Name: 邓传彬 Occupation: Filmmaker, documentary  Issue Codes: June 4 1989 protests/speech Date of Detention: 2019/05/17 Legal Process: PSB Detention Facility: Nanxi PSB Det. Ctr. Detention Location: Sichuan Province  Information: According to RDN (18 May 19; 23 May 19), HKFP (24 May 19), CRLW (18 May 19) and China Aid (20 May 19), on May 17, 2019, public security officials in Yibin municipality, Sichuan province, detained videographer Deng Chuanbin. On or around the same day, police criminally detained him on suspicion of “picking quarrels and provoking trouble,” detaining him at the Nanxi PSB Detention Center in Nanxi district, Yibin. On the evening of May 16, Deng shared on Twitter an image of a liquor bottle that commemorated the violent suppression of the June 4, 1989, Tiananmen pro- democracy protests. Soon after, police arrived at Deng’s home. Deng reportedly deleted the tweet. Authorities detained him early on May 17. Associates speculated that authorities detained Deng over the tweet. Authorities previously detained 5 individuals in connection with the commemorative liquor bottles, including Fu Hailu, who allegedly designed and produced the liquor bottle lable. Deng has worked with documentary filmmaker Ai Xiaoming and volunteers for an organization helping persons living with HIV/AIDS. ',
            location: {
                center: [104, 30.65], // Sichuan
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stage2-swipe1',
            title: 'Husenjan Esqer',
            image: './data/polp2.png',
            description: 'Occupation: Civil Servant  Issue Codes: Ethnicity  Date of Detention: 2018/04/dd Legal Process: PSB Detention Facility: Xinjiang (general location)  Detention Location: Xinjiang Uyghur Auto. Region Information: According to RFA (25 February 19; 28 February 19), in April 2018, authorities in the Xinjiang Uyghur Autonomous Region (XUAR) detained Husenjan Esqer, a translator and employee of the XUAR Ethnic Language Work Committee, where he was deputy head of an office working on standardizing translated terminology in Uyghur. Esqer’s sister indicated to RFA that his detention was related to his scholarly work, which included contributing to specialized dictionaries, but information on the official accusations against him was unavailable. She also told RFA authorities held him in a “political reeducation” camp, a type of extrajudicial detention facility used by XUAR officials in a campaign of arbitrary mass detentions of Uyghurs and members of other largely Muslim ethnic groups. His exact whereabouts were unknown. Intellectuals and artists promoting Uyghur culture were among those targeted for detention by XUAR officials (UHRP, 25 March 19). XUAR authorities also detained two of Esqer’s nephews, brothers Ehram and Behram Yarmuhemmet, in late 2016 and early 2017 respectively, in Urumqi municipality. Their detentions may be related to a Uyghur-language bookstore they ran in Urumqi. Authorities reportedly sentenced Ehram to 10 years in prison and held Behram in a “political reeducation” camp.',
            location: {
                center: [87.62, 43.79], // Xinjiang 
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
