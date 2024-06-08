
import Image from 'next/image';
import { button as buttonStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import { Button } from '@nextui-org/button';

import { title } from '@/components/primitives';

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 md:h-[calc(85lvh)] w-full mb-16 md:mb-0">
            <Image alt='catalyx logo' className='animate-spin-slow mb-4 md:mb-12' height='140' src='/logo.png' width='140'/>
            <div className="inline-block bg-transparent">
                <h1 className={`${title({ color: 'violet' })} mb-5`}>Anthony&nbsp;</h1>
                <h1 className={`${title()} mb-5`}>Gress</h1>
            </div>
            <div className="inline-block max-w-xlg text-center justify-center bg-transparent">
                <h1 className={title({ size: 'sm' })}>Engineering the&nbsp;</h1>
                <h1 className={title({ color: 'violet', size: 'sm' })}>Future&nbsp;</h1>
                <br />
                <h2 className={'mt-12 mb-12 md:mt-20 md:mb-20 text-2xl' }>
                Strategic Software Solutions for Modern Businesses
                </h2>
            </div>


            <NextLink href={'#about'}>
                <Button
                    className={`${buttonStyles({
                        color: 'primary',
                        radius: 'full',
                        variant: 'shadow',
                        size: 'lg'
                    })} text-white`}
                >
          Learn More
                </Button>
            </NextLink>

        </section>
    );
}
