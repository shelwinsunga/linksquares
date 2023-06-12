import Head from "next/head";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Links from "../components/Links";
import { useTheme } from "@chakra-ui/react";

const Home = ({ links }) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Hi Tibo</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />

      </Head>

      <Box bg={theme.colors.brand.radialGradient} minH="100vh" padding="100px">
        <VStack spacing={2} alignItems="center" marginBottom={10}>
          <Heading as="h1" textAlign="center" color="white" py={4} fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
            Tibo
          </Heading>
          <Text fontSize="lg" color="white" opacity={0.7}>
            @tibomaker
          </Text>
        </VStack>
        <Links links={links} />
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const links = [
    {
      id: 1,
      title: "Instagram",
      href: "https://www.instagram.com",
      imageUrl: "/ig.png",
    },
    {
      id: 2,
      title: "Youtube",
      href: "https://www.youtube.com",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "@tibo_maker",
      href: "https://www.twitter.com",
      imageUrl: "/twitter.png",
    },
    {
      id: 4,
      title: "TikTok",
      href: "https://www.tiktok.com",
      imageUrl: "/tiktok.png",
    },
    {
      id: 5,
      title: "Linkedin",
      href: "https://www.linkedin.com",
      imageUrl: "/linkedin.png",
    },


  ];

  return {
    props: {
      links,
    },
  };
}

export default Home;
