import { players } from "./players.js";
import { clubAbbreviations } from "./club-abbreviations.js";

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

function transformPlayerStats(players) {
  // Вспомогательная функция для форматирования минут во время 00:00
  const fmtMin = (t) => {
    const s = Math.round(t * 60);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };

  // Вспомогательная функция для расчёта процентов с округлением до одного знака
  const pct = (m, a) => (a > 0 ? Math.round((m / a) * 1000) / 10 : 0);

  const result = { ...players };

  for (const position in result) {
    const playersInPosition = result[position];

    for (const playerName in playersInPosition) {
      const player = playersInPosition[playerName];
      const stats = player.stats;

      // Извлекаем G (первое число из stats)
      const G = stats[0];

      // Рассчитываем процентные значения
      const FG_pct = pct(stats[2], stats[3]);
      const FT_pct = pct(stats[4], stats[5]);
      const ThreeP_pct = pct(stats[6], stats[7]);

      // Среднее количество минут на игру
      const avgMin = G !== 0 ? stats[1] / G : 0;

      // Создаём statsTotals
      const statsTotals = {
        G: G,
        Min: fmtMin(stats[1]), // Общее время игры
        "FG%": FG_pct,
        "FT%": FT_pct,
        "3PM": stats[6],
        "3P%": ThreeP_pct,
        Pts: stats[8],
        Reb: stats[9],
        Ast: stats[10],
        Stl: stats[11],
        Blk: stats[12],
        TO: stats[13],
        DD: stats[14],
        TD: stats[15],
      };

      // Создаём statsAverages
      const statsAverages = {
        G: G,
        Min: fmtMin(avgMin), // Среднее время на игру
        "FG%": FG_pct, // процентные значения не делятся на G
        "FT%": FT_pct, // процентные значения не делятся на G
        "3PM": G !== 0 ? Number((stats[6] / G).toFixed(1)) : 0,
        "3P%": ThreeP_pct, // процентное значение не делится на G
        Pts: G !== 0 ? Math.round(stats[8] / G) : 0, // округление до целого числа
        Reb: G !== 0 ? Number((stats[9] / G).toFixed(1)) : 0,
        Ast: G !== 0 ? Number((stats[10] / G).toFixed(1)) : 0,
        Stl: G !== 0 ? Number((stats[11] / G).toFixed(1)) : 0,
        Blk: G !== 0 ? Number((stats[12] / G).toFixed(1)) : 0,
        TO: G !== 0 ? Number((stats[13] / G).toFixed(1)) : 0,
        DD: G !== 0 ? Number((stats[14] / G).toFixed(1)) : 0,
        TD: G !== 0 ? Math.round(stats[15] / G) : 0, // округление до целого числа
      };

      // Удаляем исходный массив stats и добавляем новые объекты
      delete player.stats;
      player.statsTotals = statsTotals;
      player.statsAverages = statsAverages;
    }
  }

  return result;
}
transformPlayerStats(players); // Обновление показателей

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
    console.error("Ошибка при инициализации таблицы:", error.message);
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

          firstTd.colSpan = 15;
          firstTd.classList.add("table_cell-mobile-first");
          statsRow.classList.toggle(
            "table_row-is_active",
            row.classList.contains("table_row-is_active"),
          );
        } else {
          const statsRow = row.nextElementSibling;
          if (statsRow && statsRow.classList.contains("table_row-stats")) {
            [...statsRow.children].forEach((td) => row.appendChild(td));
            statsRow.remove();
          }
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
