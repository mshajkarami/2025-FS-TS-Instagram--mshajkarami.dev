"use client"

import {
    Box,
    Button,
    Field,
    Input,
    VStack,
    Image,
    defineStyle,
    useControllableState, Flex, Text,
} from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)

    return (
        <Box borderRadius={4} padding={5} w="full" maxW="sm" mx="auto">
            <VStack spacing={5}>
                <Image src="/logo.png" height={24} cursor="pointer" alt="Instagram Logo" />

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
                <Button w="full" borderRadius={12} colorScheme="blue">
                    {isLogin ? "Log in" : "Sign up"}
                </Button>

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.300"}/>

                    <Text mx={3} color={"gray"} fontWeight={"500"}>
                        OR
                    </Text>
                    <Box flex={2} h={"1px"} bg={"gray.300"}/>
                </Flex>

                <Flex>
                    <Text color={"blue.500"}>
                        Log in with Facebook
                    </Text>
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