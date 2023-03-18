const { exec } = require("child_process");


const command = `
netsh int tcp set heuristics disabled
netsh int tcp set global autotuninglevel=disabled
netsh int tcp set global rss=enabled
netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
ipconfig /flushdns
`

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`已重置网络: ${stdout}`);
});

/** @returns {https://answers.microsoft.com/zh-hans/windows/forum/all/0x800704cf/0949346c-ed7c-40d6-a72d-3dd2fd3d0306} */


