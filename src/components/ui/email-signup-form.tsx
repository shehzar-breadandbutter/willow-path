'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { emailRegex } from '@/lib/regex';

interface EmailSignupFormProps {
  parentClassName?: string;
  buttonSize?: 'sm' | 'md' | 'lg';
}

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ parentClassName, buttonSize = 'sm' }) => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Email is required');
      return;
    }
    if (!emailRegex.test(trimmed)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {
      const hutk = typeof document !== 'undefined' ? document.cookie.split('; ').find(c => c.startsWith('hubspotutk='))?.split('=')[1] : undefined;
      const pageUri = window.location.href;
      const pageName = document.title;

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, hutk, pageUri, pageName })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as any)?.error || 'Failed to subscribe');
      }

      setSuccess('You have been subscribed successfully.');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-2" onSubmit={onSubmit}>
      <Input
        label="Enter Email"
        hideLabel
        type="email"
        placeholder="Enter email address"
        parentClassName={parentClassName || 'bg-transparent'}
        rightElement={
          <Button type="submit" size={buttonSize} isLoading={isLoading} loadingText="Submitting...">
            Sign up now
          </Button>
        }
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={error || undefined}
        showErrorOnField
      />

      {error && <p className="text-sm text-danger/75">{error}</p>}
      {success && <p className="text-sm text-primary/80">{success}</p>}
    </form>
  );
};

export default EmailSignupForm;
