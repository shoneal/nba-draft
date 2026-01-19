const players = {
  PG: {
    "Trae Young": {
      firstName: "Trae",
      lastName: "Young",
      team: "Washington Wizards",
      positions: "PG",
      Rank: 313,
      stats: {
        "22 окт.": [34, 5, 14, 11, 13, 1, 7, 22, 1, 5, 1, 0, 2, 0, 0],
        "24 окт.": [34, 7, 18, 10, 12, 1, 6, 25, 1, 6, 3, 0, 1, 0, 0],
        "25 окт.": [30, 5, 12, 3, 4, 2, 3, 15, 4, 10, 0, 0, 5, 1, 0],
        "27 окт.": [34, 7, 22, 6, 7, 1, 10, 21, 3, 17, 0, 0, 1, 1, 0],
        "29 окт.": [7, 2, 4, 2, 3, 0, 0, 6, 1, 1, 0, 1, 1, 0, 0],
        "21 дек.": [26, 10, 16, 8, 9, 7, 9, 35, 1, 9, 0, 0, 2, 0, 0],
        "23 дек.": [31, 7, 16, 7, 9, 1, 7, 22, 1, 15, 2, 0, 1, 1, 0],
        "26 дек.": [32, 8, 16, 9, 9, 5, 8, 30, 2, 6, 1, 0, 4, 0, 0],
      },
    },
    "Anthony Black": {
      firstName: "Anthony",
      lastName: "Black",
      team: "Orlando Magic",
      positions: "PG, SG, SF",
      Rank: 99,
      myTeam: true,
      stats: {
        "22 окт.": [23, 3, 9, 0, 0, 1, 2, 7, 3, 3, 0, 1, 0, 0, 0],
        "24 окт.": [21, 3, 4, 2, 5, 0, 0, 8, 3, 2, 1, 0, 4, 0, 0],
        "25 окт.": [30, 6, 9, 6, 6, 1, 3, 19, 5, 1, 1, 1, 5, 0, 0],
        "27 окт.": [30, 5, 10, 3, 7, 1, 3, 14, 3, 2, 1, 1, 3, 0, 0],
        "29 окт.": [24, 3, 10, 3, 4, 1, 6, 10, 4, 1, 1, 0, 2, 0, 0],
        "30 окт.": [31, 8, 13, 1, 1, 3, 6, 20, 1, 2, 2, 2, 3, 0, 0],
        "1 нояб.": [25, 3, 6, 2, 2, 0, 2, 8, 2, 5, 0, 1, 3, 0, 0],
        "4 нояб.": [26, 2, 7, 2, 2, 1, 4, 7, 4, 3, 1, 1, 1, 0, 0],
        "7 нояб.": [33, 5, 11, 1, 2, 2, 5, 13, 4, 4, 4, 1, 1, 0, 0],
        "9 нояб.": [20, 2, 6, 0, 0, 0, 3, 4, 3, 0, 1, 0, 1, 0, 0],
        "10 нояб.": [32, 2, 8, 3, 4, 1, 3, 8, 4, 2, 1, 0, 2, 0, 0],
        "12 нояб.": [23, 7, 11, 0, 0, 3, 5, 17, 3, 3, 2, 1, 2, 0, 0],
        "14 нояб.": [17, 1, 4, 0, 0, 0, 1, 2, 0, 2, 0, 0, 1, 0, 0],
        "16 нояб.": [36, 7, 14, 3, 5, 1, 5, 18, 3, 4, 1, 1, 2, 0, 0],
        "18 нояб.": [33, 8, 13, 5, 7, 0, 3, 21, 4, 2, 2, 0, 1, 0, 0],
        "20 нояб.": [29, 4, 9, 3, 4, 1, 3, 12, 4, 4, 4, 0, 2, 0, 0],
        "22 нояб.": [29, 4, 8, 2, 4, 1, 2, 11, 1, 4, 3, 1, 1, 0, 0],
        "23 нояб.": [27, 4, 13, 4, 5, 2, 4, 14, 3, 5, 1, 0, 2, 0, 0],
        "25 нояб.": [28, 12, 17, 3, 4, 4, 6, 31, 1, 3, 1, 0, 3, 0, 0],
        "28 нояб.": [32, 6, 17, 3, 6, 1, 4, 16, 4, 4, 3, 1, 3, 0, 0],
        "1 дек.": [34, 8, 15, 4, 6, 2, 5, 22, 9, 3, 0, 2, 1, 0, 0],
        "3 дек.": [28, 2, 10, 3, 4, 0, 2, 7, 7, 5, 0, 0, 2, 0, 0],
        "5 дек.": [31, 2, 9, 9, 12, 0, 2, 13, 8, 6, 2, 0, 2, 0, 0],
        "7 дек.": [30, 6, 16, 1, 1, 1, 7, 14, 11, 4, 0, 1, 4, 1, 0],
        "9 дек.": [34, 5, 15, 0, 0, 0, 2, 10, 3, 7, 1, 1, 2, 0, 0],
        "13 дек.": [37, 5, 15, 1, 3, 1, 6, 12, 8, 4, 1, 2, 4, 0, 0],
        "18 дек.": [37, 8, 18, 4, 6, 2, 6, 22, 2, 3, 2, 0, 3, 0, 0],
        "20 дек.": [40, 6, 12, 7, 8, 1, 4, 20, 6, 5, 0, 0, 1, 0, 0],
        "22 дек.": [31, 8, 12, 1, 3, 2, 5, 19, 6, 3, 0, 1, 2, 0, 0],
        "23 дек.": [33, 8, 21, 2, 3, 4, 8, 22, 7, 6, 2, 0, 3, 0, 0],
        "26 дек.": [36, 8, 17, 4, 4, 4, 7, 24, 3, 4, 2, 1, 2, 0, 0],
        "27 дек.": [30, 14, 24, 3, 6, 7, 11, 38, 6, 5, 2, 0, 1, 0, 0],
        "29 дек.": [32, 9, 19, 7, 7, 2, 7, 27, 3, 3, 1, 0, 4, 0, 0],
        "31 дек.": [31, 6, 11, 3, 3, 0, 3, 15, 4, 5, 2, 1, 4, 0, 0],
        "2 янв.": [33, 8, 16, 0, 0, 2, 5, 18, 2, 7, 2, 1, 3, 0, 0],
        "4 янв.": [36, 8, 16, 8, 10, 3, 7, 27, 3, 10, 1, 4, 1, 1, 0],
        "6 янв.": [20, 3, 10, 0, 0, 0, 5, 6, 5, 4, 0, 1, 4, 0, 0],
        "7 янв.": [37, 2, 11, 0, 0, 1, 4, 5, 4, 6, 2, 0, 4, 0, 0],
        "9 янв.": [37, 7, 12, 4, 4, 3, 7, 21, 3, 4, 0, 0, 4, 0, 0],
        "11 янв.": [36, 9, 10, 5, 7, 3, 4, 26, 5, 7, 3, 0, 4, 0, 0],
        "15 янв.": [36, 7, 13, 3, 3, 4, 7, 21, 6, 7, 1, 0, 1, 0, 0],
        "18 янв.": [37, 7, 15, 3, 4, 2, 6, 19, 2, 6, 0, 0, 4, 0, 0],
      },
    },
  },
  SG: {
    "N. Alexander-Walker": {
      firstName: "N.",
      lastName: "Alexander-Walker",
      team: "Atlanta Hawks",
      positions: "PG, SG, SF",
      Rank: 46,
      myTeam: true,
      stats: {
        "22 окт.": [28, 2, 15, 5, 6, 1, 5, 10, 4, 4, 1, 1, 1, 0, 0],
        "24 окт.": [31, 8, 18, 2, 2, 1, 10, 19, 1, 4, 1, 0, 1, 0, 0],
        "25 окт.": [30, 6, 10, 2, 2, 3, 6, 17, 3, 2, 2, 1, 2, 0, 0],
        "27 окт.": [30, 6, 11, 1, 2, 4, 6, 17, 3, 3, 1, 0, 0, 0, 0],
        "29 окт.": [32, 7, 17, 2, 2, 2, 8, 18, 3, 3, 2, 3, 1, 0, 0],
        "31 окт.": [32, 8, 14, 4, 5, 1, 5, 21, 3, 3, 2, 0, 3, 0, 0],
        "2 нояб.": [34, 3, 11, 10, 11, 0, 4, 16, 3, 5, 0, 1, 5, 0, 0],
        "4 нояб.": [32, 6, 11, 5, 6, 3, 5, 20, 1, 2, 0, 1, 7, 0, 0],
        "7 нояб.": [30, 7, 14, 3, 4, 3, 6, 20, 2, 3, 0, 0, 3, 0, 0],
        "12 нояб.": [22, 5, 11, 3, 3, 1, 4, 14, 6, 5, 0, 2, 4, 0, 0],
        "13 нояб.": [30, 4, 11, 7, 8, 1, 3, 16, 2, 5, 2, 2, 2, 0, 0],
        "16 нояб.": [35, 9, 18, 5, 7, 3, 9, 26, 3, 4, 2, 0, 2, 0, 0],
        "18 нояб.": [37, 9, 20, 5, 6, 1, 9, 24, 3, 3, 0, 0, 0, 0, 0],
        "20 нояб.": [34, 13, 17, 4, 4, 8, 10, 38, 4, 5, 0, 3, 2, 0, 0],
        "22 нояб.": [36, 4, 11, 0, 0, 2, 6, 10, 5, 3, 1, 0, 1, 0, 0],
        "23 нояб.": [39, 8, 17, 4, 6, 3, 7, 23, 5, 4, 1, 1, 1, 0, 0],
        "25 нояб.": [32, 3, 9, 0, 0, 2, 6, 8, 2, 4, 0, 0, 3, 0, 0],
        "28 нояб.": [35, 10, 22, 5, 5, 5, 13, 30, 3, 1, 1, 1, 1, 0, 0],
        "30 нояб.": [44, 11, 22, 6, 6, 6, 11, 34, 8, 7, 1, 1, 4, 0, 0],
        "1 дек.": [35, 10, 19, 0, 0, 6, 10, 26, 3, 1, 2, 0, 2, 0, 0],
        "3 дек.": [31, 7, 18, 5, 7, 2, 7, 21, 5, 3, 1, 0, 1, 0, 0],
        "5 дек.": [34, 10, 17, 5, 5, 5, 9, 30, 5, 1, 0, 0, 1, 0, 0],
        "6 дек.": [32, 7, 15, 0, 0, 3, 10, 17, 4, 4, 3, 0, 3, 0, 0],
        "12 дек.": [31, 6, 14, 6, 6, 4, 10, 22, 2, 0, 0, 0, 2, 0, 0],
        "14 дек.": [34, 3, 18, 4, 4, 2, 5, 12, 7, 6, 1, 0, 2, 0, 0],
        "18 дек.": [34, 11, 18, 2, 2, 4, 9, 28, 8, 2, 0, 0, 3, 0, 0],
        "19 дек.": [33, 7, 18, 7, 9, 2, 10, 23, 2, 4, 0, 0, 3, 0, 0],
        "21 дек.": [29, 3, 12, 2, 3, 1, 6, 9, 1, 2, 1, 2, 3, 0, 0],
        "23 дек.": [34, 9, 19, 1, 2, 2, 8, 21, 1, 2, 2, 0, 0, 0, 0],
        "26 дек.": [32, 6, 14, 1, 1, 2, 5, 15, 4, 3, 1, 1, 2, 0, 0],
        "27 дек.": [30, 8, 18, 4, 4, 5, 12, 25, 0, 1, 1, 0, 0, 0, 0],
        "29 дек.": [40, 11, 24, 2, 3, 6, 14, 30, 4, 5, 2, 1, 1, 0, 0],
        "31 дек.": [31, 4, 12, 0, 0, 3, 7, 11, 0, 3, 0, 0, 2, 0, 0],
        "2 янв.": [34, 9, 20, 2, 4, 3, 10, 23, 4, 3, 2, 0, 1, 0, 0],
        "3 янв.": [36, 10, 19, 5, 5, 6, 11, 31, 4, 3, 2, 0, 6, 0, 0],
        "5 янв.": [34, 4, 14, 4, 4, 2, 6, 14, 5, 4, 0, 0, 3, 0, 0],
        "7 янв.": [34, 6, 18, 3, 3, 2, 12, 17, 6, 6, 3, 2, 1, 0, 0],
        "9 янв.": [33, 9, 21, 1, 1, 3, 11, 22, 8, 3, 2, 0, 1, 0, 0],
        "11 янв.": [34, 9, 18, 3, 3, 3, 7, 24, 2, 2, 3, 0, 1, 0, 0],
        "13 янв.": [33, 10, 16, 1, 1, 5, 9, 26, 4, 3, 0, 0, 0, 0, 0],
        "15 янв.": [29, 2, 6, 5, 6, 2, 4, 11, 6, 7, 1, 0, 3, 0, 0],
        "17 янв.": [29, 6, 16, 2, 2, 4, 9, 18, 2, 6, 1, 1, 0, 0, 0],
      },
    },
    "Donte DiVincenzo": {
      firstName: "Donte",
      lastName: "DiVincenzo",
      team: "Minnesota Timberwolves",
      positions: "PG, SG",
      Rank: 53,
      myTeam: true,
      stats: {
        "22 окт.": [20, 3, 6, 0, 0, 1, 3, 7, 4, 2, 2, 2, 6, 0, 0],
        "24 окт.": [28, 4, 8, 2, 3, 3, 7, 13, 0, 4, 2, 0, 0, 0, 0],
        "26 окт.": [38, 5, 13, 4, 5, 3, 8, 17, 2, 3, 1, 0, 1, 0, 0],
        "27 окт.": [30, 3, 10, 3, 3, 3, 8, 12, 3, 4, 1, 0, 1, 0, 0],
        "29 окт.": [34, 4, 7, 3, 3, 3, 5, 14, 4, 6, 1, 0, 3, 0, 0],
        "1 нояб.": [31, 6, 14, 1, 2, 5, 12, 18, 3, 4, 1, 0, 0, 0, 0],
        "3 нояб.": [30, 8, 17, 3, 4, 6, 13, 25, 9, 5, 0, 1, 0, 0, 0],
        "5 нояб.": [36, 7, 15, 2, 2, 5, 11, 21, 3, 4, 1, 0, 2, 0, 0],
        "7 нояб.": [21, 1, 4, 0, 0, 1, 4, 3, 6, 2, 1, 1, 1, 0, 0],
        "9 нояб.": [28, 2, 7, 3, 3, 1, 6, 8, 4, 4, 2, 1, 0, 0, 0],
        "10 нояб.": [37, 4, 11, 5, 5, 1, 8, 14, 1, 2, 1, 1, 1, 0, 0],
        "14 нояб.": [30, 6, 11, 3, 4, 5, 10, 20, 6, 5, 1, 0, 2, 0, 0],
        "15 нояб.": [34, 4, 11, 2, 2, 1, 6, 11, 5, 1, 0, 0, 2, 0, 0],
        "17 нояб.": [26, 4, 8, 3, 4, 3, 7, 14, 5, 2, 0, 2, 1, 0, 0],
        "19 нояб.": [36, 4, 8, 0, 0, 4, 6, 12, 5, 6, 1, 0, 2, 0, 0],
        "21 нояб.": [32, 2, 9, 3, 3, 2, 7, 9, 2, 3, 4, 0, 2, 0, 0],
        "24 нояб.": [37, 5, 14, 2, 2, 5, 13, 17, 4, 1, 1, 0, 1, 0, 0],
        "26 нояб.": [31, 4, 9, 1, 2, 2, 6, 11, 5, 2, 1, 0, 2, 0, 0],
        "29 нояб.": [34, 5, 9, 1, 2, 4, 7, 15, 3, 8, 1, 0, 1, 0, 0],
        "30 нояб.": [29, 7, 14, 0, 0, 4, 9, 18, 5, 4, 0, 0, 0, 0, 0],
        "2 дек.": [38, 5, 16, 0, 0, 5, 15, 15, 4, 5, 2, 1, 1, 0, 0],
        "4 дек.": [32, 5, 10, 1, 1, 4, 8, 15, 4, 3, 0, 1, 1, 0, 0],
        "6 дек.": [25, 2, 6, 0, 0, 1, 4, 5, 4, 4, 1, 0, 0, 0, 0],
        "8 дек.": [27, 1, 7, 0, 0, 0, 6, 2, 4, 4, 1, 0, 3, 0, 0],
        "12 дек.": [35, 7, 15, 3, 4, 4, 10, 21, 6, 4, 0, 1, 0, 0, 0],
        "14 дек.": [34, 7, 18, 1, 2, 3, 9, 18, 6, 6, 4, 2, 1, 0, 0],
        "17 дек.": [37, 6, 16, 3, 6, 4, 11, 19, 11, 4, 3, 1, 1, 1, 0],
        "19 дек.": [33, 5, 12, 1, 3, 4, 10, 15, 4, 1, 0, 0, 1, 0, 0],
        "21 дек.": [33, 7, 11, 0, 0, 4, 8, 18, 5, 4, 2, 0, 3, 0, 0],
        "23 дек.": [32, 3, 9, 2, 4, 3, 7, 11, 2, 8, 2, 0, 1, 0, 0],
        "25 дек.": [34, 2, 11, 2, 2, 0, 7, 6, 8, 8, 2, 1, 0, 0, 0],
        "27 дек.": [32, 4, 7, 0, 0, 3, 6, 11, 5, 6, 2, 0, 1, 0, 0],
        "29 дек.": [27, 4, 10, 0, 0, 4, 9, 12, 6, 3, 0, 0, 0, 0, 0],
        "31 дек.": [26, 2, 8, 0, 0, 2, 6, 6, 2, 7, 1, 0, 1, 0, 0],
        "3 янв.": [31, 5, 13, 0, 0, 1, 8, 11, 8, 4, 2, 1, 2, 0, 0],
        "4 янв.": [23, 2, 10, 0, 0, 1, 9, 5, 4, 3, 3, 0, 1, 0, 0],
        "6 янв.": [31, 4, 9, 0, 0, 4, 9, 12, 5, 2, 0, 1, 0, 0, 0],
        "8 янв.": [34, 8, 13, 0, 0, 6, 10, 22, 1, 4, 1, 0, 1, 0, 0],
        "10 янв.": [34, 6, 9, 0, 0, 3, 6, 15, 3, 6, 2, 0, 4, 0, 0],
        "11 янв.": [38, 7, 16, 0, 0, 5, 12, 19, 9, 7, 3, 1, 2, 0, 0],
        "13 янв.": [30, 4, 6, 0, 0, 3, 5, 11, 4, 7, 0, 0, 2, 0, 0],
        "16 янв.": [40, 3, 10, 0, 0, 2, 7, 8, 8, 4, 1, 1, 2, 0, 0],
        "17 янв.": [36, 4, 14, 0, 0, 3, 10, 11, 5, 3, 2, 1, 3, 0, 0],
      },
    },
    "VJ Edgecombe": {
      firstName: "VJ",
      lastName: "Edgecombe",
      team: "Philadelphia 76ers",
      positions: "PG, SG",
      Rank: 70,
      myTeam: true,
      stats: {
        "22 окт.": [42, 13, 26, 3, 6, 5, 13, 34, 7, 3, 1, 0, 2, 0, 0],
        "25 окт.": [40, 6, 15, 2, 2, 1, 3, 15, 6, 8, 3, 1, 2, 0, 0],
        "27 окт.": [39, 10, 17, 4, 4, 2, 4, 26, 4, 7, 1, 1, 2, 0, 0],
        "28 окт.": [40, 4, 12, 2, 2, 4, 8, 14, 6, 4, 1, 0, 2, 0, 0],
        "31 окт.": [40, 7, 11, 1, 1, 2, 4, 17, 5, 5, 0, 0, 1, 0, 0],
        "2 нояб.": [33, 6, 12, 2, 2, 2, 6, 16, 2, 3, 3, 0, 3, 0, 0],
        "4 нояб.": [38, 4, 12, 2, 2, 2, 3, 12, 11, 4, 2, 0, 2, 1, 0],
        "5 нояб.": [37, 3, 14, 1, 2, 0, 5, 7, 4, 4, 0, 0, 1, 0, 0],
        "8 нояб.": [36, 5, 15, 1, 2, 0, 4, 11, 7, 4, 3, 0, 2, 0, 0],
        "9 нояб.": [32, 3, 9, 4, 6, 1, 2, 11, 6, 2, 1, 1, 5, 0, 0],
        "11 нояб.": [35, 2, 11, 0, 0, 2, 6, 6, 3, 3, 0, 2, 0, 0, 0],
        "14 нояб.": [37, 6, 15, 2, 2, 4, 8, 18, 7, 3, 1, 0, 2, 0, 0],
        "17 нояб.": [37, 6, 13, 0, 2, 2, 6, 14, 6, 6, 0, 0, 0, 0, 0],
        "19 нояб.": [37, 8, 20, 4, 5, 1, 6, 21, 6, 4, 3, 2, 4, 0, 0],
        "20 нояб.": [38, 5, 14, 0, 0, 2, 4, 12, 10, 3, 0, 0, 1, 1, 0],
        "30 нояб.": [21, 3, 6, 0, 0, 1, 4, 7, 2, 2, 2, 0, 1, 0, 0],
        "2 дек.": [24, 4, 10, 0, 0, 1, 3, 9, 6, 6, 2, 2, 0, 0, 0],
        "4 дек.": [24, 4, 8, 0, 0, 2, 5, 10, 6, 5, 3, 0, 5, 0, 0],
        "5 дек.": [24, 4, 8, 2, 2, 2, 4, 12, 4, 1, 0, 0, 0, 0, 0],
        "7 дек.": [38, 5, 13, 3, 3, 2, 3, 15, 5, 3, 0, 0, 1, 0, 0],
        "12 дек.": [39, 6, 10, 7, 10, 3, 5, 22, 4, 5, 2, 0, 0, 0, 0],
        "14 дек.": [39, 9, 21, 4, 4, 4, 10, 26, 6, 2, 0, 1, 2, 0, 0],
        "19 дек.": [38, 10, 18, 0, 0, 3, 6, 23, 3, 4, 2, 1, 1, 0, 0],
        "20 дек.": [35, 10, 21, 3, 3, 3, 11, 26, 6, 4, 0, 0, 2, 0, 0],
        "26 дек.": [33, 4, 13, 2, 2, 0, 5, 10, 7, 3, 1, 0, 1, 0, 0],
        "28 дек.": [34, 3, 16, 2, 4, 2, 7, 10, 2, 5, 0, 0, 2, 0, 0],
        "30 дек.": [41, 10, 21, 0, 0, 5, 10, 25, 6, 4, 4, 1, 1, 0, 0],
        "1 янв.": [40, 9, 14, 2, 3, 3, 6, 23, 5, 2, 4, 1, 0, 0, 0],
        "3 янв.": [41, 10, 16, 2, 2, 4, 9, 26, 2, 4, 2, 2, 2, 0, 0],
        "5 янв.": [42, 6, 17, 0, 0, 5, 11, 17, 8, 9, 2, 2, 3, 0, 0],
        "7 янв.": [35, 4, 13, 4, 4, 1, 6, 13, 6, 7, 5, 0, 2, 0, 0],
        "9 янв.": [40, 3, 8, 0, 0, 0, 3, 6, 9, 7, 2, 0, 1, 0, 0],
        "11 янв.": [45, 6, 19, 3, 4, 2, 8, 17, 4, 4, 2, 0, 4, 0, 0],
        "12 янв.": [33, 5, 7, 0, 0, 5, 6, 15, 2, 8, 1, 0, 2, 0, 0],
        "14 янв.": [27, 3, 10, 2, 2, 1, 6, 9, 3, 2, 2, 1, 2, 0, 0],
        "16 янв.": [35, 4, 5, 0, 0, 2, 2, 10, 4, 4, 0, 1, 3, 0, 0],
      },
    },
    "Desmond Bane": {
      firstName: "Desmond",
      lastName: "Bane",
      team: "Orlando Magic",
      positions: "SG, SF",
      Rank: 83,
      myTeam: true,
      stats: {
        "6 янв.": [24, 5, 8, 4, 6, 1, 2, 15, 2, 3, 0, 0, 4, 0, 0],
        "7 янв.": [35, 4, 14, 0, 0, 1, 6, 9, 3, 3, 2, 0, 4, 0, 0],
        "9 янв.": [38, 9, 19, 5, 5, 0, 3, 23, 5, 5, 0, 0, 2, 0, 0],
        "11 янв.": [35, 9, 18, 8, 8, 1, 4, 27, 5, 4, 2, 0, 3, 0, 0],
        "15 янв.": [34, 5, 13, 2, 2, 1, 5, 13, 4, 5, 0, 2, 3, 0, 0],
        "18 янв.": [36, 4, 12, 2, 2, 1, 4, 11, 4, 3, 2, 1, 2, 0, 0],
      },
    },
    "Gradey Dick": {
      firstName: "Gradey",
      lastName: "Dick",
      team: "Toronto Raptors",
      positions: "SG, SF",
      Rank: 278,
      stats: {
        "22 окт.": [24, 6, 10, 7, 8, 2, 4, 21, 5, 0, 1, 0, 0, 0, 0],
        "24 окт.": [18, 2, 7, 0, 0, 1, 3, 5, 4, 1, 1, 0, 1, 0, 0],
        "26 окт.": [13, 2, 6, 4, 5, 2, 4, 10, 2, 1, 1, 0, 0, 0, 0],
        "27 окт.": [8, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        "29 окт.": [20, 1, 6, 2, 3, 0, 3, 4, 3, 0, 0, 0, 0, 0, 0],
        "31 окт.": [5, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0],
        "2 нояб.": [20, 3, 6, 1, 2, 1, 4, 8, 4, 0, 0, 0, 0, 0, 0],
      },
    },
    "Isaiah Joe": {
      firstName: "Isaiah",
      lastName: "Joe",
      team: "Oklahoma City Thunder",
      positions: "SG, SF",
      Rank: 158,
      stats: {
        "4 нояб.": [21, 7, 12, 2, 2, 6, 10, 22, 3, 0, 0, 0, 1, 0, 0],
        "5 нояб.": [26, 4, 12, 3, 4, 3, 10, 14, 0, 2, 0, 0, 2, 0, 0],
        "7 нояб.": [28, 4, 8, 3, 4, 3, 6, 14, 6, 1, 1, 0, 2, 0, 0],
        "9 нояб.": [21, 3, 10, 0, 0, 2, 7, 8, 2, 0, 0, 1, 0, 0, 0],
        "11 нояб.": [29, 4, 11, 7, 7, 3, 9, 18, 1, 1, 0, 0, 3, 0, 0],
        "12 нояб.": [35, 5, 11, 7, 7, 4, 10, 21, 2, 5, 2, 0, 1, 0, 0],
        "15 нояб.": [21, 1, 5, 0, 0, 1, 3, 3, 5, 1, 2, 0, 1, 0, 0],
      },
    },
    "Jaylen Wells": {
      firstName: "Jaylen",
      lastName: "Wells",
      team: "Memphis Grizzlies",
      positions: "SG, SF",
      Rank: 240,
      stats: {
        "24 нояб.": [33, 8, 13, 2, 4, 4, 8, 22, 5, 3, 1, 0, 0, 0, 0],
        "26 нояб.": [32, 9, 11, 2, 2, 5, 6, 25, 3, 1, 1, 1, 1, 0, 0],
        "28 нояб.": [28, 2, 7, 8, 8, 1, 6, 13, 6, 2, 1, 0, 1, 0, 0],
        "30 нояб.": [30, 4, 5, 4, 4, 3, 3, 15, 3, 1, 0, 0, 1, 0, 0],
        "2 дек.": [28, 6, 9, 6, 8, 2, 3, 20, 1, 2, 0, 0, 0, 0, 0],
        "5 дек.": [27, 7, 11, 0, 0, 3, 5, 17, 3, 0, 1, 0, 2, 0, 0],
        "7 дек.": [26, 4, 8, 6, 8, 2, 4, 16, 5, 3, 2, 0, 0, 0, 0],
      },
    },
  },
  PF: {},
  SF: {
    "Jalen Johnson": {
      firstName: "Jalen",
      lastName: "Johnson",
      team: "Atlanta Hawks",
      positions: "SF, PF",
      Rank: 2,
      myTeam: true,
      stats: {
        "22 окт.": [35, 7, 13, 8, 10, 0, 2, 22, 7, 8, 1, 1, 3, 0, 0],
        "24 окт.": [26, 5, 10, 2, 2, 0, 0, 12, 8, 1, 1, 0, 3, 0, 0],
        "27 окт.": [32, 11, 18, 3, 3, 0, 3, 25, 6, 3, 3, 0, 1, 0, 0],
        "29 окт.": [29, 10, 16, 2, 2, 1, 3, 23, 7, 5, 1, 0, 2, 0, 0],
        "31 окт.": [33, 9, 16, 4, 4, 0, 3, 22, 13, 8, 2, 1, 1, 1, 0],
        "2 нояб.": [35, 10, 16, 2, 5, 1, 2, 23, 13, 5, 1, 0, 4, 1, 0],
        "4 нояб.": [33, 6, 11, 4, 5, 1, 2, 17, 6, 5, 1, 0, 3, 0, 0],
        "7 нояб.": [33, 8, 14, 3, 3, 2, 5, 21, 7, 4, 1, 0, 6, 0, 0],
        "10 нояб.": [35, 7, 16, 2, 2, 0, 3, 16, 10, 8, 1, 1, 1, 1, 0],
        "12 нояб.": [24, 9, 10, 4, 4, 2, 3, 24, 10, 8, 1, 0, 1, 1, 0],
        "13 нояб.": [41, 10, 19, 7, 11, 4, 5, 31, 18, 14, 7, 0, 6, 1, 1],
        "16 нояб.": [39, 9, 13, 5, 6, 2, 3, 25, 10, 7, 1, 0, 5, 1, 0],
        "18 нояб.": [39, 8, 18, 6, 6, 3, 8, 25, 8, 9, 3, 1, 4, 0, 0],
        "20 нояб.": [38, 10, 15, 4, 6, 2, 3, 26, 12, 7, 1, 0, 4, 1, 0],
        "22 нояб.": [34, 6, 15, 4, 6, 2, 4, 18, 11, 9, 1, 1, 4, 1, 0],
        "23 нояб.": [40, 11, 22, 4, 5, 2, 4, 28, 8, 11, 1, 0, 0, 1, 0],
        "25 нояб.": [30, 3, 12, 1, 1, 0, 4, 7, 7, 7, 1, 2, 5, 0, 0],
        "28 нояб.": [39, 9, 18, 8, 12, 3, 7, 29, 12, 12, 2, 0, 3, 1, 1],
        "30 нояб.": [45, 10, 21, 17, 22, 4, 8, 41, 14, 7, 1, 1, 6, 1, 0],
        "1 дек.": [38, 9, 17, 7, 8, 4, 8, 29, 13, 7, 0, 0, 4, 1, 0],
        "5 дек.": [38, 9, 20, 2, 2, 1, 4, 21, 18, 16, 2, 0, 3, 1, 1],
        "6 дек.": [39, 10, 18, 8, 8, 2, 5, 30, 12, 12, 2, 0, 3, 1, 1],
        "12 дек.": [34, 7, 19, 4, 4, 1, 6, 19, 11, 12, 2, 0, 6, 1, 1],
        "14 дек.": [35, 5, 17, 2, 2, 0, 1, 12, 10, 12, 1, 1, 2, 1, 1],
        "18 дек.": [39, 16, 27, 7, 7, 4, 9, 43, 11, 9, 1, 1, 4, 1, 0],
        "19 дек.": [31, 6, 11, 4, 4, 1, 1, 17, 11, 6, 1, 0, 7, 1, 0],
        "21 дек.": [36, 12, 20, 10, 11, 2, 6, 36, 11, 9, 0, 0, 2, 1, 0],
        "23 дек.": [39, 11, 23, 1, 3, 1, 7, 24, 9, 10, 1, 2, 5, 1, 0],
        "26 дек.": [38, 10, 17, 3, 4, 1, 6, 24, 9, 10, 1, 0, 4, 1, 0],
        "27 дек.": [37, 7, 16, 5, 6, 1, 3, 20, 9, 12, 0, 2, 2, 1, 0],
        "31 дек.": [32, 15, 22, 1, 1, 3, 6, 34, 10, 6, 2, 1, 3, 1, 0],
        "2 янв.": [38, 7, 14, 3, 6, 1, 3, 18, 10, 11, 2, 0, 4, 1, 1],
        "3 янв.": [37, 10, 21, 6, 9, 4, 9, 30, 7, 9, 0, 0, 4, 0, 0],
        "5 янв.": [37, 5, 15, 3, 4, 0, 4, 13, 14, 7, 1, 1, 6, 1, 0],
        "7 янв.": [36, 9, 18, 1, 3, 0, 5, 19, 8, 5, 0, 1, 6, 0, 0],
        "9 янв.": [35, 12, 18, 0, 1, 5, 6, 29, 9, 6, 1, 1, 2, 0, 0],
        "11 янв.": [33, 9, 16, 4, 6, 1, 4, 23, 11, 6, 1, 2, 0, 1, 0],
        "13 янв.": [30, 5, 17, 2, 2, 1, 7, 13, 3, 6, 1, 0, 0, 0, 0],
        "15 янв.": [38, 4, 9, 4, 4, 0, 3, 12, 11, 6, 0, 0, 6, 1, 0],
        "17 янв.": [35, 4, 14, 2, 4, 2, 6, 12, 8, 5, 1, 0, 4, 0, 0],
      },
    },
    "Ausar Thompson": {
      firstName: "Ausar",
      lastName: "Thompson",
      team: "Detroit Pistons",
      positions: "SG, SF, PF",
      Rank: 152,
      myTeam: true,
      stats: {
        "22 окт.": [33, 5, 8, 1, 3, 0, 0, 11, 9, 7, 1, 1, 1, 0, 0],
        "24 окт.": [24, 9, 16, 0, 2, 1, 3, 19, 2, 4, 1, 1, 1, 0, 0],
        "26 окт.": [36, 7, 16, 7, 8, 0, 2, 21, 12, 3, 2, 0, 1, 1, 0],
        "27 окт.": [15, 3, 6, 0, 1, 0, 1, 6, 3, 0, 0, 0, 1, 0, 0],
        "29 окт.": [29, 4, 14, 3, 4, 1, 3, 12, 11, 6, 1, 1, 1, 1, 0],
        "1 нояб.": [28, 6, 12, 2, 6, 1, 2, 15, 7, 1, 2, 0, 2, 0, 0],
        "3 нояб.": [27, 4, 7, 1, 6, 0, 1, 9, 4, 1, 4, 2, 2, 0, 0],
        "5 нояб.": [31, 7, 12, 4, 6, 0, 0, 18, 7, 4, 1, 1, 2, 0, 0],
        "7 нояб.": [34, 7, 14, 0, 0, 0, 0, 14, 6, 4, 3, 1, 1, 0, 0],
        "9 нояб.": [34, 6, 10, 1, 3, 1, 1, 14, 5, 4, 3, 0, 2, 0, 0],
        "24 нояб.": [31, 6, 9, 1, 1, 0, 0, 13, 3, 4, 1, 0, 1, 0, 0],
        "26 нояб.": [26, 2, 8, 3, 4, 1, 2, 8, 8, 2, 1, 1, 2, 0, 0],
        "28 нояб.": [23, 3, 7, 2, 4, 0, 0, 8, 7, 2, 1, 0, 3, 0, 0],
        "29 нояб.": [30, 5, 9, 0, 0, 0, 0, 10, 8, 3, 1, 0, 3, 0, 0],
        "1 дек.": [30, 3, 4, 2, 2, 0, 0, 8, 7, 1, 1, 1, 1, 0, 0],
        "3 дек.": [26, 3, 7, 4, 6, 0, 0, 10, 6, 5, 2, 0, 2, 0, 0],
        "5 дек.": [25, 6, 12, 3, 5, 0, 1, 15, 4, 2, 1, 0, 1, 0, 0],
        "6 дек.": [27, 6, 7, 1, 3, 0, 0, 13, 6, 8, 1, 0, 1, 0, 0],
        "12 дек.": [21, 5, 9, 2, 2, 0, 0, 12, 6, 1, 2, 2, 3, 0, 0],
        "15 дек.": [23, 3, 6, 1, 7, 0, 0, 7, 6, 0, 0, 0, 2, 0, 0],
        "18 дек.": [9, 3, 7, 2, 3, 0, 0, 8, 2, 2, 1, 0, 0, 0, 0],
        "20 дек.": [26, 5, 8, 4, 6, 0, 0, 14, 4, 2, 3, 4, 4, 0, 0],
        "22 дек.": [28, 8, 16, 2, 4, 0, 0, 18, 12, 3, 3, 0, 2, 1, 0],
        "23 дек.": [36, 6, 13, 7, 10, 0, 0, 19, 6, 2, 0, 0, 0, 0, 0],
        "26 дек.": [16, 3, 4, 2, 4, 0, 0, 8, 6, 0, 1, 0, 3, 0, 0],
        "28 дек.": [24, 1, 6, 4, 6, 0, 1, 6, 6, 1, 2, 1, 2, 0, 0],
        "30 дек.": [22, 3, 6, 1, 4, 0, 0, 7, 2, 3, 1, 1, 0, 0, 0],
        "1 янв.": [30, 5, 8, 2, 3, 0, 0, 12, 2, 2, 1, 2, 2, 0, 0],
        "4 янв.": [22, 4, 9, 0, 0, 0, 1, 8, 8, 2, 1, 1, 3, 0, 0],
        "5 янв.": [20, 4, 8, 2, 2, 0, 0, 10, 7, 1, 2, 0, 3, 0, 0],
        "7 янв.": [29, 5, 11, 1, 2, 0, 0, 11, 8, 3, 3, 2, 2, 0, 0],
        "10 янв.": [34, 3, 6, 0, 0, 0, 0, 6, 3, 6, 2, 3, 1, 0, 0],
        "15 янв.": [19, 2, 6, 1, 2, 0, 1, 5, 6, 2, 0, 0, 0, 0, 0],
        "17 янв.": [16, 2, 3, 3, 5, 0, 0, 7, 7, 1, 3, 1, 1, 0, 0],
      },
    },
    "Herbert Jones": {
      firstName: "Herbert",
      lastName: "Jones",
      team: "New Orleans Pelicans",
      positions: "SF, PF",
      Rank: 249,
      myTeam: true,
      stats: {
        "18 дек.": [38, 7, 14, 2, 2, 2, 6, 18, 3, 3, 8, 1, 1, 0, 0],
        "20 дек.": [12, 2, 6, 0, 0, 1, 2, 5, 3, 3, 1, 0, 0, 0, 0],
        "22 дек.": [22, 4, 7, 0, 0, 1, 2, 9, 2, 4, 1, 0, 1, 0, 0],
      },
    },
    "Luguentz Dort": {
      firstName: "Luguentz",
      lastName: "Dort",
      team: "Oklahoma City Thunder",
      positions: "SG, PF",
      Rank: 218,
      myTeam: true,
      stats: {
        "5 янв.": [20, 2, 5, 0, 0, 1, 4, 5, 4, 0, 0, 2, 1, 0, 0],
        "7 янв.": [24, 2, 5, 1, 2, 1, 4, 6, 6, 0, 3, 1, 0, 0, 0],
        "9 янв.": [35, 5, 12, 2, 2, 1, 7, 13, 6, 4, 3, 0, 0, 0, 0],
        "11 янв.": [19, 1, 3, 2, 2, 0, 1, 4, 4, 0, 1, 0, 2, 0, 0],
        "15 янв.": [21, 5, 8, 0, 0, 3, 5, 13, 3, 1, 0, 1, 2, 0, 0],
        "17 янв.": [22, 1, 5, 0, 0, 0, 2, 2, 4, 0, 0, 1, 1, 0, 0],
      },
    },
  },
  C: {
    "Jalen Duren": {
      firstName: "Jalen",
      lastName: "Duren",
      team: "Detroit Pistons",
      positions: "C",
      Rank: 38,
      myTeam: true,
      stats: {
        "22 окт.": [20, 7, 12, 1, 2, 0, 0, 15, 6, 1, 1, 2, 1, 0, 0],
        "24 окт.": [12, 3, 4, 0, 0, 0, 0, 6, 6, 0, 1, 1, 1, 0, 0],
        "26 окт.": [28, 6, 12, 12, 13, 0, 0, 24, 18, 1, 0, 2, 4, 1, 0],
        "27 окт.": [21, 3, 5, 2, 4, 0, 0, 8, 7, 2, 1, 2, 4, 0, 0],
        "29 окт.": [33, 5, 9, 11, 12, 0, 0, 21, 13, 2, 0, 1, 5, 1, 0],
        "1 нояб.": [29, 13, 16, 7, 8, 0, 0, 33, 10, 2, 1, 1, 0, 1, 0],
        "3 нояб.": [34, 5, 11, 4, 4, 0, 0, 14, 9, 3, 1, 1, 2, 0, 0],
        "5 нояб.": [35, 10, 15, 2, 4, 0, 0, 22, 22, 3, 0, 1, 1, 1, 0],
        "7 нояб.": [30, 11, 14, 8, 8, 0, 0, 30, 11, 0, 3, 0, 1, 1, 0],
        "9 нояб.": [37, 8, 11, 5, 7, 0, 0, 21, 16, 1, 2, 2, 3, 1, 0],
        "10 нояб.": [40, 6, 10, 7, 11, 0, 0, 19, 14, 3, 2, 0, 5, 1, 0],
        "17 нояб.": [29, 12, 13, 7, 11, 0, 0, 31, 15, 3, 0, 0, 1, 1, 0],
        "18 нояб.": [29, 8, 12, 8, 11, 0, 0, 24, 8, 3, 2, 1, 2, 0, 0],
        "22 нояб.": [27, 7, 10, 5, 8, 0, 0, 19, 6, 5, 0, 0, 3, 0, 0],
        "24 нояб.": [30, 6, 10, 5, 8, 0, 0, 17, 12, 2, 0, 0, 3, 1, 0],
        "26 нояб.": [30, 4, 10, 4, 6, 0, 0, 12, 16, 1, 0, 0, 3, 1, 0],
        "28 нояб.": [31, 5, 8, 6, 6, 0, 0, 16, 12, 2, 1, 4, 5, 1, 0],
        "1 дек.": [32, 9, 12, 3, 4, 0, 0, 21, 11, 0, 0, 0, 3, 1, 0],
        "3 дек.": [26, 4, 7, 0, 1, 0, 0, 8, 6, 3, 1, 0, 1, 0, 0],
        "5 дек.": [27, 6, 11, 6, 9, 0, 0, 18, 8, 0, 0, 1, 6, 0, 0],
        "6 дек.": [33, 6, 8, 4, 5, 0, 0, 16, 16, 1, 0, 1, 1, 1, 0],
        "12 дек.": [24, 6, 10, 2, 4, 0, 0, 14, 7, 2, 1, 1, 0, 0, 0],
        "15 дек.": [29, 3, 6, 0, 0, 0, 0, 6, 3, 0, 2, 2, 1, 0, 0],
        "18 дек.": [34, 8, 20, 1, 2, 0, 0, 17, 13, 1, 2, 0, 1, 1, 0],
        "20 дек.": [25, 9, 16, 1, 2, 0, 0, 19, 11, 2, 1, 0, 1, 1, 0],
        "22 дек.": [24, 11, 15, 4, 6, 0, 0, 26, 10, 2, 1, 2, 0, 1, 0],
        "23 дек.": [32, 10, 15, 3, 7, 0, 0, 23, 13, 4, 0, 2, 1, 1, 0],
        "26 дек.": [22, 5, 7, 1, 1, 0, 0, 11, 4, 0, 0, 0, 4, 0, 0],
        "28 дек.": [31, 8, 12, 2, 2, 0, 0, 18, 14, 2, 0, 1, 1, 1, 0],
        "30 дек.": [28, 6, 8, 2, 4, 0, 0, 14, 8, 2, 5, 0, 5, 0, 0],
        "1 янв.": [18, 6, 12, 0, 0, 0, 0, 12, 5, 0, 1, 0, 1, 0, 0],
      },
    },
    "Kel'el Ware": {
      firstName: "Kel'el",
      lastName: "Ware",
      team: "Miami Heat",
      positions: "PF, C",
      Rank: 16,
      myTeam: true,
      stats: {
        "22 окт.": [14, 3, 5, 0, 0, 1, 2, 7, 4, 0, 1, 1, 1, 0, 0],
        "24 окт.": [23, 8, 12, 2, 3, 1, 1, 19, 9, 1, 1, 1, 2, 0, 0],
        "26 окт.": [22, 2, 4, 0, 0, 1, 2, 5, 8, 0, 1, 0, 1, 0, 0],
        "28 окт.": [27, 4, 13, 4, 5, 2, 8, 14, 9, 1, 0, 0, 2, 0, 0],
        "30 окт.": [21, 0, 4, 0, 0, 0, 4, 0, 7, 3, 1, 1, 1, 0, 0],
        "2 нояб.": [11, 3, 3, 0, 0, 1, 1, 7, 4, 0, 0, 1, 1, 0, 0],
        "3 нояб.": [18, 6, 8, 2, 2, 2, 2, 16, 5, 0, 0, 2, 1, 0, 0],
        "5 нояб.": [27, 4, 6, 3, 4, 2, 4, 13, 13, 0, 4, 1, 1, 1, 0],
        "7 нояб.": [30, 3, 13, 0, 0, 1, 5, 7, 6, 0, 1, 3, 0, 0, 0],
        "8 нояб.": [23, 4, 8, 1, 3, 0, 2, 9, 12, 1, 1, 3, 2, 0, 0],
        "10 нояб.": [34, 7, 14, 0, 0, 0, 1, 14, 20, 1, 1, 1, 0, 1, 0],
        "12 нояб.": [28, 6, 7, 2, 2, 1, 1, 15, 13, 1, 1, 1, 1, 1, 0],
        "14 нояб.": [35, 5, 8, 4, 5, 1, 2, 15, 10, 1, 1, 3, 0, 1, 0],
        "17 нояб.": [31, 7, 9, 1, 1, 1, 1, 16, 14, 1, 1, 3, 0, 1, 0],
        "19 нояб.": [19, 3, 10, 1, 2, 0, 3, 7, 16, 0, 0, 0, 1, 0, 0],
        "21 нояб.": [28, 8, 15, 4, 4, 0, 1, 20, 14, 1, 2, 1, 1, 1, 0],
        "23 нояб.": [26, 7, 13, 4, 5, 2, 2, 20, 16, 0, 2, 0, 0, 1, 0],
        "24 нояб.": [34, 7, 14, 3, 3, 3, 5, 20, 18, 0, 0, 3, 3, 1, 0],
        "26 нояб.": [26, 4, 6, 2, 2, 1, 1, 11, 9, 0, 2, 1, 1, 0, 0],
        "29 нояб.": [22, 6, 9, 0, 0, 0, 1, 12, 7, 0, 1, 1, 2, 0, 0],
        "1 дек.": [16, 0, 3, 0, 0, 0, 1, 0, 9, 0, 0, 1, 0, 0, 0],
        "3 дек.": [25, 8, 11, 2, 2, 4, 5, 22, 10, 2, 1, 1, 3, 1, 0],
        "5 дек.": [22, 1, 3, 2, 2, 0, 1, 4, 8, 1, 0, 1, 2, 0, 0],
        "6 дек.": [30, 2, 4, 1, 2, 0, 1, 5, 6, 0, 2, 2, 1, 0, 0],
        "9 дек.": [12, 1, 1, 2, 2, 0, 0, 4, 6, 0, 0, 1, 0, 0, 0],
        "15 дек.": [19, 3, 7, 0, 0, 0, 2, 6, 13, 0, 0, 2, 3, 0, 0],
        "18 дек.": [30, 8, 11, 5, 6, 1, 2, 22, 12, 1, 0, 4, 0, 1, 0],
        "19 дек.": [28, 8, 12, 2, 2, 6, 7, 24, 14, 2, 0, 1, 0, 1, 0],
        "21 дек.": [35, 11, 15, 1, 2, 5, 7, 28, 19, 0, 1, 0, 1, 1, 0],
        "23 дек.": [21, 2, 8, 0, 0, 1, 3, 5, 9, 0, 2, 0, 0, 0, 0],
        "26 дек.": [33, 7, 10, 0, 0, 2, 4, 16, 13, 0, 1, 1, 3, 1, 0],
        "27 дек.": [28, 7, 11, 0, 0, 1, 3, 15, 7, 0, 3, 1, 0, 0, 0],
        "29 дек.": [24, 8, 12, 0, 0, 3, 6, 19, 9, 0, 1, 0, 0, 0, 0],
        "1 янв.": [27, 1, 6, 2, 2, 0, 4, 4, 13, 0, 2, 2, 1, 0, 0],
        "3 янв.": [29, 4, 7, 2, 2, 1, 3, 11, 8, 1, 0, 1, 1, 0, 0],
        "4 янв.": [25, 7, 13, 1, 2, 1, 4, 16, 12, 1, 0, 1, 1, 1, 0],
        "6 янв.": [28, 3, 10, 0, 0, 1, 5, 7, 11, 2, 0, 1, 1, 0, 0],
        "10 янв.": [17, 1, 2, 0, 0, 0, 0, 2, 3, 0, 0, 0, 1, 0, 0],
        "11 янв.": [16, 4, 8, 0, 0, 0, 3, 8, 1, 0, 1, 0, 1, 0, 0],
        "13 янв.": [16, 4, 6, 0, 0, 2, 3, 10, 5, 1, 1, 0, 0, 0, 0],
        "15 янв.": [9, 1, 5, 0, 0, 1, 4, 3, 5, 0, 0, 0, 1, 0, 0],
        "17 янв.": [16, 3, 11, 0, 0, 1, 3, 7, 9, 0, 1, 1, 0, 0, 0],
      },
    },
    "Goga Bitadze": {
      firstName: "Goga",
      lastName: "Bitadze",
      team: "Orlando Magic",
      positions: "C",
      Rank: 116,
      myTeam: true,
      stats: {
        "1 дек.": [18, 3, 5, 2, 2, 0, 0, 8, 5, 3, 1, 4, 1, 0, 0],
        "3 дек.": [19, 4, 4, 0, 0, 0, 0, 8, 5, 2, 1, 1, 2, 0, 0],
        "5 дек.": [20, 3, 4, 2, 2, 0, 0, 8, 8, 1, 0, 1, 0, 0, 0],
        "7 дек.": [12, 1, 1, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0, 0, 0],
        "9 дек.": [17, 3, 4, 1, 1, 0, 0, 7, 6, 1, 0, 2, 2, 0, 0],
        "13 дек.": [13, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 0, 0, 0],
        "18 дек.": [19, 3, 7, 0, 0, 0, 1, 6, 4, 1, 2, 2, 0, 0, 0],
      },
    },
    "Luka Garza": {
      firstName: "Luka",
      lastName: "Garza",
      team: "Boston Celtics",
      positions: "C",
      Rank: 149,
      myTeam: true,
      stats: {
        "5 янв.": [23, 3, 4, 2, 2, 0, 0, 8, 4, 0, 1, 2, 0, 0, 0],
        "7 янв.": [19, 5, 5, 0, 0, 1, 1, 11, 5, 0, 0, 0, 0, 0, 0],
        "9 янв.": [21, 3, 8, 0, 0, 0, 0, 6, 7, 1, 0, 1, 0, 0, 0],
        "10 янв.": [25, 4, 6, 0, 0, 3, 4, 11, 6, 0, 0, 1, 1, 0, 0],
        "12 янв.": [16, 3, 4, 0, 0, 0, 0, 6, 6, 1, 0, 0, 0, 0, 0],
        "15 янв.": [28, 4, 8, 2, 2, 1, 3, 11, 4, 1, 1, 0, 1, 0, 0],
        "17 янв.": [12, 2, 3, 0, 1, 0, 1, 4, 4, 2, 0, 1, 0, 0, 0],
      },
    },
  },
}; // Данные игроков
function validateStatsLength(players) {
  let ok = true;

  for (const pos in players) {
    for (const name in players[pos]) {
      for (const date in players[pos][name].stats) {
        const stats = players[pos][name].stats[date];
        if (!Array.isArray(stats) || stats.length !== 15) {
          console.log(
            `${name} - ${date}: ${
              Array.isArray(stats) ? stats.length : "не массив"
            } элементов`,
          );
          ok = false;
        }
      }
    }
  }

  if (ok) console.log("OK");
} // Проверка статистики
// validateStatsLength(players);
const result = "9-4-0";
document.querySelector(".profile_result").textContent = result; // Результат
function calculateStatsTotalsAndAverages(players) {
  const fmtMin = (t) => {
    const s = Math.round(t * 60);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };

  const sumCol = (records, idx) =>
    records.reduce((s, r) => s + (r[idx] || 0), 0);
  const pct = (m, a) => (a > 0 ? Math.round((m / a) * 1000) / 10 : 0);

  for (const pos in players) {
    for (const name in players[pos]) {
      const player = players[pos][name];
      const records = Object.values(player.stats);
      const n = records.length;

      const statsTotals = {
        G: n,
        Min: fmtMin(sumCol(records, 0) / n),
        "FG%": pct(sumCol(records, 1), sumCol(records, 2)),
        "FT%": pct(sumCol(records, 3), sumCol(records, 4)),
        "3PM": sumCol(records, 5),
        "3P%": pct(sumCol(records, 5), sumCol(records, 6)),
        Pts: sumCol(records, 7),
        Reb: sumCol(records, 8),
        Ast: sumCol(records, 9),
        Stl: sumCol(records, 10),
        Blk: sumCol(records, 11),
        TO: sumCol(records, 12),
        DD: sumCol(records, 13),
        TD: sumCol(records, 14),
      };

      const keys = Object.keys(statsTotals);
      const startIdx = keys.indexOf("3PM");
      const avgKeys = keys.slice(startIdx).filter((key) => key !== "3P%");

      const statsAverages = { ...statsTotals };
      for (const key of avgKeys) {
        statsAverages[key] = Math.round((statsTotals[key] / n) * 10) / 10;
      }

      player.statsTotals = statsTotals;
      player.statsAverages = statsAverages;
      delete player.stats;
    }
  }

  return players;
}
calculateStatsTotalsAndAverages(players); // Обновление показателей
const statisticTitles = {
  Rank: "Rank",
  G: "Games Played",
  Min: "Minutes Played",
  "FG%": "Field Goal Percentage",
  "FT%": "Free Throw Percentage",
  "3PM": "Three-Points Made",
  "3P%": "Three-Point Percentage",
  Pts: "Points Scored",
  Reb: "Total Rebounds",
  Ast: "Assists",
  Stl: "Steals",
  Blk: "Blocked Shots",
  TO: "Turnovers",
  DD: "Double-doubles",
  TD: "Triple-doubles",
}; // Полные наименования аббревиатур статистики
const clubAbbreviations = {
  "Atlanta Hawks": "ATL",
  "Boston Celtics": "BOS",
  "Detroit Pistons": "DET",
  "Memphis Grizzlies": "MEM",
  "Miami Heat": "MIA",
  "Minnesota Timberwolves": "MIN",
  "New Orleans Pelicans": "NOP",
  "Oklahoma City Thunder": "OKC",
  "Orlando Magic": "ORL",
  "Philadelphia 76ers": "PHI",
  "Toronto Raptors": "TOR",
  "Washington Wizards": "WAS",
}; // Аббревиатуры клубов
const positions = ["PG", "SG", "G", "SF", "PF", "F", "C"]; // Позиции
const basicLink = "https://shoneal.github.io/nba-draft/images/players/";

let isUpdating = false; // Флаг обновления
let playersCount = 0; // Счетчик игроков

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } // Смена темы

  document.querySelectorAll(".filter_header").forEach((el) => {
    if (!el.querySelector("svg")) {
      el.append(document.querySelector(".filter_header svg").cloneNode(true));
    }
  }); // Клонирование svg

  setupAndHandleFilter(selectAvailable, filterAvailable);
  setupAndHandleFilter(selectTeams, filterTeams);
  setupAndHandleFilter(selectPositions, filterPositions);

  initializeTable();
}); // Начальная загрузка

