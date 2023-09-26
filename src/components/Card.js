import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing="24px">
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius={"10px"}
        background={"white"}
      >
        <Image
          src={imageSrc}
          alt={title}
          width="1024"
          borderRadius={"10px"}
          objectFit="cover"
        />
        <Heading fontSize="xl" color="black">
          {title}
        </Heading>
        <Text mt={4} color="black">
          {description}
        </Text>

        <HStack>
          <Text mt={4} mr={2} color="black">
            See more
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Card;
