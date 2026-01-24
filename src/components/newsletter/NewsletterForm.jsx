"use client";
import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');
    const axiosInstance = useAxios();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            await axiosInstance.post('/api/subscribe', {
                email,
                source: 'homepage_footer',
                tags: ['web_user']
            });
            setStatus('success');
            setEmail('');
        } catch (err) {
            console.error("Subscription error:", err);
            setStatus('error');
            setErrorMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-500 text-center">
                <p className="font-semibold">Thanks for subscribing!</p>
                <p className="text-sm mt-1">We've added {email} to our list.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-xs underline mt-2 hover:text-green-600"
                >
                    Subscribe another email
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 rounded bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-6 py-3 rounded transition-colors font-medium relative whitespace-nowrap"
            >
                {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Joining...
                    </span>
                ) : (
                    'Subscribe'
                )}
            </button>

            {status === 'error' && (
                <p className="text-destructive text-sm bg-destructive/10 p-2 rounded border border-destructive/20">
                    {errorMessage}
                </p>
            )}
        </form>
    );
}

export default NewsletterForm;
