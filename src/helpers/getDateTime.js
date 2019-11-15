// eslint-disable-next-line import/prefer-default-export
export const getFormattedDateString = ms => {
  const date = new Date(ms);
  return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + `0${date.getDate()}`.slice(-2);
};
