import Link from 'next/link';
import LogoutForm from './LogoutForm';
import { getSession } from '@/actions';

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      {!session.isLoggedIn && <Link href="/login">Login</Link>}
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
};

export default Navbar;
