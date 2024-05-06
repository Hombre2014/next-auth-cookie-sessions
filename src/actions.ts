'use server';

import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData, defaultSessionData } from './lib';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

let username = 'john';
let isPro = true;
let isBlocked = false;

export const getSession = async (req: any) => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSessionData.isLoggedIn;
  }

  // Check the user in the DB and update its session
  session.isBlocked = isBlocked;
  session.isPro = isPro;

  // Do some validation here

  return session;
};

export const login = async (
  previousState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();
  const formUsername = formData.get('username');
  const formPassword = formData.get('password');

  // Check the user in the DB
  if (formUsername !== username) {
    return { error: 'Invalid username' };
  }

  session.userId = '1';
  session.userName = formUsername;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();

  redirect('/');
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  // session.isLoggedIn = false;
  // await session.save();
  redirect('/');
};

export const changePremium = async () => {
  const session = await getSession();
  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  revalidatePath('/profile');
};

export const changeUsername = async (formData: FormData) => {
  const session = await getSession();
  const newUsername = formData.get('username') as string;
  username = newUsername;
  session.userName = newUsername;
  await session.save();
  revalidatePath('/profile');
};
