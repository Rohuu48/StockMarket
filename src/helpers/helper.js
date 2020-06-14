export const convertStringToNumber = arr => {
  return arr.map(Number);
};
export const appendDateToOhlcArray = (arr, dates) => {
  let newArray = [];
  arr.map((item, index) => {
    item.unshift(dates[index]);
    item.pop();
    let number = [];
    number = convertStringToNumber(item);
    newArray.push(number);
  });
  return newArray;
};
export const appendDateToVolArray = (arr, dates) => {
  let newArray = [];
  arr.map((item, index) => {
    let vol = [];
    vol.push(item);
    vol.unshift(dates[index]);
    newArray.push(vol);
  });
  return newArray;
};
