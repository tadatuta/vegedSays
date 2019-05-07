const bb = require('bot-brother');
const bot = bb({
    key: process.env.BOT_KEY,
    sessionManager: bb.sessionManager.memory(),
    // webHook: {},
    polling: { interval: 0, timeout: 3 }
});

bot.use('before', bb.middlewares.typing());
process.env.BOTANIO_KEY && bot.use('before', bb.middlewares.botanio(process.env.BOTANIO_KEY));

const game = require('./lib/game');

bot.command('start')
    .invoke(function(ctx) {
        return ctx.sendMessage(game.onStart());
    })
    .answer(function(ctx) {
        return ctx.sendMessage(game.onAnswer());
    });
