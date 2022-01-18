const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const intervalTimer = () =>{
  rl.question("", (answer)=>{
    if(answer === 'b'){
      process.stdout.write('\x07')
      intervalTimer();

    }else if(Number(answer) >= 1 && Number(answer) <= 9){
      console.log(`setting timer for ${answer} seconds...`);

      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(answer) * 1000);

      intervalTimer();

    }else{
      console.log("Invalid input, please try again!")
      intervalTimer();
    }

  })
}

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!')
  rl.close();
});

console.log("\n Type 'b' for an alaram sound \n Enter a number between 1-9 to initiate an alarm \n cmd-c to exit the program")
intervalTimer();
