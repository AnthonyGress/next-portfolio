import './microchip.css';

export const Microchip = () => {
    return (
        <div className='flex justify-center items-center' style={{ height: '200px' }}>
            <div className='flex justify-center align-center relative'>
                <div className='microchip'>
                    <div className='microchip-text text-center'>Innovate</div>
                    <div className="data-connectors-left gap-4 flex flex-col">
                        <span className='data-connector -rotate-90' />
                        <span className='data-connector -rotate-90' />
                    </div>
                    <div className="data-connectors-top gap-5 flex">
                        <span className='data-connector' />
                        <span className='data-connector' />
                        <span className='data-connector' />
                        <span className='data-connector' />
                        <span className='data-connector' />
                        <span className='data-connector' />
                    </div>
                    <div className="data-connectors-right flex flex-col gap-4">
                        <span className='data-connector rotate-90' />
                        <span className='data-connector rotate-90' />
                    </div>
                    <div className="data-connectors-bottom gap-5 flex">
                        <span className='data-connector rotate-180' />
                        <span className='data-connector rotate-180' />
                        <span className='data-connector rotate-180' />
                        <span className='data-connector rotate-180' />
                        <span className='data-connector rotate-180' />
                        <span className='data-connector rotate-180' />
                    </div>
                </div>
                <div className='microchip-shine' />
            </div>
        </div>
    );
};
