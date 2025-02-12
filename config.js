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
            description:  'As of 2019, the Congressional-Executive Commission on China (CECC)’s Political Prisoner Database contains information on a total of 9,975 cases of political or religious imprisonment in China. Of those, there are more than 1,598 cases of current political imprisonment in China. <br><br>This data visualization will explore the lives of five political prisoners from diverse professional backgrounds.<br><br>Sources: Political Prisoner Database & CHRD',
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
            title: 'Deng Chaunbin, Independent Filmmaker, Activist, and Human Rights Defender',
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
            title: 'Husenjan Esqer, Translator',
            image: './data/polp2.png',
            description: 'Husenjan Esqer, a senior translator and chair of the terminology office at the XUAR Ethnic Languages Committee, was detained in April 2018, reportedly for his work on Uyghur-language dictionaries, including one on place names in Xinjiang. Authorities held him in a mass internment camp as part of the broader crackdown on Uyghur intellectuals and later placed him under house arrest in April 2020. His exact whereabouts remain uncertain, but he is presumed to be in Urumqi under heavy surveillance. Two of his nephews, who ran a Uyghur-language bookstore, were also detained, with one sentenced to 10 years in prison.',
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
            title: 'Pu Wenqing, Retired Doctor',
            image: './data/PuWenqing.jpeg',
            description: 'Pu Wenqing, an 85-year-old retired doctor, has been a vocal advocate for her son, Huang Qi, the founder of the rights website 64 Tianwang, who has been detained since 2016 on alleged state secrets charges. On December 7, 2018, security officials detained Pu at Beijing West Railway Station, forcibly returning her to Chengdu, where she was placed under home confinement in January 2019. Authorities have continuously harassed her due to her activism, even physically assaulting her at the railway station. Despite suffering from lung cancer and other severe health issues, Pu has persistently raised concerns about her son’s mistreatment in detention, including reports of beatings and worsening health.',
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
            title: 'Hu Pingping, University Graduate and Labor Rights Supporter',
            image: './data/HuPingping.jpeg',
            description: 'Hu Pingping, a university graduate and labor rights supporter, was detained on August 24, 2018, along with Wu Haiyu and about 50 others for supporting detained Shenzhen Jasic factory workers attempting to form a labor union. Police in riot gear arrested them in Huizhou, Guangdong, and held Hu and Wu at Shenzhen No. 2 PSB Detention Center before releasing them on bail. Hu, who worked in Guangzhou’s Huangpu district, had assisted families of detained workers and previously sued local police over their handling of a labor dispute. Her arrest was part of a broader crackdown that saw over 60 individuals detained, with around 32 still in custody as of December 7, 2018.',
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
            title: 'Wu Shuang, Factory Worker',
            image: './data/WuShuang.jpeg',
            description: 'Wu Shuang was among the 30 JASIC factory workers and supporters detained on July 27, 2018, in Shenzhen for "picking quarrels and provoking trouble" amid efforts to form a labor union. Her husband, Liu Penghua, was also detained as part of the broader crackdown, which saw over 60 individuals arrested between July and November. While some detainees were later released, 32 remained in custody as of December 7, 2018. Wu was held at the Longgang PSB Detention Center before being released on bail on September 3.',
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
