import {
  Database,
  ParamsObject,
  QueryResults
} from "sql.js";

export type execSqlType = {
  database: Database,
  sql: string,
  params?: ParamsObject
}

export const execSql = ({
  database,
  sql,
  params = {}
} : execSqlType) : Promise<QueryResults[]> => {
  try {
    const results = database.exec(sql, params);
    return Promise.resolve(results);
  } catch (error) {
    // exec throws an error when the SQL statement is invalid
    return Promise.reject(error);
  }
};


export type execStatementType = {
  database: Database,
  sql: string,
  params?: ParamsObject
}

export const execStatement = ({
  database,
  sql,
  params = {}
} : execStatementType) : Promise<QueryResults | undefined> => {
  try {
    const results = database.exec(sql, params);
    if (results.length > 1) {
      console.warn("Passed multiple statements to execStatement. Only returning first result");
    }
    return Promise.resolve(results.length > 0 ? results[0] : undefined);
  } catch (error) {
    // exec throws an error when the SQL statement is invalid
    return Promise.reject(error);
  }
};
