/* This code can read the system/root level files without actually logging as root or using sudo if 'sudo su' or sudo command is blocked...
*/

const fs = require('fs');

fs.readFile('<directory here>', 'utf8', (err, data) => { 
  if (err) throw err; 
  console.log(data); 
});
