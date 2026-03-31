import { button as buttonStyles } from '@nextui-org/theme';
import { Button } from '@nextui-org/button';
import { IoLogoGithub } from 'react-icons/io';
import { IoIosGlobe } from 'react-icons/io';
import Image from 'next/image';

import { projects } from '../../../constants/projects';
import { PhotoCollage } from '../../../components/gallery/PhotoCollages';

import { subtitle, title } from '@/components/primitives';

export const generateStaticParams = () => {
    return projects.map((project) => ({
        slug: project.href,
    }));
};


export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((project: any) => project.href.split('/').pop() === params.slug);

    const images = project?.images.map((image: string) => {
        return (
            {
                src: image,
                width: 3024,
                height: 1660,
            }
        );
    });

    return (
        <section className='mb-8'>
            {project && <>
                <div className="flex justify-center flex-col items-center w-full mb-8 gap-8">
                    <h1 className={title()}>{project.title}</h1>
                    <h2 className={subtitle()}>{project.description}</h2>
                </div>
                <div className='relative z-50 mb-8 flex justify-center gap-4'>
                    {project.github && <Button
                        as='a'
                        className={`${buttonStyles({
                            color: 'primary',
                            radius: 'full',
                            variant: 'shadow',
                            size: 'lg'
                        })} text-white pointer-events-auto touch-manipulation`}
                        href={project.github}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <IoLogoGithub size={28}/>
                        <span>GitHub</span>
                    </Button>}
                    {project.website && <Button
                        as='a'
                        className={`${buttonStyles({
                            color: 'primary',
                            radius: 'full',
                            variant: 'shadow',
                            size: 'lg'
                        })} text-white pointer-events-auto touch-manipulation`}
                        href={project.website}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <IoIosGlobe size={28}/>
                        <span>Website</span>
                    </Button>}
                </div>
                <div className="flex justify-center">
                    {images && images.length > 1
                        && <PhotoCollage lightbox images={images as any[]} rowHeight={300}/>
                    }
                    {images && images.length === 1 &&
                    <div className='flex justify-center max-w-screen-lg'>
                        <Image alt='portfolio image' className='z-30' height={0} src={images[0]} style={{ width: '100%', height: 'auto' }} width={0}/>
                    </div>
                    }
                </div>
            </>
            }
        </section>
    );
}

