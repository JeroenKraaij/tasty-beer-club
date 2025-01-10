import React from 'react'

type H1Props = {
    children: React.ReactNode;
};

export default function H1({children}: H1Props ) {
    return <h1 className="text-4xl font-bold mb-4">{children}</h1>
}