import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";
import Links from "../components/Links";
import { useTheme } from "@chakra-ui/react";


const Home = ({ links }) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Linktree Clone</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>" />
      </Head>

      <Box bg={theme.colors.brand.radialGradient} minH="100vh" padding="100px">
        <Heading as="h1" textAlign="center" color="white" py={4} marginBottom={10}>
          Tibo
        </Heading>
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
      title: "GitHub",
      href: "https://www.github.com",
      imageUrl: "/git.png",
    },
    {
      id: 4,
      title: "TikTok",
      href: "https://www.tiktok.com",
      imageUrl: "/tiktok.png",
    },



  ];

  return {
    props: {
      links,
    },
  };
}

export default Home;