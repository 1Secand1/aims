import { daysOfTheWeek } from '../consts/weekDay.js';
import { fetchData } from './metods.js';
const env = import.meta.env;

function getWeekdayApiUrl(weekDay) {
  const { weekdayNumber } = daysOfTheWeek[weekDay];
  const baseUrlApi = env.VITE_URL_API;
  return baseUrlApi + weekdayNumber;
}

async function getAimsList(weekDay) {
  const weekdayApiUrl = getWeekdayApiUrl(weekDay);

  let jsonAimsList = await fetchData(weekdayApiUrl);

  return jsonAimsList;
}

async function requestRemoveAim(body) {
  const weekdayApiUrl = getWeekdayApiUrl("monday");
  await fetchData(weekdayApiUrl, "PUT", body);
}

async function setDailyAims(weekDay, aimArray = {}) {
  const currentDay = await getAimsList(weekDay);
  const currentAims = currentDay.aims;

  let newAims = [
    ...currentAims,
    {
      id: currentAims.length + 1,
      ...aimArray
    }
  ];

  const weekdayApiUrl = getWeekdayApiUrl(weekDay);

  await fetchData(weekdayApiUrl, 'PATCH', {
    aims: newAims
  });
}

export { getAimsList, setDailyAims, requestRemoveAim };
