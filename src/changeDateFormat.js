// https://stackoverflow.com/a/28246913
export default function changeDateFormat(inputDate){  // expects Y-m-d
  if (inputDate === undefined) {
    return null;
  }
  var splitDate = inputDate.split('-');
  if(splitDate.count == 0){
      return null;
  }

  var year = splitDate[0];
  var month = splitDate[1];
  var day = splitDate[2]; 

  return month + '\\' + day + '\\' + year;
}