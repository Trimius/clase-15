const { exec } = require('child_process');


exec('git', ['branch'], function(err, stdout, stderr){
    if(err){
        console.log(err);
    }
    if(stdout){
        console.log(stdout);
    }
    if(stderr){
        console.log(stderr);
    }
})