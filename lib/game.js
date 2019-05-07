const { phrases } = require('./texts');

function onStart() {
    return 'Я виртуальный Вегед, отвечу на любой твой вопрос';
}

function onAnswer() {
    return getRandom(phrases);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(collection) {
    return collection[getRandomInt(0, collection.length)];
}

module.exports = {
    onStart,
    onAnswer
};
