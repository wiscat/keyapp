/* @flow */

export const randomStr = (length: number = 10) => {
  let string = '';
  const chars = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюя0123456789';
  for (let i = 0; i < length; i += 1) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return string;
};


export const secondsToHHMMSS = (value: number) => {
  const secNum = parseInt(value, 10);
  const hours = Math.floor(secNum / 3600);
  let minutes = Math.floor((secNum - (hours * 3600)) / 60);
  let seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours && minutes < 10) {
    minutes = '0' + minutes;
  }
  if (minutes && seconds < 10) {
    seconds = '0' + seconds;
  }

  return (hours ? hours + ':' : '') + (hours || minutes ? minutes + ':' : '') + seconds;
};
