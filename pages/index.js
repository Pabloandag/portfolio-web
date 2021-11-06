import {
    Box,
    Container,
    Heading,
    Image,
    Button,
    List,
    ListItem,
    Link,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I'm a begginer full-stack developer from Argentina!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Pablo Aguirre
                        </Heading>
                        <p>Telecommunications Engineer / Developer</p>
                    </Box>
                    <Box flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/PabloAg.jpg"
                            alt="Profile Image"
                        />

                    </Box>

                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Curabitur rutrum orci porta lobortis porttitor. Etiam tempus facilisis tempor.
                        Vestibulum id cursus felis.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Suspendisse auctor nec lectus eget tristique.
                        Vivamus ullamcorper sem tincidunt neque pretium, non tempor arcu aliquet.
                        Maecenas mi quam, pretium quis iaculis in, pretium vel tortor. Mauris sit amet accumsan dolor.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2018 - 2019</BioYear>
                        Internship working with Machine Learning classifying crop imagery at INVAP
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 - </BioYear>
                        Working as a Developer Engineer implementing IoT industrial solutions at GENROD S.A.
                    </BioSection>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam mi, luctus sit amet felis a, luctus bibendum urna. Donec fringilla nunc eu orci molestie, ut elementum leo euismod.
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Pabloandag" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @pabloandag
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/PabloAguirre96" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                    @PabloAguirre96
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/pabloandag/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @pabloandag
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page

