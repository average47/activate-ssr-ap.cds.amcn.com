'use client';
import { useState } from 'react';
import { addKey } from '@/lib';
import styles from './form.module.scss';

interface StatusesProps {
  [key: string]: string;
}

export function Form(params: any) {
  const [dirty, setDirty] = useState(false);
  const formDataDefault = params.fields.reduce(
    (k: any, v: string) => ({
      ...k,
      [v]: {
        value: v === 'code' ? params.code : '',
        dirty: v === 'code' && params.code !== '' ? true : false,
      },
    }),
    {}
  );
  const [formData, setFormData] = useState(formDataDefault);
  const [status, setStatus] = useState<string>('continue');
  const statuses = {
    loading: 'loading',
    success: 'success',
    submitted: 'submitted',
    error: 'error',
  } as StatusesProps;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormData((values: any) => ({
      ...values,
      [name]: { value: value, dirty: true },
    }));
    setDirty(Object.keys(formData).every((k) => formData[k].dirty));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDirty(Object.keys(formData).every((k) => formData[k].dirty));
    if (!dirty) {
      setStatus(statuses.error);
      return;
    }
    setStatus(statuses.submitted);

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-authorization': `${params.auth}`,
        'x-country-code': 'us',
        'x-network': 'amcplus',
      },
      body: JSON.stringify(formData),
    });
    const res = await response.json();
    setStatus(response.status === 200 ? statuses.success : statuses.error);
  };

  const emailInput = (
    <>
      <input
        className={`border-solid border-2 rounded-md p-2 ${!formData.email.dirty && status === 'error' ? `border-rose-700 ${styles.placeholderError}` : 'border-black'}`}
        type="email"
        name="email"
        placeholder="email address"
        value={formData.email.value || ''}
        onChange={handleChange}
      />
      <small>ryan.moore@amcnetworks.com</small>
    </>
  );

  const passwordInput = (
    <>
      <input
        className={`border-solid border-2 rounded-md p-2 ${!formData.password.dirty && status === 'error' ? `border-rose-700 ${styles.placeholderError}` : 'border-black'}`}
        type="password"
        name="password"
        placeholder="password"
        value={formData.password.value || ''}
        onChange={handleChange}
      />
      <small>cejdi6-capnub-Fyzcyz</small>
    </>
  );

  const activationCodeInput = (
    <>
      <input
        className={`border-solid border-2 rounded-md p-2 ${!formData.code.dirty && status === 'error' ? `border-rose-700 ${styles.placeholderError}` : 'border-black'}`}
        type="text"
        name="code"
        placeholder="activation code"
        value={formData.code.value || ''}
        onChange={handleChange}
      />
    </>
  );

  const layoutSelector = (field: string): JSX.Element | undefined => {
    switch (field) {
      case 'code':
        return activationCodeInput;
      case 'email':
        return emailInput;
      case 'password':
        return passwordInput;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {params.fields.map((field: string, idx: number) =>
          addKey(layoutSelector(field) as JSX.Element, idx.toString())
        )}
        <button
          className="text-white"
          disabled={!dirty}
          onClick={() => {
            handleSubmit;
          }}
        >
          {status}
        </button>
      </form>
    </>
  );
}
