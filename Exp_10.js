const printTable = (number) => {
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
};

const userInput = process.argv[2];

if (!userInput || isNaN(userInput)) {
  console.error('Please provide a valid number as a command-line argument.');
} else {
  const number = parseInt(userInput);
  printTable(number);
}
