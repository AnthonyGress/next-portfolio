'use client';
import { Card, CardBody, Button, Textarea, Input } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

import { PopupManager } from '../modals/popup-manager';

import { title } from '@/components/primitives';

export default function Contact() {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
    const formRef = useRef<any>(null);

    const disableBtn = () => {
        if (!formValues.name || !formValues.email || !formValues.message) {
            return true;
        }

        return false;
    };

    const resetFormValues = () => setFormValues({ name: '', email: '', message: '' });

    const sendEmail = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(formRef.current).entries();
        const body = JSON.stringify(Object.fromEntries(formData));

        console.log(body);

        try {
            const res = await axios.post('/api/contact', body);

            if (res?.status === StatusCodes.OK) {
                PopupManager.success('We will be in contact with you shortly');
                e.target.reset();
                resetFormValues();
            } else {
                console.log('failed', res?.data);
                console.log('status', res?.status);
                PopupManager.failure('Something Went Wrong');
            }

        } catch (error) {
            console.error('failed', error);
            PopupManager.failure('Something Went Wrong');
        }

        console.log('done');
    };

    return (
        <section className="py-5 my-16" id='contact'>
            <div className='flex justify-center flex-col w-full gap-2 items-center mb-16'>
                <h1 className={title()}>Contact Me</h1>
                <h2 className={'text-default-500 text-xl'}>{'Let\'s Get In Touch'}</h2>
            </div>
            <div className='flex justify-center align-center mb-8'>
                <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] w-11/12" shadow="sm">
                    <CardBody className='overflow-visible py-2 items-center mb-8 mt-8'>
                        <h2 className='text-xl'>Send a Message</h2>

                    </CardBody>
                    <div className='w-full'>
                        <form
                            ref={formRef}
                            className='flex flex-col align-center justify-center gap-4 w-full p-4 overflow-hidden'
                            onSubmit={sendEmail}
                        >
                            <Input isRequired
                                className="max-w-xs self-center"
                                label="Name"
                                labelPlacement="inside"
                                name='name'
                                onChange={(e) => setFormValues((prevState: any) => {
                                    let newObj = Object.assign({}, prevState);

                                    newObj.name = e.target.value;

                                    return newObj;
                                }
                                )}
                            />
                            <Input isRequired
                                className="max-w-xs self-center"
                                label="Email"
                                labelPlacement='inside'
                                name='email'
                                type='email'
                                onChange={(e) => setFormValues((prevState: any) => {
                                    let newObj = Object.assign({}, prevState);

                                    newObj.email = e.target.value;

                                    return newObj;
                                }
                                )}
                            />
                            <Textarea isRequired
                                className="max-w-xs self-center"
                                label="Message"
                                labelPlacement="inside"
                                name='message'
                                onChange={(e) => setFormValues((prevState: any) => {
                                    let newObj = Object.assign({}, prevState);

                                    newObj.message = e.target.value;

                                    return newObj;
                                }
                                )}
                            />
                            <div className='w-full flex justify-center'><Button className='text-white mt-4 w-9/12 sm:w-1/2 mb-8' color='primary' isDisabled={disableBtn()} size='lg' type='submit'>Send</Button></div>
                        </form>
                    </div>
                </Card>
            </div>
        </section>
    );
};

