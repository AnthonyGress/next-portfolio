import type { UseDisclosureReturn } from '@nextui-org/use-disclosure';

import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';

type Props = {
    disclosure: UseDisclosureReturn;
    title: string;
    body?: string;
}
export default function CenteredModal({ disclosure, title, body }: Props) {
    const { isOpen, onOpen, onOpenChange, onClose } = disclosure;

    return (
        <>
            <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                                {body && <p>{body}</p>}
                            </ModalBody>
                            <ModalFooter className='flex justify-center'>
                                <Button color="primary" onPress={onClose}>
                                Done
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
