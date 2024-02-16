import { daysOfTheWeek } from "../consts/weekDay.js";
import { fetchData } from "./metods.js";

async function getAimsList(weekDay) {
  const weekdayNumber = daysOfTheWeek[weekDay].weekdayNumber;
  const url = `https://apigenerator.dronahq.com/api/ZMqiX_9j/aims/${weekdayNumber}`;
  let jsonAimsList = await fetchData(url);

  return jsonAimsList;
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

  const weekdayNumber = daysOfTheWeek[weekDay].weekdayNumber;
  fetchData(`https://apigenerator.dronahq.com/api/ZMqiX_9j/aims/${weekdayNumber}`, "PATCH", {
    aims: newAims
  });
}

export { getAimsList, setDailyAims };