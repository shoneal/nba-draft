const players = {
  PG: {
    "Trae Young": {
      name: "Trae Young",
      team: "Atlanta Hawks",
      positions: "PG",
      number: 11,
      Rank: 333,
      statsTotals: {
        G: 5,
        Min: "27:48",
        "FG%": 37.1,
        "FT%": 82.1,
        "3PM": 5,
        "3P%": 19.2,
        Pts: 89,
        Reb: 10,
        Ast: 39,
        Stl: 4,
        Blk: 1,
        TO: 10,
        DD: 2,
        TD: 0,
      },
    },
    "Anthony Black": {
      name: "Anthony Black",
      team: "Orlando Magic",
      positions: "PG, SG",
      number: 0,
      Rank: 136,
      statsTotals: {
        G: 19,
        Min: "27:09",
        "FG%": 48.9,
        "FT%": 69.4,
        "3PM": 23,
        "3P%": 34.8,
        Pts: 244,
        Reb: 55,
        Ast: 52,
        Stl: 27,
        Blk: 11,
        TO: 39,
        DD: 0,
        TD: 0,
      },
    },
    "Miles McBride": {
      name: "Miles McBride",
      team: "New York Knicks",
      positions: "PG, SG",
      number: 2,
      Rank: 235,
      statsTotals: {
        G: 2,
        Min: "30:30",
        "FG%": 40.0,
        "FT%": 0,
        "3PM": 8,
        "3P%": 36.4,
        Pts: 36,
        Reb: 4,
        Ast: 2,
        Stl: 0,
        Blk: 2,
        TO: 1,
        DD: 0,
        TD: 0,
      },
    },
    "Quenton Jackson": {
      name: "Quenton Jackson",
      team: "Indiana Pacers",
      positions: "PG, SG",
      number: 29,
      Rank: 266,
      statsTotals: {
        G: 1,
        Min: "20:00",
        "FG%": 25.0,
        "FT%": 71.4,
        "3PM": 0,
        "3P%": 0,
        Pts: 7,
        Reb: 2,
        Ast: 4,
        Stl: 0,
        Blk: 0,
        TO: 1,
        DD: 0,
        TD: 0,
      },
    },
  },
  SG: {
    "N. Alexander-Walker": {
      name: "N. Alexander-Walker",
      team: "Atlanta Hawks",
      positions: "PG, SG, SF",
      number: 7,
      Rank: 84,
      statsTotals: {
        G: 17,
        Min: "31:53",
        "FG%": 46.0,
        "FT%": 83.8,
        "3PM": 39,
        "3P%": 35.8,
        Pts: 317,
        Reb: 53,
        Ast: 62,
        Stl: 15,
        Blk: 15,
        TO: 38,
        DD: 0,
        TD: 0,
      },
    },
    "Donte DiVincenzo": {
      name: "Donte DiVincenzo",
      team: "Minnesota Timberwolves",
      positions: "PG, SG",
      number: 0,
      Rank: 65,
      statsTotals: {
        G: 17,
        Min: "31:11",
        "FG%": 41.6,
        "FT%": 86.7,
        "3PM": 52,
        "3P%": 38.8,
        Pts: 235,
        Reb: 66,
        Ast: 58,
        Stl: 20,
        Blk: 8,
        TO: 25,
        DD: 0,
        TD: 0,
      },
    },
    "VJ Edgecombe": {
      name: "VJ Edgecombe",
      team: "Philadelphia 76ers",
      positions: "PG, SG",
      number: 77,
      Rank: 121,
      statsTotals: {
        G: 15,
        Min: "37:20",
        "FG%": 40.7,
        "FT%": 73.7,
        "3PM": 30,
        "3P%": 36.6,
        Pts: 234,
        Reb: 90,
        Ast: 63,
        Stl: 19,
        Blk: 7,
        TO: 29,
        DD: 2,
        TD: 0,
      },
    },
    "Gradey Dick": {
      name: "Gradey Dick",
      team: "Toronto Raptors",
      positions: "SG, SF",
      number: 1,
      Rank: 234,
      statsTotals: {
        G: 7,
        Min: "15:26",
        "FG%": 38.5,
        "FT%": 77.8,
        "3PM": 6,
        "3P%": 28.6,
        Pts: 50,
        Reb: 18,
        Ast: 2,
        Stl: 3,
        Blk: 0,
        TO: 1,
        DD: 0,
        TD: 0,
      },
    },
    "Isaiah Joe": {
      name: "Isaiah Joe",
      team: "Oklahoma City Thunder",
      positions: "SG",
      number: 11,
      Rank: 124,
      statsTotals: {
        G: 7,
        Min: "25:51",
        "FG%": 40.6,
        "FT%": 91.7,
        "3PM": 22,
        "3P%": 40.0,
        Pts: 100,
        Reb: 19,
        Ast: 10,
        Stl: 5,
        Blk: 1,
        TO: 10,
        DD: 0,
        TD: 0,
      },
    },
    "Cam Spencer": {
      name: "Cam Spencer",
      team: "Memphis Grizzlies",
      positions: "SG",
      number: 24,
      Rank: 106,
      statsTotals: {
        G: 3,
        Min: "22:40",
        "FG%": 35.3,
        "FT%": 80.0,
        "3PM": 3,
        "3P%": 37.5,
        Pts: 19,
        Reb: 5,
        Ast: 10,
        Stl: 2,
        Blk: 1,
        TO: 0,
        DD: 0,
        TD: 0,
      },
    },
    "Caris LeVert": {
      name: "Caris LeVert",
      team: "Detroit Pistons",
      positions: "SG, SF",
      number: 8,
      Rank: 255,
      statsTotals: {
        G: 2,
        Min: "15:00",
        "FG%": 42.9,
        "FT%": 0,
        "3PM": 1,
        "3P%": 16.7,
        Pts: 13,
        Reb: 5,
        Ast: 9,
        Stl: 1,
        Blk: 0,
        TO: 4,
        DD: 0,
        TD: 0,
      },
    },
    "Javonte Green": {
      name: "Javonte Green",
      team: "Detroit Pistons",
      positions: "SG, SF",
      number: 31,
      Rank: 193,
      statsTotals: {
        G: 3,
        Min: "23:00",
        "FG%": 68.4,
        "FT%": 100.0,
        "3PM": 3,
        "3P%": 37.5,
        Pts: 36,
        Reb: 8,
        Ast: 1,
        Stl: 4,
        Blk: 0,
        TO: 3,
        DD: 0,
        TD: 0,
      },
    },
  },
  PF: {},
  SF: {
    "Jalen Johnson": {
      name: "Jalen Johnson",
      team: "Atlanta Hawks",
      positions: "SF, PF",
      number: 1,
      Rank: 6,
      statsTotals: {
        G: 17,
        Min: "33:53",
        "FG%": 54.7,
        "FT%": 80.2,
        "3PM": 22,
        "3P%": 38.6,
        Pts: 365,
        Reb: 161,
        Ast: 119,
        Stl: 28,
        Blk: 7,
        TO: 53,
        DD: 9,
        TD: 1,
      },
    },
    "Ausar Thompson": {
      name: "Ausar Thompson",
      team: "Detroit Pistons",
      positions: "SG, SF, PF",
      number: 9,
      Rank: 160,
      statsTotals: {
        G: 11,
        Min: "29:16",
        "FG%": 51.6,
        "FT%": 50.0,
        "3PM": 4,
        "3P%": 30.8,
        Pts: 152,
        Reb: 69,
        Ast: 38,
        Stl: 19,
        Blk: 7,
        TO: 15,
        DD: 2,
        TD: 0,
      },
    },
  },
  C: {
    "Jalen Duren": {
      name: "Jalen Duren",
      team: "Detroit Pistons",
      positions: "C",
      number: 0,
      Rank: 20,
      statsTotals: {
        G: 15,
        Min: "28:56",
        "FG%": 67.1,
        "FT%": 75.7,
        "3PM": 0,
        "3P%": 0,
        Pts: 304,
        Reb: 173,
        Ast: 31,
        Stl: 14,
        Blk: 14,
        TO: 36,
        DD: 9,
        TD: 0,
      },
    },
    "Kel'el Ware": {
      name: "Kel'el Ware",
      team: "Miami Heat",
      positions: "PF, C",
      number: 7,
      Rank: 11,
      statsTotals: {
        G: 18,
        Min: "24:57",
        "FG%": 52.4,
        "FT%": 79.5,
        "3PM": 19,
        "3P%": 40.4,
        Pts: 224,
        Reb: 198,
        Ast: 11,
        Stl: 18,
        Blk: 25,
        TO: 18,
        DD: 8,
        TD: 0,
      },
    },
  },
}; // Данные игроков
for (const position in players) {
  for (const playerName in players[position]) {
    const player = players[position][playerName];
    const statsTotals = player.statsTotals;
    const games = statsTotals.G;

    const statsAverages = {};

    // Флаг: начали ли мы обрабатывать поля после 3PM
    let after3PM = false;

    for (const stat in statsTotals) {
      if (stat === "3PM") {
        after3PM = true;
      }

      if (!after3PM) {
        // Копируем поля до 3PM как есть
        statsAverages[stat] = statsTotals[stat];
      } else if (stat === "3P%") {
        // 3P% копируем без изменений (исключаем из расчёта средних)
        statsAverages[stat] = statsTotals[stat];
      } else {
        // Для 3PM и последующих полей (кроме 3P%): делим на G и фиксируем 1 знак после запятой
        const totalValue = statsTotals[stat];
        const averageValue = totalValue / games;
        statsAverages[stat] = parseFloat(averageValue.toFixed(1));
      }
    }

    player.statsAverages = statsAverages;
  }
}
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
  "Detroit Pistons": "DET",
  "Indiana Pacers": "IND",
  "Memphis Grizzlies": "MEM",
  "Miami Heat": "MIA",
  "Minnesota Timberwolves": "MIN",
  "New York Knicks": "NYK",
  "Oklahoma City Thunder": "OKC",
  "Orlando Magic": "ORL",
  "Philadelphia 76ers": "PHI",
  "Toronto Raptors": "TOR",
}; // Аббревиатуры клубов
const positions = ["PG", "SG", "G", "SF", "PF", "F", "C"]; // Позиции
const basicLink = "https://shoneal.github.io/nba-draft/images/players/";

