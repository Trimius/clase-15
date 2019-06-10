const { spawn } = require('child_process');
const result = spawn('git',['branch']);

result.stdout.on('data', function(data){
    console.log(data.toString());
})