const selectAvailable = document.querySelector(".select_available");
const selectTeams = document.querySelector(".select_teams");
const selectPositions = document.querySelector(".select_positions");
function fillTeams(select, data) {
  const first = select.firstElementChild;
  Object.keys(data)
    .map((team) => team.split(" ").pop())
    .sort()
    .forEach((abbrev) => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = abbrev;
      select.insertBefore(opt, first);
    });
}
function fillPositions(select, pos) {
  const first = select.firstElementChild;
  pos.forEach((pos) => {
    const opt = document.createElement("option");
    opt.value = opt.textContent = pos;
    select.insertBefore(opt, first);
  });
}
fillTeams(selectTeams, clubAbbreviations); // Команды в select
fillPositions(selectPositions, positions); // Позиции в select

const secondLine = document.querySelector(".second_line");
Object.entries(statisticTitles).forEach(([key, title]) => {
  const th = document.createElement("th");
  th.className = "table_header_row has-button";
  th.title = title;
  const wrapper = document.createElement("div");
  wrapper.className = "table_header_wrapper";
  const btn = document.createElement("button");
  btn.className = "table_header_button";
  btn.textContent = key;
  wrapper.append(btn);
  th.append(wrapper);
  secondLine.append(th);
}); // Создание кнопок в шапке таблицы

