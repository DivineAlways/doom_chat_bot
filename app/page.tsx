'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Redirect to the home page
  }, [router]);

  return null; // Render nothing while redirecting
}
