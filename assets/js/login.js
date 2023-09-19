const mysql = require('mysql2');

// Создайте подключение к вашей базе данных MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Valeriia',
  password: 'Zxzxcvcvbbh1001',
  database: 'mydatabase'
});

// Обработчик POST-запроса для входа
const loginHandler = (req, res) => {
  const { username, password } = req.body;

  // Проверка в базе данных
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Ошибка сервера');
      return;
    }

    // Если пользователь найден
    if (results.length > 0) {
      // Здесь вы можете создать сеанс для авторизованного пользователя и перенаправить его на страницу расписания
      res.redirect('/schedule.html');
    } else {
      // Если данные не совпадают, вы можете вернуть сообщение об ошибке
      res.status(401).send('Неверный логин или пароль');
    }
  });
};

module.exports = loginHandler;
