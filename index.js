const fs = require("fs");
const dateFormat = require("dateformat");


module.exports = {
  name: "My name is Emba!",
  log: (log_msg, print_log) => {
    
    let now = new Date();
    let cur_date = ""
    let log_date = dateFormat(now, "yyyy-mm-dd HH:MM:sso");
    cur_date = dateFormat(now, "yyyy-mm-dd");

    if(typeof log_msg === 'object'){
      log_msg = JSON.stringify(log_msg)
    }

    fs.appendFile( "logs/log-" + cur_date + ".txt", log_date +' => ' +log_msg + '\n', function(err) {
      if (err) throw err;

      if(print_log){ console.log(log_msg); }
      return 'Saved log!';
    });
  }
};
