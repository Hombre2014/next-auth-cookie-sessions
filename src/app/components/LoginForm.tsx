'use client';

import { login } from '@/actions';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const [state, formActions] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={formActions}>
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
