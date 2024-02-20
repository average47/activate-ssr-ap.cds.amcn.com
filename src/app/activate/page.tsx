import { headers } from 'next/headers';
import { Form } from '../../components/Form/';

export default function Page() {
  const headersList = headers();
  const auth = headersList.get('x-authorization') || '';
  const code = headersList.get('x-activation-code') || '';
  const platform = headersList.get('x-amcn-platform') || '';
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Let&apos;s Activate Your AMC+ App</h1>
      <Form
        auth={auth}
        code={code}
        platform={platform}
        fields={['email', 'password', 'code']}
      />
    </main>
  );
}
