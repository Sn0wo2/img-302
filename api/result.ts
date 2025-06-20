import {readFile} from 'fs/promises';
import {extname} from 'path';
import {VercelRequest, VercelResponse} from '@vercel/node';
import {getContentType, getValidImageUrl} from "../img";
import {cors} from '../middleware/cors';

const handler = async (request: VercelRequest, response: VercelResponse) => {

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

module.exports = cors(handler);
