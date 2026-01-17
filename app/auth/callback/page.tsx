import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page
    router.push('/');
  }, [router]);

  return null;
};

export default Callback;