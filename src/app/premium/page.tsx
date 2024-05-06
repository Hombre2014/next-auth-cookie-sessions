import { getSession } from '@/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Premium = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/');
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only Premium users can see this content</h1>
        <Link href="/profile">Go to Profile page to upgrade to Premium</Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to Premium page</h1>
      <p>Premium content</p>
    </div>
  );
};

export default Premium;
