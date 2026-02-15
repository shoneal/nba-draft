import { players } from './players.js';
import { result, place } from './result-and-place.js';
import { clubAbbreviations } from './club-abbreviations.js';

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

document.querySelector(".profile_result").textContent = result; // Результат
const updatePlaceText = () => {
  document.querySelector(".profile_result_place").textContent =
    window.innerWidth > 768 ? `${place}rd Place` : `• ${place}rd or 20`;
};
window.addEventListener("resize", updatePlaceText); // Место

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
const positions = ["PG", "SG", "G", "SF", "PF", "F", "C"]; // Позиции
const basicLink = "https://shoneal.github.io/nba-draft/images/players/";

const checkTeamsInAbbreviations = (players, clubAbbreviations) => {
  const missing = Object.values(players)
    .flatMap((pos) => Object.values(pos).map((p) => p.team))
    .filter((team, i, arr) => arr.indexOf(team) === i) // уникальные команды
    .filter((team) => !(team in clubAbbreviations));

  console.log(
    missing.length
      ? missing.map((t) => `Нет команды: ${t}`).join("\n")
      : "Все команды есть",
  );
}; // Проверка команд, которых нет в clubAbbreviations
// checkTeamsInAbbreviations(players, clubAbbreviations)

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

  updatePlaceText();
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
