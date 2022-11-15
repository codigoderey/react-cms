import React from 'react';

const Header1 = ({ title, subTitle }) => {
    return (
        <header className="w-full bg-zinc-200 h-96">
            <div className="container mx-auto flex flex-col items-start justify-center h-full w-full">
                <h1 className="text-6xl mb-2">{title}</h1>
                <p className="text-xl">{subTitle}</p>
            </div>
        </header>
    );
};

export default Header1;