const playerRowTemplate = document.querySelector("#player_row").content;
const statsMap = (() => {
  const tr = playerRowTemplate.querySelector("tr");
  const cells = [...tr.querySelectorAll("td:not(:first-child)")];

  return Object.fromEntries(
    Object.entries(statisticTitles).map(([key, title], index) => [
      key,
      {
        title,
        className: cells[index]?.classList[0] || "",
      },
    ]),
  );
})(); // Полные наименования аббревиатур статистики + его соответствующие классы из HTML

const searchInput = document.querySelector(".search_input");
const headerButtons = document.querySelectorAll(".table_header_button");
Object.values(players).forEach((positionGroup) => {
  playersCount += Object.entries(positionGroup).length;
}); // Подсчет общего количества игроков
function updatePlayersTable() {
  const searchValue = normalizeString(searchInput.value);
  const selectedAvailable = selectAvailable.value;
  const selectedTeam = selectTeams.value;
  let defaultTeam = selectTeams.querySelector("option[selected]").value;
  const selectedPosition = selectPositions.value;
  let defaultPosition = selectPositions.querySelector("option[selected]").value;

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const flatArray = Object.values(players).flatMap((positionGroup) =>
    Object.entries(positionGroup).map(([name, player]) => ({
      name,
      ...player,
    })),
  );

  let filteredPlayers = flatArray;

  if (searchValue) {
    filteredPlayers = filteredPlayers.filter(
      (player) =>
        normalizeString(player.firstName).includes(searchValue) ||
        normalizeString(player.lastName).includes(searchValue),
    );
  }

  if (selectedAvailable) {
    filteredPlayers =
      selectedAvailable === "My Team"
        ? flatArray.filter((player) => player.myTeam === true)
        : [...flatArray];
  }

  function applyFilter(value, defaultValue, field, compareFn) {
    if (value !== defaultValue) {
      filteredPlayers = filteredPlayers.filter((player) => {
        return compareFn(player[field], value);
      });
    }
  }
  applyFilter(selectedTeam, defaultTeam, "team", (playerValue, filterValue) =>
    playerValue.toLowerCase().includes(filterValue.toLowerCase()),
  );
  applyFilter(
    selectedPosition,
    defaultPosition,
    "positions",
    (playerValue, filterValue) => playerValue.includes(filterValue),
  );

  const isAveragesActive =
    document.querySelector(
      ".table_output_button.is_average.table_output_button-is_active",
    ) !== null;
  const dataSource = isAveragesActive ? "statsAverages" : "statsTotals";

  filteredPlayers.sort((a, b) => {
    let valA, valB;
    const activeButton = Array.from(headerButtons).find((btn) =>
      btn.classList.contains("active-button"),
    );
    const sortBy = activeButton?.textContent || "Rank";

    if (sortBy in a[dataSource]) {
      valA = a[dataSource][sortBy];
      valB = b[dataSource][sortBy];

      if (sortBy === "Min") {
        const [minA, secA] = valA.split(":").map(Number);
        const [minB, secB] = valB.split(":").map(Number);
        valA = minA * 60 + secA;
        valB = minB * 60 + secB;
      }
    } else if (sortBy in a) {
      valA = a[sortBy];
      valB = b[sortBy];
    } else {
      return 0;
    }

    const isAscending = ["Rank", "TO"].includes(sortBy);

    return isAscending ? valA - valB : valB - valA;
  });

  playersCount = filteredPlayers.length;
  return filteredPlayers;
} // Обновление таблицы игроков

