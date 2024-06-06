import Image from 'next/image';

import { title } from '@/components/primitives';

export default function About() {
    return (
        <section className="pt-20 mb-16" id='about'>
            <div className='flex justify-center flex-col w-full gap-2 items-center'>
                <h1 className={title()}>About Me</h1>
            </div>
            <div className='grid lg:grid-cols-2 gap-10 mt-16'>
                <div className='flex flex-col justify-center' style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image alt='aboutPhoto' height={0} sizes="100vw" src={'/images/about.jpg'} style={{ width: '100%', height: 'auto' }} width={0}/>
                </div>

                <div className={'flex flex-col items-center justify-center gap-6 z-20' }>
                    <p className='text-xl leading-relaxed'>
                    Hi, I'm Anthony. I am a dedicated full stack software engineer specializing in custom software development, cloud solutions, and DevOps practices. I have successfully designed and implemented scalable systems for diverse clients including technology corporations, e-commerce businesses and community organizations. I excel at understanding unique business needs and translating them into innovative applications. Having expertise with cloud platforms such as AWS and Google Cloud Platform allows me to create resilient infrastructure that enhances performance and reliability.
                    </p>
                    <p className='text-xl leading-relaxed'>My approach to software allows for faster deployment cycles and high quality results. With a strong foundation in frontend/backend development, leadership, and operations, I bridge the gap between teams, facilitating smoother workflows and effective problem-solving. My ultimate goal is to deliver exceptional software solutions that exceed expectations while fostering a productive and innovative work environment.</p>
                </div>
            </div>
        </section>
    );
};
