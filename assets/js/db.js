
const mysql = require('mysql2');

// Создаем подключение к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Valeriia',
  database: 'mydatabase',
  password: 'Zxzxcvcvbbh1001'
});

// Подключаемся к базе данных
connection.connect(function(err) {
  if (err) {
    console.error('Ошибка подключения к базе данных: ' + err.stack);
    return;
  }
  console.log('Успешное подключение к базе данных');
});

// Здесь вы можете выполнять SQL-запросы и взаимодействовать с базой данных

// Закрываем соединение с базой данных после завершения работы
connection.end();
