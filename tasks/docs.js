const {src, dest} = require('gulp');

// Конфигурация

const path = require("../config/path.js");

// Обработка docs

const docs = () => {
	return src(path.docs.src)
	.pipe(dest(path.docs.dest));
};

module.exports = docs;