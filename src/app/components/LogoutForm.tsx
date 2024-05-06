import { logout } from '@/actions';

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutForm;
