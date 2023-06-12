import { Flex } from "@chakra-ui/react";
import LinkCard from "./LinkCard";

const Links = ({ links }) => {
    return (
        <Flex wrap="wrap" justify="center" gridGap={6} width="50%" mx="auto">
            {links.map((link) => (
                <LinkCard key={link.id} title={link.title} href={link.href} imageUrl={link.imageUrl} />
            ))}
        </Flex>
    );
};

export default Links;