const tableBody = document.querySelector(".table_body");
let activePlayerName = null;
function updateNumbers(row) {
  const item = row.playerData;
  const isAveragesActive = !!document.querySelector(
    ".table_output_button.is_average.table_output_button-is_active",
  );
  const dataSource = isAveragesActive ? item.statsAverages : item.statsTotals;

  const statKeys = Object.keys(statsMap);
  const boundaryIndex = statKeys.indexOf("3PM");

  Object.entries(statsMap).forEach(([key, statData]) => {
    const cell = row.querySelector(`.${statData.className}`);
    if (!cell) return;

    let value =
      key === "Rank"
        ? item.Rank
        : dataSource && key in dataSource
          ? dataSource[key]
          : item[key] || 0;

    const fromAverages = isAveragesActive;
    const showDecimal = statKeys.indexOf(key) >= boundaryIndex && key !== "3P%";

    if (key.includes("%")) {
      let numValue = parseFloat(value);
      if (numValue >= 1) numValue /= 100;
      cell.textContent = "." + numValue.toFixed(3).replace(/^0\./, "");
    } else if (typeof value === "number" || !isNaN(value)) {
      const formatted =
        fromAverages && showDecimal
          ? parseFloat(value).toFixed(1)
          : parseInt(value, 10).toString();

      cell.textContent = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      cell.textContent = value;
    }

    cell.classList.toggle(
      "zero-value",
      (fromAverages && showDecimal && cell.textContent === "0.0") ||
        ((!fromAverages || !showDecimal) && cell.textContent === "0") ||
        cell.textContent === ".000",
    );
  });
}
const setupImageWithContainer = (img) => {
  const onLoadOrError = () => {
    img.style.opacity = "1";
    img.removeEventListener("load", onLoadOrError);
    img.removeEventListener("error", onLoadOrError);
  };

  if (img.complete) {
    onLoadOrError();
  } else {
    img.addEventListener("load", onLoadOrError);
    img.addEventListener("error", onLoadOrError);
  }
}; // Функция для настройки прозрачности изображения
function createTableRow(item) {
  const player = playerRowTemplate.querySelector(".table_row").cloneNode(true);
  player.dataset.playerName = item.name;
  player.playerData = item;

  const photo = player.querySelector(".player_photo");
  photo.style.opacity = "0";
  photo.src = `${basicLink}${normalizeString(item.name)}.png`;
  photo.alt = item.name;
  setupImageWithContainer(photo);

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Za-яА-ЯёЁ]/g, "");
  }

  function formatFirstName(firstName) {
    if (/^[A-Z]{2,}$/.test(firstName) || firstName.includes(".")) {
      return firstName;
    }
    return firstName[0] + ".";
  }

  function updateNameDisplay() {
    player.querySelector(".player_firstName").textContent =
      window.innerWidth < 768
        ? formatFirstName(item.firstName)
        : item.firstName;
  }
  updateNameDisplay();
  window.addEventListener("resize", updateNameDisplay);

  player.querySelector(".player_lastName").textContent = item.lastName;
  player.querySelector(".player_club").textContent =
    clubAbbreviations[item.team];
  player.querySelector(".player_club").title = item.team;
  player.querySelector(".player_position").textContent = item.positions;

  if (activePlayerName === item.name) {
    player.classList.add("table_row-is_active");
  }
  const handleClick = () => {
    activePlayerName = item.name;
    document
      .querySelectorAll(".table_row")
      .forEach((row) => row.classList.remove("table_row-is_active"));
    player.classList.add("table_row-is_active");
    if (window.innerWidth < 768) {
      const nextRow = player.nextElementSibling;
      if (nextRow) {
        nextRow.classList.add("table_row-is_active");
      }
    }
  };

  const selectedAvailable = selectAvailable.value;
  if (selectedAvailable !== "My Team" && item.myTeam) {
    player.dataset.myTeamPlayer = "yes";
  } else {
    delete player.dataset.myTeamPlayer;
  }

  player.addEventListener("click", handleClick);
  player
    .querySelectorAll("button, select, option, input")
    .forEach((el) => el.addEventListener("click", (e) => e.stopPropagation()));

  updateNumbers(player);

  return player;
} // Создание строки игрока
function updateRowCounter() {
  const count = playersCount;
  document.querySelector(".counting_rows").textContent = `1-${count}`;
} // Обновление счетчика строк

