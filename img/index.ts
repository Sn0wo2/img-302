const URLS = [
    'https://bocchi.rocks/tv/assets/img/page/character/hitori/main.png',
    'https://bocchi.rocks/tv/assets/img/page/character/ikuyo/main.png',
    'https://bocchi.rocks/tv/assets/img/page/character/nijika/main.png',
    'https://bocchi.rocks/tv/assets/img/page/character/ryo/main.png'
] as const;

export function getRandomURL() {
    return URLS[Math.floor(Math.random() * URLS.length)];
}