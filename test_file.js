'use strict';

const { execFile } = require('child_process');
const vnu = require('vnu-jar');

console.log(vnu);

function runCheck(arg) {
execFile('java', ['-jar', `${vnu}`, arg], {shell: true}, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${ error }`);
    return;
  }

  console.log(stdout);
})
}

runCheck('--version')
runCheck('http://192.168.4.47/run/EFSPIntegration/any_filing_interview/#/17')