async function updateTable() {
  if (isUpdating) return;
  isUpdating = true;

  try {
    tableBody.innerHTML = "";
    document.querySelector(".counting_rows").style.display = "none";

    for (let i = 0; i < playersCount; i++) {
      const loaderRow = document.createElement("tr");
      loaderRow.classList.add("loading-row");

      const loaderCell = document.createElement("td");
      loaderCell.setAttribute("colspan", "16");

      const loaderDiv = document.createElement("div");
      loaderCell.appendChild(loaderDiv);

      if (i === playersCount - 1) {
        loaderCell.classList.add("last-loader-td");
      }

      loaderRow.appendChild(loaderCell);
      tableBody.appendChild(loaderRow);
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    const sortedPlayers = updatePlayersTable();

    tableBody.innerHTML = "";

    sortedPlayers.forEach((player) => {
      tableBody.append(createTableRow(player));
    });
    setupResponsiveTable();

    document.querySelector(".counting_rows").style.display = "flex";

    updateRowCounter();
  } catch (error) {
    console.error("Произошла ошибка:", error);
  } finally {
    isUpdating = false;
  }
} // Обновление таблицы

const clearButton = document.querySelector(".search_clear");
searchInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    clearButton.style.display = "block";
  }
  updateTable();
}); // Поиск
clearButton.addEventListener("click", function () {
  searchInput.value = "";
  updateTable();
}); // Очистка поиска