let isUpdating = false; // Флаг обновления
let playersCount = 0; // Счетчик игроков

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  setupAndHandleFilter(selectTeams, filterTeams);
  setupAndHandleFilter(selectPositions, filterPositions);

  initializeTable();
}); // Начальная загрузка

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
const tableHeaderTemplate = document.querySelector("#table_header").content;
function createTableHeaderRow(key, title) {
  const row = tableHeaderTemplate
    .querySelector(".table_header_row")
    .cloneNode(true);
  const button = row.querySelector(".table_header_button");

  button.textContent = key;
  row.title = title;

  return row;
}
Object.entries(statisticTitles).forEach(([key, title]) => {
  secondLine.append(createTableHeaderRow(key, title));
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
    ])
  );
})(); // Полные наименования аббревиатур статистики + его соответствующие классы из HTML

const searchInput = document.querySelector(".search_input");
const headerButtons = document.querySelectorAll(".table_header_button");
Object.values(players).forEach((positionGroup) => {
  playersCount += Object.entries(positionGroup).length;
}); // Подсчет общего количества игроков
function updatePlayersTable() {
  const searchValue = normalizeString(searchInput.value);
  const selectedTeam = selectTeams.value;
  const defaultTeam = selectTeams.querySelector(
    ".select_teams option[selected]"
  ).value;
  const selectedPosition = selectPositions.value;
  const defaultPosition =
    selectPositions.querySelector("option[selected]").value;

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
    }))
  );

  let filteredPlayers = flatArray;

  if (searchValue) {
    filteredPlayers = filteredPlayers.filter((player) =>
      normalizeString(player.name).includes(searchValue)
    );
  }

  function applyFilter(value, defaultValue, field, compareFn) {
    if (value !== defaultValue) {
      filteredPlayers = filteredPlayers.filter((player) => {
        return compareFn(player[field], value);
      });
    }
  }
  applyFilter(selectedTeam, defaultTeam, "team", (playerValue, filterValue) =>
    playerValue.toLowerCase().includes(filterValue.toLowerCase())
  );
  applyFilter(
    selectedPosition,
    defaultPosition,
    "positions",
    (playerValue, filterValue) => playerValue.includes(filterValue)
  );

  const isAveragesActive =
    document.querySelector(
      ".table_output_button.is_average.table_output_button-is_active"
    ) !== null;
  const dataSource = isAveragesActive ? "statsAverages" : "statsTotals";

  filteredPlayers.sort((a, b) => {
    let valA, valB;
    const activeButton = Array.from(headerButtons).find((btn) =>
      btn.classList.contains("active-button")
    );
    const sortBy = activeButton?.textContent || "G";

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

    if (valA === valB) {
      const rankA = a.Rank;
      const rankB = b.Rank;
      return rankA - rankB;
    }
    return isAscending ? valA - valB : valB - valA;
  });

  playersCount = filteredPlayers.length;
  return filteredPlayers;
} // Обновление таблицы игроков

