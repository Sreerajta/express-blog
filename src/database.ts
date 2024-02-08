import sqlite3 from 'sqlite3';

// Connect to the SQLite database
const db:sqlite3.Database = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

export default db;