import mysql from 'mysql2/promise';

export async function queryDB(sql: string, params: any[] = []) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'warehouse'
  });

  const [rows] = await connection.execute(sql, params);
  await connection.end();

  // Force TypeScript to treat rows as an array of records
  return rows as any[];
}