import React from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: React.FC<PageProps>;

export { Page };
