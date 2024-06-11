import { randomBytes } from 'crypto';

/**
 * Generate random 64bits key every time with server restart
 */
export const jwtConstants = { secret: randomBytes(64).toString('hex') };
