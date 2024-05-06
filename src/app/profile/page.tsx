import { changePremium, changeUsername, getSession } from '@/actions';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/');
  }

  return (
    <div className="profile">
      <h1>Welcome to Profile page</h1>
      <p>
        Welcome, <b>{session.userName}</b>
      </p>
      <span>
        You are <b>{session.isPro ? 'Premium' : 'Free'}</b> user
      </span>
      <form action={changePremium}>
        <button type="submit">
          {session.isPro ? 'Cancel Premium' : 'Get Premium'}
        </button>
      </form>
      <form action={changeUsername}>
        <input type="text" placeholder={session.userName} name="username" />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default Profile;
