import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import Image from 'next/image';

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
    viewportFit: 'cover',
    themeColor: [
        { media: '(display-mode: standalone)', color: '#000000' },
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
                    'min-h-screen font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
                    <div
                        aria-hidden
                        className="pointer-events-none fixed inset-0 -z-10"
                        style={{
                            background:
                                'radial-gradient(120% 80% at 80% 10%, rgba(80, 16, 140, 0.45) 0%, rgba(12, 22, 94, 0.35) 35%, rgba(0, 22, 84, 0.2) 55%, rgba(0, 0, 0, 0.9) 100%)',
                        }}
                    />
                    <div className="relative flex flex-col min-h-[100lvh]">
                        <Navbar />
                        <Image alt='bg gradient' className='pointer-events-none block md:hidden fixed -right-[20rem] z-0 scale-[4] md:scale-[1]' height={1800} src={'/images/gradient-right-dark.svg'} width={1500}/>
                        <Image alt='test' className='pointer-events-none fixed sm:left-[45%] z-0 scale-[4] sm:scale-[1.25] top-0 md:-top-[20%]' height={1800} src={'/images/gradient-right-dark.svg'} width={1500}/>
                        <Image alt='bg gradient' className='pointer-events-none fixed sm:hidden bottom-0 -left-56 scale-[3]' height={1800} src={'/images/gradient-left-dark.svg'} width={1500}/>
                        <Image alt='bg gradient' className='pointer-events-none fixed hidden md:block top-0 -left-64 scale-[1.25]' height={1800} src={'/images/gradient-left-dark.svg'} width={1500}/>
                        <main className="relative z-10 container mx-auto pt-16 px-6 flex-grow">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
