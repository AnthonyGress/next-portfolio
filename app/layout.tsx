import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US'
        },
    },
    openGraph: {
        title: { default: 'Anthony Gress • Software Engineer', template: '%s | Anthony Gress' },
        description: siteConfig.description,
        images: [
            {
                type: 'image/png',
                url: '/images/og-image.png',
                width: 2200,
                height: 840
            }
        ]
    },
    keywords: siteConfig.keywords,
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
                    <div className="relative flex flex-col h-[calc(100dvh)]">
                        <Navbar />
                        <main className="container mx-auto pt-16 px-6 flex-grow">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
