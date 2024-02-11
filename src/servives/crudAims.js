import { daysOfTheWeek } from "../consts/weekDay.js";
import { fetchData } from "./metods.js";

async function getAimsList(weekDay) {
  const weekdayNumber = daysOfTheWeek[weekDay].weekdayNumber;

  const url = `https://apigenerator.dronahq.com/api/ji-qgVLr/aims/${weekdayNumber}`;
  const jsonAimsList = await fetchData(url);
  return jsonAimsList;
}

async function addAimsToWeekDay(weekDay) {
  const currentAims = getAimsList();
}

export { getAimsList, addAimsToWeekDay };