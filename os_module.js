const os = require('os');

//OS platform and architecture
console.log('Platform:' + os.platform + '\n' + 'Architecture:' + os.arch);

//OS cpu info
console.log(os.cpus());

//Total computer memory
console.log('Total memory: '+os.totalmem());

//Free computer memory
console.log('Free memory: '+os.freemem());

//check for home directory
console.log('Home directory: '+os.homedir);

//checking uptime
console.log('Uptime: '+os.uptime);