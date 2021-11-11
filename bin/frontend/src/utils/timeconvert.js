function unix_to_date(t) {
  var myDate = new Date(t * 1000);
  var date =
    myDate.getFullYear() +
    '-' +
    (myDate.getMonth() + 1) +
    '-' +
    myDate.getDate() +
    ' ' +
    myDate.getHours() +
    '시' +
    myDate.getMinutes() +
    '분';
  return date;
}

export { unix_to_date };
