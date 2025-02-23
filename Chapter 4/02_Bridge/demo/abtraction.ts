import { IDatabaseImplementor } from "./implementor";

// 클라이언트에서 사용하는 메서드를 정의하는 Abstraction
export class DatabaseClient {
  db: IDatabaseImplementor;

  constructor(db: IDatabaseImplementor) {
    this.db = db;
  }

  connect() {
    this.db.connect();
  }

  create(data: any) {
    this.db.create(data);
  }

  read(query: any) {
    return this.db.read(query);
  }

  update(id: string, data: any) {
    this.db.update(id, data);
  }

  delete(id: string) {
    this.db.delete(id);
  }
}

// 데이터를 캐싱하는 기능 추가한 Refined Abstraction
export class DatabaseClientWithCache extends DatabaseClient {
  cache: Record<string, any>;

  constructor(db: IDatabaseImplementor) {
    super(db);

    this.cache = {};
  }

  create(data: any) {
    super.create(data);
    this.cache[data.id] = data;
  }

  read(query: any) {
    const cache = this.cache[query.id];

    if (cache) return cache;

    return super.read(query);
  }

  update(id: string, data: any) {
    super.update(id, data);
    this.cache[id] = data;
  }

  delete(id: string) {
    super.delete(id);
    delete this.cache[id];
  }
}
