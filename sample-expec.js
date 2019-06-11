const { exec } = require('child_process');


exec('git branch', function(err, stdout, stderr){
  console.log(stdout);
})