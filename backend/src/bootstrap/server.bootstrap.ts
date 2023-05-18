import { Application } from 'express';
import http from 'http';
import { Bootstrap } from './bootstrap';


export class Server extends Bootstrap {

  constructor(private readonly app: Application) {
    super();
  }

  initialize(port = 3000) {
    return new Promise<string | Error>((resolve, reject) => {
      const server = http.createServer(this.app);

      server
      .listen(port)
      .on('listening', () => resolve(`Server listening on port ${port}!`))
      .on('error', (error) => reject(error));
    });
  }
}
