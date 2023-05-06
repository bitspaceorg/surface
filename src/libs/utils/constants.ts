const IS_PRODUCTION: boolean = false;

export const SERVER_URL = !IS_PRODUCTION ? 'http://localhost:5174' : "<SERVER_PRODUCTION_URL>";
export const CLIENT_URL = !IS_PRODUCTION ? 'http://localhost:5174' : "<SERVER_PRODUCTION_URL>";
