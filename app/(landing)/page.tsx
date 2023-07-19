import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div>
      <Link href='/sign-in'>
        <Button>Login</Button>
      </Link>
      <Link href='/sign-out'>
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
