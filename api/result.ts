import {getRandomImage} from "../img";
import {VercelRequest, VercelResponse} from '@vercel/node';

module.exports = async (request: VercelRequest, response: VercelResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    response.redirect(302, getRandomImage());
}
