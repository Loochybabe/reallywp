const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

function startDev() {
  console.log('Starting Next dev server (detached)...');
  const child = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, '..'),
    detached: true,
    stdio: 'ignore',
    shell: true
  });
  child.unref();
  return child.pid;
}

function checkUrl(url, timeout = 30000, interval = 1000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const req = http.get(url, res => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', chunk => { if (body.length < 2000) body += chunk; });
        res.on('end', () => {
          clearInterval(timer);
          resolve({ statusCode: res.statusCode, snippet: body.slice(0, 1000) });
        });
      });
      req.on('error', () => {
        if (Date.now() - start > timeout) {
          clearInterval(timer);
          reject(new Error('Timeout waiting for ' + url));
        }
        // otherwise ignore and retry
      });
    }, interval);
  });
}

(async function(){
  try {
    const pid = startDev();
    console.log('Dev server PID (detached):', pid);
    console.log('Waiting for server to respond on http://localhost:3000/ ...');
    const result = await checkUrl('http://localhost:3000/', 30000, 1000);
    console.log('STATUS:', result.statusCode);
    console.log('SNIPPET:\n', result.snippet);
    process.exit(0);
  } catch (err) {
    console.error('ERROR:', err && err.message ? err.message : err);
    process.exit(2);
  }
})();
