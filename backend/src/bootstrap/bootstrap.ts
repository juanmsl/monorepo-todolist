
export abstract class Bootstrap {
  abstract initialize(port?: number): Promise<string | Error>;
}