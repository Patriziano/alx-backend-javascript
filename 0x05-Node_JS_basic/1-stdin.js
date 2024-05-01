process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (value) => {
    process.stdout.write(`Your name is: ${value.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (res) => {
    process.stdout.write(`Your name is: ${res.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
