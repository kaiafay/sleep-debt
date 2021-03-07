const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    return 6;
    case 'Tuesday':
    return 7;
    case 'Wednesday':
    return 8;
    case 'Thursday':
    return 6;
    case 'Friday':
    return 8;
    case 'Saturday':
    return 9;
    case 'Sunday':
    return 10;
  }
}
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed.');
  };
}
calculateSleepDebt();
