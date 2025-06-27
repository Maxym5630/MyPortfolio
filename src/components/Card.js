import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} />
      <VStack p={4} alignItems="flex-start" spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack pt={2}>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
