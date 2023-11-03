import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: 'Next starter kit',
    description: 'NextJs + ESLint + Prettier + Storybook + Jest'
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
