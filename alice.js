const { json } = require('micro');
const game = require('./lib/game');

module.exports = async req => {
    const { session, version } = await json(req);

    let response = game.onStart();
    const command = request.command.toLowerCase();

    if (!session.new && command !== 'помощь' && !command.includes('что ты умеешь')) {
        response = game.onAnswer();
    };

    return {
        version,
        session,
        response: {
            text: response,

            end_session: false
        }
    };
};
