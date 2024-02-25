import { daysOfTheWeek } from '../constants/weekDay.js';
import { useAIMSFetch } from './useAIMSFetch.js';
const env = import.meta.env;

function getWeekdayApiUrl(weekDay) {
  const { weekdayNumber } = daysOfTheWeek[weekDay];
  const baseUrlApi = env.VITE_URL_API;
  return baseUrlApi + weekdayNumber;
}

async function getAimsList(weekDay) {
  const weekdayApiUrl = getWeekdayApiUrl(weekDay);

  let jsonAimsList = await useAIMSFetch(weekdayApiUrl);

  return jsonAimsList;
}

async function requestRemoveAim(body) {
  const weekdayApiUrl = getWeekdayApiUrl("monday");
  await useAIMSFetch(weekdayApiUrl, "PUT", body);
}

async function setDailyAims(weekDay, aimArray = {}) {
  const currentDay = await getAimsList(weekDay);
  const currentAims = currentDay.aims;

  const newAims = [
    ...currentAims,
    {
      id: currentAims.length + 1,
      ...aimArray
    }
  ];

  const weekdayApiUrl = getWeekdayApiUrl(weekDay);

  useAIMSFetch(weekdayApiUrl, 'PATCH', {
    aims: newAims
  });
}

export { getAimsList, setDailyAims, requestRemoveAim };
