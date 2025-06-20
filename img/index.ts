import {IMAGES} from "../config/constants";
import {lookup} from "mime-types";
import {join} from "path";
import {readFile} from "fs/promises";

export const getContentType = (filename: string) => lookup(filename) || 'application/octet-stream';

export const getValidImageUrl = async (maxAttempts = 10) => {
    for (let i = 0; i < maxAttempts; i++) {
        const imageUrl = IMAGES[Math.floor(Math.random() * IMAGES.length)];

        if (imageUrl.startsWith('http')) {
            return {url: imageUrl, isLocal: false};
        }

        try {
            const localPath = join(".", imageUrl);
            await readFile(localPath);
            return {url: localPath, isLocal: true};
        } catch (error) {
            console.error('Error getting assets image:', error);
        }
    }
    throw new Error('No valid image found after maximum attempts');
};