const tableBody = document.querySelector(".table_body");

let activePlayerName = null;
function handleDocumentClick(event) {
  const target = event.target;
  const isAllowedElement =
    target.tagName === "BUTTON" ||
    target.tagName === "SELECT" ||
    target.tagName === "OPTION" ||
    target.tagName === "INPUT";

  if (isAllowedElement) {
    return;
  }
  const isClickOnRow = target.closest(".table_row");
  if (!isClickOnRow) {
    document.querySelectorAll(".table_row").forEach((row) => {
      row.classList.remove("table_row-is_active");
    });
    activePlayerName = null;
  }
} // Клик по строкам для выделения
function createTableRow(item) {
  const player = playerRowTemplate.querySelector(".table_row").cloneNode(true);
  player.dataset.playerName = item.name;
  player.playerData = item;

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Za-яА-ЯёЁ]/g, "");
  }

  const photo = player.querySelector(".player_photo");
  photo.src = `${basicLink}${normalizeString(item.name)}.png`;
  photo.alt = item.name;
  photo.addEventListener("load", () => {
    photo.style.opacity = "1";
  });

  player.querySelector(".player_name").textContent = item.name;
  player.querySelector(".player_club").textContent =
    clubAbbreviations[item.team];
  player.querySelector(".player_club").title = item.team;
  player.querySelector(".player_position").textContent = item.positions;

  const statKeys = Object.keys(statsMap);
  const boundaryIndex = statKeys.indexOf("3PM");

  player.updateNumbers = () => {
    const isAveragesActive =
      document.querySelector(
        ".table_output_button.is_average.table_output_button-is_active"
      ) !== null;

    const dataSource = isAveragesActive ? item.statsAverages : item.statsTotals;

    Object.entries(statsMap).forEach(([key, statData]) => {
      const cell = player.querySelector(`.${statData.className}`);
      if (!cell) return;

      let value;
      let fromAverages = false;
      let showDecimal = false;

      if (key === "Rank") {
        value = item.Rank;
      } else if (dataSource && key in dataSource) {
        value = dataSource[key];
        fromAverages = isAveragesActive;
      } else {
        value = item[key] || 0;
      }

      // Форматирование
      if (key.includes("%")) {
        let numValue = parseFloat(value);
        if (numValue >= 1) numValue /= 100;
        cell.textContent = "." + numValue.toFixed(3).replace(/^0\./, "");
      } else if (typeof value === "number" || !isNaN(value)) {
        // Определяем, нужно ли показывать .0
        const keyIndex = statKeys.indexOf(key);
        showDecimal = keyIndex >= boundaryIndex && key !== "3P%";

        if (fromAverages && showDecimal) {
          const formattedValue = parseFloat(value).toFixed(1);
          const parts = formattedValue.split(".");
          const integerPart = parseInt(parts[0], 10)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          cell.textContent = integerPart + "." + parts[1];
        } else {
          const formattedValue = parseInt(value, 10).toString();
          cell.textContent = formattedValue.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          );
        }
      } else {
        cell.textContent = value;
      }
      cell.classList.toggle(
        "zero-value",
        (fromAverages && showDecimal && cell.textContent === "0.0") ||
          ((!fromAverages || !showDecimal) && cell.textContent === "0") ||
          cell.textContent === ".000"
      );
    });
  };

  player.updateNumbers();

  if (activePlayerName === item.name) {
    player.classList.add("table_row-is_active");
  }
  const handleRowClick = () => {
    activePlayerName = item.name;
    document.querySelectorAll(".table_row").forEach((row) => {
      row.classList.remove("table_row-is_active");
    });
    player.classList.add("table_row-is_active");
  };
  const allowedElements = player.querySelectorAll(
    "button, select, option, input"
  );
  allowedElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
  player.addEventListener("click", handleRowClick);

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

    document.querySelector(".counting_rows").style.display = "flex";

    updateRowCounter();
  } catch (error) {
    console.error("Ошибка при инициализации таблицы:", error);
  }
} // Начальная отрисовка

document.querySelectorAll(".table_output_button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".table_output_button")
      .forEach((btn) => btn.classList.remove("table_output_button-is_active"));
    button.classList.add("table_output_button-is_active");
    const tableBody = document.querySelector(".table_body");
    const rows = tableBody.querySelectorAll(".table_row");
    rows.forEach((row) => row.updateNumbers());
    updateTable();
  });
}); // Клик по кнопкам Averages и Totals
document.addEventListener("click", handleDocumentClick);
