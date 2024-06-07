import { QuotationIcon } from '../icons';

import { title } from '@/components/primitives';

export default function Mission() {
    return (
        <section className="pt-5 mb-16" data-aos="fade-up" id='mission'>
            <div className='flex justify-center my-8'>
                <h1 className={title()}>Mission</h1>
            </div>
            <div className={'flex flex-col items-center justify-center' }>
                <div className='sm:flex-col md:flex-row md:inline-flex justify-center align-center'>
                    <div className='flex justify-center'>
                        <QuotationIcon />
                    </div>
                    <p className='text-2xl text-center md:w-3/4'>My mission is to empower businesses by leveraging state-of-the-art technology.<br/>
                    I am dedicated to delivering exceptional software solutions, ensuring that you remain agile in the ever-evolving digital world.
                    </p>

                    <div className='flex justify-center'>
                        <QuotationIcon className='rotate-180' />
                    </div>
                </div>
            </div>
        </section>
    );
};
