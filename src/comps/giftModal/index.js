import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function GiftModal({ CollectionName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Give back
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.200"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg={"#000426"}>
          <ModalHeader color={"whiteAlpha.900"}>
            Send a Gift to supporters of your {CollectionName} collection!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color={"whiteAlpha.900"}>
            NFT upload and send + share on twitter
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
