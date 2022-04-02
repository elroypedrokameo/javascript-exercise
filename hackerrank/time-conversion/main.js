// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(times) {
  let time = times.split(':');
  let hours = parseInt(time[0])
  let amPm = time[2].slice(2);
  let seconds = time[2].slice(0, 2);

  if ((amPm === 'PM') && (hours !== 12)) {
    hours += 12;
  }

  if ((hours === 12) && (amPm === 'AM')) {
    hours = '00';
  } else if (hours < 10) {
    hours = '0' + hours.toString();
  } else {
    hours = hours.toString();
  }

  return ([hours, time[1], seconds].join(':'));
}

function main () {
  var times = '12:00:00AM';
  var result = timeConversion(times);
  console.log(result);
}

main();