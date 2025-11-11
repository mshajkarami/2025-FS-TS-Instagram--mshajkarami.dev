"use client"

import {
    Box,
    Button,
    Field,
    Input,
    VStack,
    Image,
    defineStyle,
    useControllableState, Flex, Text, Link,
} from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)

    return (
        <Box borderRadius={4} padding={5} w="full" maxW="sm" mx="auto">
            <VStack>
                <Image src="/logo.png" height={24} alt="Instagram Logo" mb={"2"} p={"1"} />

                {/* Email */}
                <Field.Root>
                    <FloatingLabelInput label="Phone number, username, or email" type="email" />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                {/* Password */}
                <Field.Root>
                    <FloatingLabelInput label="Password" type="password" />
                </Field.Root>

                {/* Confirm Password (only for Sign up) */}
                {!isLogin && (
                    <Field.Root>
                        <FloatingLabelInput label="Confirm Password" type="password" />
                    </Field.Root>
                )}

                {/* Submit Button */}
                <Button h={"full"} mt={"2"} w="full" borderRadius={8} color={"white"} bg={"brand.500"} p={"2"}>
                    {isLogin ? "Log in" : "Sign up"}
                </Button>

                <Flex alignItems={"center"} justifyContent={"center"} my={2} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.300"}/>

                    <Text mx={3} color={"gray"} fontWeight={"500"}>
                        OR
                    </Text>
                    <Box flex={2} h={"1px"} bg={"gray.300"}/>
                </Flex>


                <Flex mb={"2"}>
                    <Link color={"blue.500"}>
                        Log in with Facebook
                    </Link>
                </Flex>
                <Flex mb={"8"}>
                    <Link color={"black"}>
                        Forgot password?
                    </Link>

                </Flex>
                <Flex gap={"2"}>
                    <Text color={"black"}>
                        Don't have an account?
                    </Text>
                    <Link color={"brand.900"} fontWeight={"500"}>
                        Sign up
                    </Link>
                </Flex>

            </VStack>
        </Box>
    )
}

export default AuthForm

// ------------------------
// FloatingLabelInput Component
// ------------------------

interface FloatingLabelInputProps extends React.ComponentProps<typeof Input> {
    label: React.ReactNode
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
}

const FloatingLabelInput = (props: FloatingLabelInputProps) => {
    const { label, onValueChange, value, defaultValue = "", ...rest } = props

    const [inputState, setInputState] = useControllableState({
        defaultValue,
        onChange: onValueChange,
        value,
    })

    const [focused, setFocused] = useState(false)
    const shouldFloat = inputState.length > 0 || focused

    return (
        <Box pos="relative" w="full">
            <Input
                {...rest}
                onFocus={(e) => {
                    props.onFocus?.(e)
                    setFocused(true)
                }}
                onBlur={(e) => {
                    props.onBlur?.(e)
                    setFocused(false)
                }}
                onChange={(e) => {
                    props.onChange?.(e)
                    setInputState(e.target.value)
                }}
                value={inputState}
                data-float={shouldFloat || undefined}
            />
            <Field.Label css={floatingStyles} data-float={shouldFloat || undefined}>
                {label}
            </Field.Label>
        </Box>
    )
}

// ------------------------
// Floating label styles
// ------------------------
const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "bg",
    px: "0.5",
    top: "2.5",
    insetStart: "3",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "all 0.2s ease",
    color: "fg.muted",
    "&[data-float]": {
        top: "-3",
        insetStart: "2",
        color: "fg",
        fontSize: "sm",
    },
})