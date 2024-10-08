'use client';
import { useState } from 'react';
// import { Gallery, Image } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button, Chip, Divider } from '@nextui-org/react';
import Link from 'next/link';
import './lightbox.css';
import { MdArrowOutward } from 'react-icons/md';
import { button as buttonStyles } from '@nextui-org/theme';

type Props = {
    lightbox?: boolean;
    navigate?: boolean;
    rowHeight?: number;
    images: any[];
}

export const PhotoCollage = ({ lightbox = false, navigate = false, images, rowHeight }: Props) => {
    const [index, setIndex] = useState(-1);
    const [max, setMax] = useState(9);
    const [buttonText, setButtonText] = useState('More');

    const toggleShow = () => {
        if (buttonText === 'More') {
            setButtonText('Less');
            setMax(9);
        } else {
            setButtonText('More');
            setMax(6);
        }

    };

    const handleClick = (index: number, item: any) => {
        setIndex(index);
    };

    const slides = images.map(({ src, width, height }) => ({
        src: src,
        width,
        height
    }));

    return (
        <>
            {/* <Gallery
                enableImageSelection={false}
                images={images}
                margin={8}
                rowHeight={rowHeight ? rowHeight : 300}
            /> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {images.map((image: any, i: number) => {
                    return navigate ?
                        //grid images
                        i < max && <Link key={Math.random()} href={image.href}>
                            <div className='z-30 relative flex justify-center items-center h-full'>
                                <div className="absolute inset-0 z-10 bg-neutral-950/[.45] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 hover:animate-fade" >
                                    <Chip classNames={{
                                        base: 'opacity-[.92]',
                                        content: 'text-lg flex items-center',
                                    }}
                                    >
                                        {`${image.title} | `}
                                        <MdArrowOutward className='ml-1'/>
                                    </Chip>
                                </div>
                                <div>
                                    <Image alt='cover image' blurDataURL={image.src} className='rounded-lg' height={0} placeholder="blur" quality={75} src={image.src} width={1000}/>
                                </div>
                            </div>
                        </Link>
                        :
                        // detail images
                        <div key={Math.random()} className='z-30 relative hover:cursor-pointer flex items-center '>
                            <Image alt='portfolio image' blurDataURL={image.src} className='rounded-lg' height={500} placeholder="blur" quality={75} src={image.src}
                                width={image.src.includes('color') ? 300 : 1500} onClick={() => handleClick(i, image)}/>
                        </div>
                    ;
                }
                )}
            </div>
            {/* {navigate && <div className="flex justify-center mt-8">
                <Button
                    className={`${buttonStyles({
                        color: 'primary',
                        radius: 'full',
                        variant: 'shadow',
                        size: 'lg'
                    })} text-white`}
                    onClick={() => toggleShow()}
                >
                    {`Show ${buttonText}`}
                </Button>
            </div>} */}
            {lightbox && <Lightbox
                close={() => setIndex(-1)}
                index={index}
                open={index >= 0}
                plugins={[Zoom]}
                render={{ iconZoomIn: () => <></>, iconZoomOut: () => <></> }}
                slides={slides}
            />}
        </>
    );
};
