const config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
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
            description:  'As of 2019, the Congressional-Executive Commission on China (CECC)’s Political Prisoner Database contains information on a total of 9,975 cases of political or religious imprisonment in China. Of those, there are more than 1,598 cases of current political imprisonment in China. <br><br>This data visualization will explore the lives of five political prisoners from diverse professional backgrounds.<br><br>Sources: Political Prisoner Database & CHRD.',
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
            title: 'Deng Chaunbin (晃晃), 49<br><span style="font-size:16px; font-weight:normal;">Independent Filmmaker, Activist, and Human Rights Defender</span>',
            image: './data/polp1.png',
            description: 'Deng Chuanbin (邓传彬) is a 49-year-old independent filmmaker and activist known for his human rights advocacy. He was detained by Sichuan police on May 16, 2019, after tweeting an image referencing the Tiananmen Massacre, part of a broader crackdown on activists during the 30th anniversary of the event. Authorities denied him legal representation, subjected him to forced medication, and allegedly beat him while in detention. Deng became involved in activism after the 2008 Sichuan Earthquake and later worked on HIV/AIDS awareness projects. Prior to his detention, he faced state intimidation, including being barred from traveling to a UN human rights seminar in 2015.',
            location: {
                center: [104.64, 28.75], // Sichuan
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
            title: 'Pu Wenqing',
            image: './data/PuWenqing.jpeg',
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
            title: 'Hu Pingping',
            image: './data/HuPingping.jpeg',
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
            title: 'Wu Shuang',
            image: './data/WuShuang.jpeg',
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
            id: 'stage5-swipe1',
            title: 'Stage 5: Person E - Swipe 1',
            image: './images/personE1.jpg',
            description: 'Content for Person E, swipe 1.',
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
            id: 'stage5-swipe2',
            title: 'Stage 5: Person E - Swipe 2',
            image: './images/personE2.jpg',
            description: 'Content for Person E, swipe 2.',
            location: {
                center: [116.4074, 39.9042], // Beijing
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
