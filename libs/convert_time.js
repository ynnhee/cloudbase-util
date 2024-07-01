function convertTime(time) {
  var timeSecond = Math.floor(time / 1000);
  var hours = Math.floor(timeSecond / 3600);
  var minutes = Math.floor((timeSecond - hours * 3600) / 60);
  var Seconds = Math.floor(timeSecond - hours * 3600 - minutes * 60);
  hours = hours > 0 ? (hours < 10 ? ("0" + hours + ':') : (hours + ':')) : '';
  minutes = minutes < 10 ? "0" + minutes : minutes;
  Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
  return hours + minutes + ":" + Seconds;
}
module.exports = convertTime;
