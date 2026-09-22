const max = (workedHours) => {
  let maior = 0;
  for (let j = 0; j < workedHours.length; j++) {
    if (maior < workedHours[j]) {
      maior = workedHours[j];
    }
  }

  return maior;
};

function wichWeek(num) {
  switch (num) {
    case 0:
      return "Monday";
      break;
    case 1:
      return "Tuesday";
      break;
    case 2:
      return "Wednesday";
      break;
    case 3:
      return "Thursday";
      break;
    case 4:
      return "Friday";
      break;
    case 5:
      return "Saturdary";
      break;
    case 6:
      return "Sunday";
      break;
  }
}

const processWorker = function (workedHours) {
  if (!Array.isArray(workedHours)) return null;
  if (workedHours.length !== 7) return null;
  const worker = {
    totalHours: 0,
    averageDailyHour: 0,
    dayMostHour: 0,
    numberWorkedDays: 0,
    isFulltime: false,
  };

  for (let i = 0; i < workedHours.length; i++) {
    if (typeof workedHours[i] !== "number" && isNaN(workedHours[i])) continue;
    worker.totalHours += workedHours[i];
    if (workedHours[i] !== 0) {
      worker.numberWorkedDays++;
    }
  }

  worker.averageDailyHour = worker.totalHours / workedHours.length;
  worker.dayMostHour = wichWeek(workedHours.indexOf(max(workedHours)));

  worker.isFulltime = worker.totalHours >= 35;

  return worker;
};

const worker = [7.5, 8, 6.5, 0, 8.5, 4, 0];

console.table(processWorker(worker));
