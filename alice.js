const { json } = require('micro');
const game = require('./lib/game');

module.exports = async req => {
    const { session, version } = await json(req);

    return {
        version,
        session,
        response: {
            text: session.new ? game.onStart() : game.onAnswer(),

            end_session: false
        }
    };
};
