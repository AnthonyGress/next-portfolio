// 'use client';
// import { Box } from '@mui/material';
// import dynamic from 'next/dynamic';
// import ImageGallery from 'react-image-gallery';
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import { styles } from '../../styles';

// const renderVideo = (item: any) => {
//     return (
//         <Box className='wrapper'>
//             <ReactPlayer controls height='100%' muted={false} playing={false} url='https://vimeo.com/946409629'
//                 width='100%'/>
//         </Box>
//     );
// };

// const myCustomItems = [
//     {
//         thumbnail: '/gallery/dance-photo-3.jpeg',
//         original: 'https://www.w3schools.com/html/mov_bbb.jpg',
//         renderItem: renderVideo // this will use your custom function to render the video
//     },
//     {
//         thumbnail:  '/gallery/dance-photo-5.jpeg',
//         original: 'https://www.w3schools.com/html/mov_bbb.jpg',
//         renderItem: renderVideo // this will use your custom function to render the video
//     }
// ];

// const videos = [
//     {
//         src: <iframe allowFullScreen allow="autoplay; fullscreen;" className='video' height="380" src="https://player.vimeo.com/video/946409629?h=04db5d86f1" style={{ backgroundColor: 'transparent', padding: 0 }} width="640" />
//     },
//     {
//         src: <iframe allowFullScreen allow="autoplay; fullscreen;" className='video' height="380" src="https://player.vimeo.com/video/946409629?h=04db5d86f1" style={{ backgroundColor: 'black' }} width="640" />
//     }
// ];

// export const ResponsiveCarousel = ({ items }: any) => {
//     return (
//         <Carousel infiniteLoop emulateTouch={true} showThumbs={false}>
//             {items.map((item: any, i: number) => (
//                 <Box key={i} sx={[styles.center, { backgroundColor: 'black' }]}>{item.src}</Box>
//             ))}
//         </Carousel>
//     );
// };

// export const Gallery = () => {
//     return (
//         <Box>
//             <ImageGallery lazyLoad items={myCustomItems} showFullscreenButton={false} showPlayButton={false} />
//         </Box>
//         // <>
//         //     {/* <ResponsiveCarousel items={videos}/> */}
//         // </>
//     );
// };
