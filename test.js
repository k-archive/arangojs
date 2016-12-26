http = require('http')

var options = 
{ path: '/_db/some3/_api/document/auths/3ffec7ed-efbb-4190-9744-d66be06b888a',
  method: 'GET',
  headers: 
   { 'content-type': 'text/plain',
     'content-length': 0,
     'x-arango-version': 30000,
     authorization: 'Basic cm9vdDpBRmlmdHd5ZnZnMU1QOFAx' },
  hostname: '91.154.236.64',
  port: '8529',
  auth: undefined }

var req = http.request(options, (res) => { console.log(res) });
req.on('end', (err) => { console.log('end', err); })
req.on('error', (err) => { console.log('err', err); })
