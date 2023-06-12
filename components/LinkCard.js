import { Box, VStack, Image, Link, Text, AspectRatio } from "@chakra-ui/react";

const LinkCard = ({ title, href, imageUrl }) => {
    return (
        <VStack
            spacing={2}
            width="150px"
            mb={4}
        >
            <Box
                borderWidth="1px"
                borderRadius="25px"
                borderColor="#3E2F56"
                backgroundColor="#0B0811"
                filter="saturate(1)"

                p={4}
                _hover={{
                    backgroundColor: "#1A1222",
                    borderColor: "#4B3A68",
                    filter: "saturate(1.5)",
                }}

                transition="background-color 0.3s, border-color 0.3s, filter 0.3s"
            >
                <Link href={href} isExternal>
                    <Image
                        src={imageUrl}
                        alt={title}
                        boxSize="80px"
                        mx="auto"
                        width={"150px"}
                        objectFit="contain"
                        _hover={{
                            filter: "saturate(1.5) contrast(1.2)",
                        }}
                        transition="filter 0.3s"

                    />
                </Link>
            </Box>
            <Text textAlign="center">
                {title}
            </Text>
        </VStack>
    );
};

export default LinkCard;
