import {VercelRequest, VercelResponse} from '@vercel/node';

export const cors = (handler: Function) => async (request: VercelRequest, response: VercelResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(204).end();
    }

    return handler(request, response);
};
