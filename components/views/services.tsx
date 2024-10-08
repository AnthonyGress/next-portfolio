import Image from 'next/image';

import { CustomCard } from '../cards/card';
import { Microchip } from '../microchip/microchip';

import { title } from '@/components/primitives';

export default function Services() {
    return (
        <section className="my-16 lg:my-0 py-5" id='services'>
            <div className='flex justify-center flex-col w-full gap-2 items-center mb-8' data-aos="fade-left">
                <h1 className={title()}>Services</h1>
                <h2 className={'text-default-500 text-xl'}>What I Do</h2>

            </div>
            <div data-aos="zoom-in-up">
                <div className="flex justify-center relative">
                    <Image alt='circuit' className='hidden lg:block absolute flex justify-center align-center' height='1000' src='/images/circuits.svg' style={{ marginLeft: '100px', marginTop: '10px' }} width='1000'/>
                    <div className="xs:block lg:hidden">
                        <Image alt='circuit' className='absolute flex justify-center align-center' height='400' src='/images/mobile-circuits.png' style={{ marginLeft: '-110px', marginTop: '8px', minWidth: '400px' }} width='400'/>
                    </div>
                    <div className='md:mt-0 lg:hidden' style={{ scale: '.75', marginTop: '-20px', marginLeft: '12px' }}>
                        <Microchip />
                    </div>
                    <div className='hidden lg:block'>
                        <Microchip />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 gap-10 justify-center mt-16'>
                    <CustomCard body={'Bring your unique vision to life with precision and collaboration. I specialize in creating custom websites, desktop applications, and mobile apps that address your specific business needs. I will work closely with you and your team, facilitating seamless integration with your existing systems and processes.'} image={'/images/code.png'} title='Custom Software'/>
                    <CustomCard body={'Transform your business operations with scalable, secure, and efficient cloud technologies. I will design and implement cloud architecture/migrations, ensuring your team can take full advantage of cloud native solutions.'} image={'/images/cloud.png'} title='Cloud Solutions'/>
                    <CustomCard body={'Leveraging cutting-edge tools, I ensure your infrastructure is set up for scalable performance, security measures, and cost-effectiveness. Empower your team to deliver high-quality software faster and more efficiently.'} image={'/images/devops.png'} title='DevOps & Infrastructure'/>
                </div>
            </div>
        </section>
    );
};
