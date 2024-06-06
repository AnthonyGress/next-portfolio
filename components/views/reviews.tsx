import { ReviewCard } from '../cards/review-card';

import { title } from '@/components/primitives';


export default function Reviews() {
    return (
        <section className="py-5 my-16" id='reviews'>
            <div className='flex justify-center flex-col w-full gap-2 items-center mb-16'>
                <h1 className={title()}>Testimonials</h1>
                <h2 className={'text-default-500 text-xl'}>What People Are Saying</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 justify-center'>
                <ReviewCard avatar='/images/portfolio/wild-haven/logo.png' body="Working with Anthony allowed my website to be completely customizable to the needs of myself and my clients. I was able to work closely with him and felt that he understood the unique needs of my business and brand. He seamlessly integrated my online membership portal, blog and event calendar that allows me to update these elements as needed. Overall very glad to have chosen Anthony to build our website. " subtitle='Samantha Rae, Founder' title='Wild Haven Somatics'/>

                <ReviewCard avatar='/images/portfolio/bcps/bcps_white.png' body="I have a large data system for enrollment applications. The custom application from Anthony allows us to submit THOUSANDS of certificates of eligibility at any moment they are requested. THIS SAVES LITERALLY HUNDREDS OF HOURS OF WORK. I don't know how this technically all works, all I know is that my staff can do far more critical work throughout the course of a year. Clicking a button and watching the app run brings a huge smile to my face and total joy to the many employees that no longer have to do that painstakingly long, difficult, and time-consuming work. It is literally astounding.
" subtitle='Paul Richard, VPK Coordinator' title='Broward County Public Schools'/>

                <ReviewCard avatar='/images/portfolio/touch-of-jewels/touch-of-jewels-logo-white.png' body="Working with Anthony was a game-changer for our small business. He is very professional and thoroughly understands the process of creating custom websites. He took the time to understand our needs and created solutions that have greatly enhanced our productivity. His ongoing support in maintaining the website has been amazing and I'd highly recommend his services to anyone!" subtitle='Jillian Paige, Founder' title='Touch of Jewels'/>
            </div>
        </section>
    );
};
