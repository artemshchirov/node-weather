import * as http from 'http';
import * as https from 'https';

// local
// const hostname = '127.0.0.1';

// deploy
const hostname = '0.0.0.0';

const port = 3000;

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (data: Buffer) => {
      body += data.toString();
    });

    req.on('end', () => {
      const location: string = body.split('=')[1];
      const weatherUrl = `https://wttr.in/${location}?0`;

      https.get(weatherUrl, (response: http.IncomingMessage) => {
        let weather = '';

        response.on('data', (chunk: Buffer) => {
          weather += chunk.toString();
        });

        response.on('end', () => {
          res.writeHead(200, { 'Content-Type': 'text/html' });

          const htmlResponse = `
            <html>
              <body style="background: black; color: white;">
                ${weather}
                <a href="https://github.com/artemshchirov/node-weather">Link to repo</a>
              </body>
            </html>`;

          res.end(htmlResponse);
        });
      });
    });
  } else {
    const html = `
      <html>
        <body style="background: black;">
          <form style="color: white;" method="post" action="https://node-weather-entc.onrender.com">City: 
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
