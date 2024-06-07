import { Card, CardBody } from '@nextui-org/react';

import { subtitle, title } from '@/components/primitives';

export const Proficiencies = () => {
    return (
        <section className='mb-16' data-aos="fade-up">
            <div className='flex justify-center flex-col w-full gap-2 items-center mb-16'>
                <h1 className={title()}>Proficiencies</h1>
            </div>
            <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 py-4" shadow="sm">

                <CardBody className={'overflow-visible py-2 items-center'}>
                    <div className='grid lg:grid-cols-4 gap-10 justify-center'>
                        <div className={`${subtitle({ size: 'sm' })} flex flex-col gap-3`}>
                            <p>{'TypeScript'}</p>
                            <p>{'JavaScript'}</p>
                            <p>{'Bash'}</p>
                            <p>{'Terraform'}</p>
                            <p>{'Python'}</p>
                            <p>{'Java'}</p>
                        </div>
                        <div className={`${subtitle({ size: 'sm' })} flex flex-col gap-3`}>
                            <p>{'AWS'}</p>
                            <p>{'MongoDB'}</p>
                            <p>{'PostgreSQL'}</p>
                            <p>{'MySQL'}</p>
                            <p>{'REST APIs'}</p>
                            <p>{'GraphQL'}</p>
                        </div>
                        <div className={`${subtitle({ size: 'sm' })} flex flex-col gap-3`}>
                            <p>{'MacOS'}</p>
                            <p>{'Windows'}</p>
                            <p>{'Linux'}</p>
                            <p>{'RHEL'}</p>
                            <p>{'Virtual Machines'}</p>
                            <p>{'GitHub Actions'}</p>
                        </div>
                        <div className={`${subtitle({ size: 'sm' })} flex flex-col gap-3`}>
                            <p>{'React.js'}</p>
                            <p>{'Docker'}</p>
                            <p>{'Express'}</p>
                            <p>{'React Native'}</p>
                            <p>{'Node.js'}</p>
                            <p>{'CI/CD'}</p>
                        </div>
                    </div>
                </CardBody>

            </Card>
        </section>
    );
};
