import { Chip } from '@nextui-org/react';
import Link from 'next/link';

import { projects } from '../../constants/projects';
import { PhotoCollage } from '../gallery/PhotoCollages';

import { title } from '@/components/primitives';


const images = projects.map((project: any) => {
    return (
        {
            src: project.cover,
            width: 3024,
            height: 1660,
            href: project.href,
            title: project.title
        }
    );
});

export default function Portfolio() {
    return (
        <section className="lg:my-0 py-5" id='portfolio'>
            <div className='flex justify-center flex-col w-full gap-2 items-center mb-16'>
                <h1 className={title()}>Portfolio</h1>
            </div>
            <div>
                <PhotoCollage navigate images={images}/>
            </div>
        </section>
    );
};
