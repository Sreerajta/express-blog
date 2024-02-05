import sqlite3, { open } from 'sqlite3';

const db = await open({
  filename: './mydatabase.db', // Specify the database file
  driver: sqlite3.Database,
});