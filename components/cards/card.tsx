import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from '@nextui-org/react';

type Props = {
    title?: string;
    body?: string;
    image?: string;
    blurred?: boolean
}

export const CustomCard = ({ title, image, body, blurred=true }: Props) => {
    return (
        <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] py-4" isBlurred={blurred} shadow="sm">
            {title && <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">{title}</h4>
            </CardHeader>}
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
