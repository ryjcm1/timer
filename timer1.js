
const alarm = (arrOfTime) =>{

  if (arrOfTime.length === 0) {
    return;
  }

  for (let time in arrOfTime) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arrOfTime[time] * 1000);
  }
};

const args = process.argv.slice(2);

const changeToNumber = args.map(value => Number(value));

const onlyNumbers = changeToNumber.filter(value => {
  return value;
});

const sortedArgs = onlyNumbers.sort((a,b) => a - b);

const onlyPositives = sortedArgs.filter(num => num > 0);

alarm(onlyPositives);