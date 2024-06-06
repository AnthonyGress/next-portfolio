import { Logo } from '../icons';
import './pulse.css';

export const Pulse = () => {
    return (
        <div className='flex justify-center my-44 md:my-60'>
            <div className="relative inline-block">
                <div>
                    <Logo size={70}/>
                </div>
                <div className="absolute top-1/2 left-1/2 overflow-visible -z-10 scale-75 md:scale-100">
                    <div className="absolute animate-expand rounded-full" style={{ width: '120px', height: '120px', top: 'calc(-60px)', left:
            'calc(-60px)', animationPlayState: 'running', animationDelay: '1s', border: '1.5px solid rgba(121, 40, 202, 0.4)', background: 'linear-gradient(-180deg, rgba(121,40,202,0.4) 40%, black 100%)' }} />

                    <div className="circle circle-1 absolute animate-expand-opacity" style={{ width: '200px', height: '200px', borderRadius: '50%', top: 'calc(-100px)', left: 'calc(-100px)', animationPlayState: 'running', animationDelay: '0.5s', border: '1px solid rgba(121, 40, 202, 0.4)', background: 'linear-gradient(-180deg, rgba(121,40,202,0.30000000000000004) 20%, black 100%)' }} />

                    <div className="circle circle-2 absolute animate-expand-opacity" style={{ width: '280px', height: '280px', borderRadius: '50%', top: 'calc(-140px)', left: 'calc(-140px)', animationPlayState: 'running', animationDelay: '1s', border: '1px solid rgba(121, 40, 202, 0.3)', background: 'linear-gradient(-180deg, rgba(121,40,202,0.2) 20%, black 100%)' }} />

                    <div className="circle circle-3 absolute animate-expand-opacity" style={{ width: '360px', height: '360px', borderRadius: '50%', top: 'calc(-180px)', left: 'calc(-180px)', animationPlayState: 'running', animationDelay: '1.5s', border: '1px solid rgba(121, 40, 202, 0.2)', background: 'linear-gradient(-180deg, rgba(121,40,202,0.09999999999999998) 20%, black 100%)' }} />
                </div>
            </div>
        </div>
    );
};