const filterAvailable = document.querySelector(".filter_available");
const filterTeams = document.querySelector(".filter_teams");
const filterPositions = document.querySelector(".filter_positions");
function updateFilterTitle(select, filterContainer) {
  filterContainer.querySelector(".filter_title").textContent = select.value;
}
function setupAndHandleFilter(select, filterContainer) {
  updateFilterTitle(select, filterContainer);
  select.addEventListener("change", (event) => {
    updateFilterTitle(select, filterContainer);
    updateTable();
  });
} // Селекты

headerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    headerButtons.forEach((btn) => {
      btn.classList.remove("active-button");
      btn.disabled = false;
    });

    button.classList.add("active-button");
    button.disabled = true;

    updateTable();
  });
}); // Кнопки фильтров

function initializeTable() {
  const loaderRows = tableBody.querySelectorAll(".loading-row");

  try {
    const sortedPlayers = updatePlayersTable();

    tableBody.innerHTML = "";

    sortedPlayers.forEach((player) => {
      tableBody.append(createTableRow(player));
    });
    setupResponsiveTable();

    document.querySelector(".counting_rows").style.display = "flex";

    updateRowCounter();
  } catch (error) {
    console.error("Ошибка при инициализации таблицы:", error);
  }
} // Начальная отрисовка

const switchingStatisticsButtons = document.querySelectorAll(
  ".table_output_button",
);
switchingStatisticsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchingStatisticsButtons.forEach((btn) =>
      btn.classList.remove("table_output_button-is_active"),
    );
    button.classList.add("table_output_button-is_active");
    headerButtons.forEach((headerBtn) => {
      headerBtn.classList.remove("active-button");
      headerBtn.disabled = false;
    });
    tableBody.querySelectorAll(".table_row").forEach(updateNumbers);
  });
});
// Клик по кнопкам Averages и Totals

