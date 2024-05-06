import { SessionOptions } from 'iron-session';

export interface SessionData {
  userId?: string;
  userName?: string;
  img?: string;
  isPro?: boolean;
  isLoggedIn: boolean;
  isBlocked?: boolean;
}

export const defaultSessionData: SessionData = { isLoggedIn: false };

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: 'session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};
