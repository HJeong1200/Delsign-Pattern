// 다양한 Database에 공통적으로 사용되는 메서드를 정의한 Implementor
export interface IDatabaseImplementor {
  connect(): void;
  create(data: any): void;
  read(query: any): any;
  update(id: string, data: any): void;
  delete(id: string): void;
}

// Concrete Implementor
export class SQLDatabase implements IDatabaseImplementor {
  connect(): void {
    console.log("Connecting to SQL Database");
  }

  create(data: any): void {
    console.log("Inserting record into SQL Database:", data);
  }

  read(query: any): any {
    console.log("Fetching data from SQL Database with query:", query);
    return { id: 1, name: "SQL Data" };
  }

  update(id: string, data: any): void {
    console.log(`Updating record ${id} in SQL Database with`, data);
  }

  delete(id: string): void {
    console.log(`Deleting record ${id} from SQL Database`);
  }
}

export class SQLiteDatabase implements IDatabaseImplementor {
  connect(): void {
    console.log("Connecting to SQLite Database");
  }

  create(data: any): void {
    console.log("Inserting record into SQLite Database:", data);
  }

  read(query: any): any {
    console.log("Fetching data from SQLite Database with query:", query);
    return { id: 1, name: "SQLite Data" };
  }

  update(id: string, data: any): void {
    console.log(`Updating record ${id} in SQLite Database with`, data);
  }

  delete(id: string): void {
    console.log(`Deleting record ${id} from SQLite Database`);
  }
}
