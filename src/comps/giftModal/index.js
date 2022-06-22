import { useState } from "react";
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

import Form from "react-bootstrap/Form";
import { useMoralis } from "react-moralis";

import { mintGiftNFT } from "../../actions/nftActions";

export default function GiftModal({ CollectionName, ownerAddressArray }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account } = useMoralis();

  // const [name, setName] = useState();
  // const [description, setDescriptionData] = useState();
  const [image, setImageData] = useState();

  const pickRandomWinner = (async) => {
    const rand = Math.floor(Math.random() * ownerAddressArray.length);
    return ownerAddressArray[rand];
  };

  const handleMint = async (e) => {
    e.preventDefault();
    const WINNER = pickRandomWinner();
    let transactionHash = await mintGiftNFT(
      "hi",
      "description",
      image,
      WINNER,
      account
    );
    if (transactionHash) {
      alert(
        `Minting is complete! Track your mint here https://mumbai.polygonscan.com/tx/${transactionHash}`
      );
    } else {
      alert("Minting failed!");
    }
  };
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
            <Form.Group controlId="formFile">
              <Form.Control
                type="file"
                onChange={(e) => setImageData(e.target.files[0])}
                className="mb-3"
                required
              />
            </Form.Group>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleMint}>
              Mint
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
