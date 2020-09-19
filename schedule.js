const { exec } = require('child_process');

function start(domain){

    exec('npm run build',(stderr,stdout)=>{
        if (stderr) {
            console.error(`exec error: ${stderr}`);
            return;
          }
    
      console.log("Project built.......");
      console.log("-------------------");
      console.log("\n");
      console.log("Pushing to surge");
      console.log("\n");
      console.log("-------------------");
      exec(`surge ./build --domain https://${domain}.surge.sh`,()=>{
        console.log(`Site pushed online at https://${domain}.surge.sh`);
        process.exit(0);
      });
    });

}


module.exports=start;

