// /routing/index.js
// Для начала установим зависимости.
const url = require('url');
const fs = require('fs');

const define = function(req, res, postData) {
  // Теперь получаем наш адрес. Если мы переходим на localhost:3000/test, то path будет '/test'
  const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;

    // Теперь записываем полный путь к server.js. Мне это особенно нужно, так как сервер будет
    // висеть в systemd, и путь, о котором он будет думать, будет /etc/systemd/system/...
    prePath = __dirname;
    try {
      // Здесь мы пытаемся подключить модуль по ссылке. Если мы переходим на
      // localhost:8000/api, то скрипт идёт по пути /routing/dynamic/api, и, если находит там
      // index.js, берет его. Я знаю, что использовать тут try/catch не слишком правильно, и потом
      // переделаю через fs.readFile, но пока у вас не загруженный проект, разницу в скорости
      // вы не заметите.
      let dynPath = './dynamic/' + path;
      let routeDestination = require(dynPath);
      res.end('We have API!');
    }
    catch (err) {
      // Не нашлось api? Грустно.
      res.end("We don't have API!");
    }
};
exports.define = define;