import {readFile} from 'fs/promises';
import {extname} from 'path';
import {VercelRequest, VercelResponse} from '@vercel/node';
import {getContentType, getValidImageUrl} from "../img";

module.exports = async (request: VercelRequest, response: VercelResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    try {
        const {url, isLocal} = await getValidImageUrl();

        if (isLocal) {
            const buffer = await readFile(url);
            response.setHeader('Content-Type', getContentType(extname(url)));
            return response.send(buffer);
        }

        return response.redirect(302, url);
    } catch (error) {
        console.error('Error getting random image:', error);
        response.status(404).json({msg: 'Local assets not found'});
    }
};
