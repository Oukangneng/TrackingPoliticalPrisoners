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
            description: `
            <div class="story-text">
                <b>Chinese Name:</b> 邓传彬<br>
                <b>Occupation:</b> Filmmaker, Documentary Videographer<br>
                <b>Issue Codes:</b> June 4, 1989 Protests/Speech<br>
                <b>Date of Detention:</b> May 17, 2019<br>
                <b>Legal Process:</b> Public Security Bureau (PSB) Detention<br>
                <b>Detention Facility:</b> Nanxi PSB Detention Center<br>
                <b>Detention Location:</b> Sichuan Province<br><br>

                <b>Case Details:</b><br>
                - On <b>May 17, 2019</b>, public security officials in <b>Yibin, Sichuan</b> detained <b>Deng Chuanbin</b>, a documentary filmmaker.<br>
                - He was charged with <b>"picking quarrels and provoking trouble"</b> and held at <b>Nanxi PSB Detention Center</b>.<br>
                - The arrest came <b>one day after</b> Deng posted a photo on Twitter of a <b>liquor bottle commemorating the June 4, 1989, Tiananmen Square crackdown</b>.<br>
                - Soon after his post, police arrived at his home. Deng reportedly <b>deleted the tweet</b>, but authorities detained him early the next morning.<br>
                - Observers believe his arrest was directly linked to the tweet.<br>
                - Authorities previously detained <b>five others</b> related to the commemorative liquor bottles, including <b>Fu Hailu</b>, the alleged designer.<br><br>

                <b>Background:</b><br>
                Deng has collaborated with documentary filmmaker <b>Ai Xiaoming</b> and volunteers for an organization supporting <b>people living with HIV/AIDS</b>.
            </div>
            `,
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
