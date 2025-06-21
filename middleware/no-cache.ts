import {VercelRequest, VercelResponse} from '@vercel/node';

export const noCache = (handler: Function) => async (request: VercelRequest, response: VercelResponse) => {
    response.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.setHeader('Pragma', 'no-cache');
    response.setHeader('Expires', '0');

    return handler(request, response);
};
