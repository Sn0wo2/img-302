import {IMAGES} from "../config/constants";

export function getRandomImage() {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
}
