import {useEffect} from "react";
import {Flex, Container, Box, VStack, Text, Link, HStack} from "@chakra-ui/react";
import AuthForm from "@/components/AuthForm.tsx";

const AuthPage = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <Flex
            direction="column"
            minH="100vh"
            justify="space-between"
            align="center"
            overflow="hidden"
        >
            {/* Auth */}
            <Flex justify="center" align="center" flex="1" px={2} >
                <Container maxW="container.md" p={0}>
                    <Flex justify="center" align="center" gap={5}>
                        {/* Left Side */}
                        <Box display={{base: "none", md: "block"}}>
                            <img
                                src="/public/auth.png"
                                height={650}
                                alt="phone img"
                                style={{
                                    display: "block",
                                    maxHeight: "90vh",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>

                        {/* Right Side */}
                        <Box w={{ base: "100%", md: "350px" }}>
                            <VStack>
                                <AuthForm/>
                            </VStack>
                        </Box>
                    </Flex>
                </Container>
            </Flex>

            {/* Footer */}
            <Box as="footer" textAlign="center" py={4} fontSize="sm" color="gray.300">
                <VStack>
                    <HStack
                        justify="center"
                        flexWrap="wrap"
                        mb={32}
                    >
                        {[
                            "Meta", "About", "Blog", "Jobs", "Help", "API",
                            "Privacy", "Cookie Settings", "Terms", "Locations",
                            "Instagram Lite", "Meta AI", "Threads", "Contact Uploading & Non-Users\n", "Meta Verified\n"
                        ].map((item, index) => (
                            <Link key={index} href="#" _hover={{textDecoration: "underline"}}>
                                {item}
                            </Link>
                        ))}



                    </HStack>
                    <Text>English © 2025 Instagram from Meta</Text>
                </VStack>
            </Box>
        </Flex>
    );
};

export default AuthPage;
