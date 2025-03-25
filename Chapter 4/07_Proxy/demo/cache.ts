import database from "./database";

class Cache {
  private cache: Map<string, string>;

  constructor() {
    this.cache = new Map();
  }

  public get(id: string): string | undefined {
    const result = this.cache.get(id);

    if (result) return result;

    return database.get(id);
  }

  public post(id: string, data: string): void {
    this.cache.set(id, data);

    database.post(id, data);
  }

  public delete(id: string): void {
    this.cache.delete(id);

    database.delete(id);
  }
}

const cache = new Cache();

export default cache;
