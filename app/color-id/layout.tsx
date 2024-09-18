import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';

export default function PortfolioLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <>
            <section className='flex flex-col items-center justify-center gap-4 w-full'>
                <div className='fixed bg-[url("/images/gradient-right-dark.svg")] -right-1/3 z-0' style={{ width: '1500px', height: '1800px' }} />
                <div className='block sm:hidden fixed bg-[url("/images/gradient-right-dark.svg")] bottom-22 -left-18 z-30' style={{ width: '1600px', height: '1800px' }} />
                <div className='hidden md:block fixed bg-[url("/images/gradient-left-dark.svg")] bottom-0 -left-72' style={{ width: '1200px', height: '800px' }} />
            </section>
            <section className='flex flex-col items-center justify-center gap-4 w-full mb-16 md:mb-'>{children}</section>
            <Footer />
        </>
    );
}
