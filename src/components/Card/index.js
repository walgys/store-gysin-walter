import React from 'react'
import {Container, Title, Text, Image, Button} from './styles/card'

export const Card = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.Title = ({children, ...restProps}) => {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Card.Text = ({children, ...restProps}) => {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Card.Image = ({src, alt, ...restProps}) => {
    return (
        <Image src={src} alt={alt} {...restProps} />
    )
}

Card.Button = ({children, ...restProps}) => {
    return (
        <Button {...restProps}>{children}</Button>
    )
}


