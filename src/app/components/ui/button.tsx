'use client';

import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    variant?: 'default' | 'primary' | 'secondary' | 'danger';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    [key: string]: unknown;
}

export default function Button({ variant = 'default', onClick, children, ...props }: ButtonProps) {
    const styles: Record<'default' | 'primary' | 'secondary' | 'danger', string> = {
        default: 'bg-gray-200 text-black px-4 py-2 rounded',
        primary: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600',
        danger: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600',
    };

    return (
        <button
            className={styles[variant]}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}