function handleDocumentClick(event) {
  const target = event.target;
  if (["BUTTON", "SELECT", "OPTION", "INPUT"].includes(target.tagName)) {
    return;
  }

  if (!target.closest(".table_row")) {
    document
      .querySelectorAll(".table_row")
      .forEach((row) => row.classList.remove("table_row-is_active"));
    activePlayerName = null;
  }
} // Снятие активной строки в таблице
document.addEventListener("click", handleDocumentClick);

function setupResponsiveTable() {
  const container =
    document.querySelector("table tbody") || document.querySelector("table");
  if (!container) return;

  const update = () => {
    const mobile = window.innerWidth < 768;

    container
      .querySelectorAll(".table_row:not(.table_row-stats)")
      .forEach((row) => {
        const firstTd = row.firstElementChild;
        if (!firstTd) return;

        const hasMyTeamPlayer = row.dataset.myTeamPlayer === "yes";
        const toggleClass = (el, className) => {
          el?.classList.toggle(className, hasMyTeamPlayer);
        };

        if (mobile) {
          let statsRow = row.nextElementSibling;
          if (!statsRow || !statsRow.classList.contains("table_row-stats")) {
            statsRow = document.createElement("tr");
            statsRow.className = "table_row table_row-stats";

            [...row.children]
              .slice(1)
              .forEach((td) => statsRow.appendChild(td));
            container.insertBefore(statsRow, row.nextSibling);
            statsRow.playerData = row.playerData;
          }

          toggleClass(row, "my_team_player");
          toggleClass(statsRow, "my_team_player");

          firstTd.colSpan = 15;
          firstTd.classList.add("table_cell-mobile-first");
          statsRow.classList.toggle(
            "table_row-is_active",
            row.classList.contains("table_row-is_active"),
          );
        } else {
          const statsRow = row.nextElementSibling;
          if (statsRow && statsRow.classList.contains("table_row-stats")) {
            toggleClass(statsRow, "my_team_player");
            [...statsRow.children].forEach((td) => row.appendChild(td));
            statsRow.remove();
          }
          toggleClass(row, "my_team_player");
          firstTd.colSpan = 1;
          firstTd.classList.remove("table_cell-mobile-first");
        }
      });
  };

  update();
  let timer;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(update, 100);
  });

  new MutationObserver(update).observe(container, {
    childList: true,
    subtree: true,
  });
}
