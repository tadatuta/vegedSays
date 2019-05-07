const assert = require('assert');
const { onStart, onAnswer } = require('../lib/game');
const { phrases } = require('../lib/texts');

function isOneOf(text, arr) {
    return arr.some(item => text.includes(item));
}

describe('onStart', function() {
    it('should answer with prompt', function() {
        assert(onStart() === 'Я виртуальный Вегед, отвечу на любой твой вопрос');
    });
});

describe('onAnswer', function() {
    it('should react on right answer', function() {
        assert(isOneOf(onAnswer(), phrases));
    });
});
