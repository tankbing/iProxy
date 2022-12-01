const child_process = require('child_process');
const process = require('process'); 

exports.openDirectory = function openDirectory(dir){
    let cmd = 'start'; // 运行的指令
    if (process.platform == 'win32') {
      cmd = 'start';
    } else if (process.platform == 'linux') {
      cmd = 'xdg-open';
    } else if (process.platform == 'darwin') {
      cmd = 'open';
    }
    child_process.exec(`${cmd} `+dir);
}