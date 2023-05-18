import { Server } from './bootstrap';
import App from './app';

const server = new Server(App);


(async () => {
  try {
    const result = await server.initialize(8080);
    console.log(result);
  } catch ( error ) {
    console.log(error);
  }
})();
