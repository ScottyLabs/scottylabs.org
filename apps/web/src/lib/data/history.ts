export type CarouselPhoto = {
  filename: string;
  caption?: string;
};

export type CarouselBlock = {
  type: "carousel";
  year: string;
  photos: CarouselPhoto[];
};

export type ArticleBlock = {
  type: "article";
  year: string;
  url: string;
  title?: string;
};

export type HistoryBlock = CarouselBlock | ArticleBlock;

export const HISTORY: HistoryBlock[] = [
  {
    type: "carousel",
    year: "2025-26",
    photos: [
      { filename: "Nova2025.jpg" },
      { filename: "Fence2026.jpg" },
      { filename: "TH2026.png" },
      { filename: "Banner2026.png" },
    ],
  },
  {
    type: "article",
    year: "2025-26",
    url: "https://medium.com/tartanhacks/introducing-foundry-carnegie-mellons-first-student-led-startup-accelerator-4c71a0902c10",
  },
  {
    type: "carousel",
    year: "2024-25",
    photos: [
      { filename: "Nova2024.jpg" },
      { filename: "Fence2025.jpg" },
      { filename: "TH2025.jpg" },
      { filename: "Banner2025.png" },
      { filename: "DogHouse2025.png" },
      { filename: "SeniorPicnic2025.png" },
    ],
  },
  {
    type: "carousel",
    year: "2023-24",
    photos: [
      { filename: "Pdf2023.jpg" },
      { filename: "TH2024.jpg" },
      { filename: "Banner2024.jpeg" },
      { filename: "DogHouse2024.jpeg" },
      { filename: "DogHouse2024Awards.jpg" },
      { filename: "SeniorPicnic2024.png" },
    ],
  },
  {
    type: "article",
    year: "2023-24",
    url: "http://www-03-thetartan.andrew.cmu.edu/2024/11/25/never-get-lost-again-with-cmumaps/",
  },
  {
    type: "article",
    year: "2023-24",
    url: "https://medium.com/tartanhacks/celebrating-scottylabs-12th-birthday-cd4f23692da1",
  },
  {
    type: "carousel",
    year: "2022-23",
    photos: [
      { filename: "Fence2022Fall.png" },
      { filename: "Pdf2022.jpg" },
      { filename: "TH2023.png" },
      { filename: "Banner2023.png" },
      { filename: "DogHouse2023.png" },
      { filename: "SeniorPicnic2023.jpg" },
    ],
  },
  {
    type: "article",
    year: "2022-23",
    url: "https://cargocollective.com/tiffanyhchen/ScottyLabs-Promotional-Materials",
  },
  {
    type: "carousel",
    year: "2021-22",
    photos: [
      { filename: "Fence2022Spring.png" },
      { filename: "TH2022.jpg" },
      { filename: "TH2022-2.png" },
      { filename: "TH2022-3.png" },
      { filename: "TH2022-4.png" },
      { filename: "TH2022-5.png" },
      { filename: "Banner2022.png" },
    ],
  },
  {
    type: "article",
    year: "2021-22",
    url: "https://medium.com/tartanhacks/recap-of-tartanhacks-2022-b5b040c7804e",
  },
  {
    type: "article",
    year: "2021-22",
    url: "https://medium.com/tartanhacks/tartanhacks-2022-branding-c3171dfb9106",
  },
  {
    type: "carousel",
    year: "2020-21",
    photos: [
      { filename: "TH2021.png" },
      { filename: "TH2021-3.png" },
      { filename: "TH2021-4.png" },
      { filename: "TH2021-5.png" },
      { filename: "TH2021-6.png" },
      { filename: "TH2021-7.png" },
    ],
  },
  {
    type: "article",
    year: "2020-21",
    url: "https://medium.com/tartanhacks/thx-chronicles-the-tartanhacks-software-suite-part-i-85836f980a01",
  },
  {
    type: "carousel",
    year: "2019-20",
    photos: [
      { filename: "TH2020-2.png" },
      { filename: "TH2020-3.png" },
      { filename: "TH2020-4.png" },
      { filename: "TH2020-5.jpg" },
      { filename: "TH2020-6.jpg" },
      { filename: "TH2020-7.jpg" },
      { filename: "TH2020-8.jpg" },
      { filename: "TH2020-9.png" },
      { filename: "TH2020-10.jpg" },
      { filename: "TH2020-11.jpg" },
      { filename: "TH2020-12.jpg" },
      { filename: "TH2020-13.jpg" },
      { filename: "TH2020-14.jpg" },
      { filename: "TH2020-15.jpg" },
      { filename: "TH2020-16.jpg" },
      { filename: "TH2020-17.jpg" },
    ],
  },
  {
    type: "article",
    year: "2019-20",
    url: "https://www.ytorralva.com/tartanhacks",
  },
  {
    type: "carousel",
    year: "2018-19",
    photos: [
      { filename: "TH2019.png" },
      { filename: "TH2019-2.png" },
      { filename: "TH2019-3.jpg" },
      { filename: "TH2019-4.jpg" },
      { filename: "TH2019-5.jpg" },
      { filename: "TH2019-6.jpg" },
      { filename: "TH2019-7.jpg" },
      { filename: "TH2019-8.jpg" },
      { filename: "TH2019-9.jpg" },
    ],
  },
  {
    type: "article",
    year: "2018-19",
    url: "https://www.chengeric.com/cmueats/",
  },
  {
    type: "carousel",
    year: "2017-18",
    photos: [{ filename: "TH2018-2.png" }, { filename: "TH2018-3.png" }],
  },
  {
    type: "carousel",
    year: "2016-17",
    photos: [
      { filename: "TH2017-2.png" },
      { filename: "TH2017-3.jpg" },
      { filename: "TH2017-4.jpg" },
      { filename: "TH2017-5.jpg" },
    ],
  },
  {
    type: "carousel",
    year: "2015-16",
    photos: [
      { filename: "TH2016-2.png" },
      { filename: "TH2016-3.png" },
      { filename: "TH2016-4.jpg" },
      { filename: "TH2016-5.jpg" },
      { filename: "TH2016-6.jpg" },
      { filename: "TH2016-7.jpg" },
      { filename: "TH2016-8.jpg" },
      { filename: "TH2016-9.jpg" },
      { filename: "TH2016-10.jpg" },
    ],
  },
  {
    type: "carousel",
    year: "2014-15",
    photos: [
      { filename: "TH2015.png" },
      { filename: "TH2015-2.jpg" },
      { filename: "TH2015-3.jpg" },
      { filename: "TH2015-4.jpg" },
      { filename: "TH2015-5.jpg" },
    ],
  },
  {
    type: "article",
    year: "2014-15",
    url: "https://jez.io/tartanhacks/",
  },
  {
    type: "carousel",
    year: "2013-14",
    photos: [
      { filename: "TH2014-2.png" },
      { filename: "TH2014-3.png" },
      { filename: "TH2014-4.jpg" },
    ],
  },
  {
    type: "article",
    year: "2013-14",
    url: "https://www.cs.cmu.edu/link/scottylabs-making-it-easier-makers",
  },
  {
    type: "carousel",
    year: "2012-13",
    photos: [{ filename: "TH2013-2.png" }, { filename: "CrashCourse2013.png" }],
  },
  {
    type: "article",
    year: "2012-13",
    url: "https://www.facebook.com/ScottyLabs/posts/340694309339069/",
  },
  {
    type: "carousel",
    year: "2011-12",
    photos: [
      { filename: "TH2012.jpg" },
      { filename: "TH2012Poster-1.png" },
      { filename: "TH2012Poster-2.png" },
      { filename: "TH2012Poster-3.png" },
      { filename: "TH2012Poster-4.png" },
    ],
  },
  {
    type: "carousel",
    year: "2011-12",
    photos: [
      {
        filename: "OGTartanHacksAmyQuispe.jpg",
        caption: "Amy Quispe at First TartanHacks",
      },
      {
        filename: "OGTartanHacksTeam.jpg",
        caption:
          "Vinay Vemuri, Quintin Carlon, Julia Teitelbaum, Ryhan Hassan & Jeff Cooper",
      },
    ],
  },
];
