import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter, Divider } from '@nextui-org/react';

type Props = {
    title?: string;
    subtitle?: string;
    body?: string;
    image?: string;
    avatar?: string;
    blurred?: boolean
}

export const ReviewCard = ({ title, subtitle, image, body, blurred=true, avatar }: Props) => {
    return (
        <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] py-2" isBlurred={blurred} shadow="sm">
            {title &&
            <>
                <CardHeader className="flex gap-3">
                    {avatar && <Image
                        alt="logo"
                        height={60}
                        radius="sm"
                        src={avatar}
                        width={60}
                    />}
                    <div className="flex flex-col">
                        <p className="text-md">{title}</p>
                        <p className="text-small text-default-500">{subtitle}</p>

                    </div>
                </CardHeader>
                <Divider />
            </>
            }
            { image && <CardBody className={'overflow-visible py-2 items-center'}>
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={150}
                />
            </CardBody>}
            <CardFooter>
                <h5 className="text-medium">{body}</h5>
            </CardFooter>
        </Card>
    );
};
