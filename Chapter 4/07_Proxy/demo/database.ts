class Database {
  private database: Map<string, string>;

  constructor() {
    this.database = new Map();
  }

  public get(id: string): string | undefined {
    const result = this.database.get(id);

    if (!result) return undefined;

    return result;
  }

  public post(id: string, data: string): void {
    this.database.set(id, data);
  }

  public delete(id: string): void {
    this.database.delete(id);
  }
}

const database = new Database();

export default database;
