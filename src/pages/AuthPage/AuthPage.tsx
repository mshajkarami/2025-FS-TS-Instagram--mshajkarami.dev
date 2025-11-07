import {Flex, Container, Box, VStack} from "@chakra-ui/react"
import AuthForm from "@/components/AuthForm.tsx";


const AuthPage = () => {
    return (

        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>

                <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
                    {/* Left hand-side */}
                    <Box display={{base: "none", md: "block"}}>
                        <img src={"/public/auth.png"} height={650} alt="phone img"/>
                    </Box>
                    {/* Right hand-side */}
                    <Box>
                        <VStack>
                            <AuthForm/>
                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
};

export default AuthPage;
