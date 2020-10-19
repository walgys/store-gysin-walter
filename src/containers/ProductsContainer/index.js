import React from 'react'
import {Card} from '../../components/Card'
import {ProductsContainer} from './styles/productcontainer'
import productImage from '../../img/iPhone8-x1.png'

function Products() {
    return (
        <ProductsContainer>
            <Card>
                <Card.Image src={productImage}></Card.Image>
                <Card.Title>El Título</Card.Title>
                <Card.Text>Hola</Card.Text>
                <Card.Button></Card.Button>
            </Card>
            <Card>
                <Card.Image src={productImage}></Card.Image>
                <Card.Title>El Título 2</Card.Title>
                <Card.Text>Hola 2</Card.Text>
                <Card.Button></Card.Button>
            </Card>
            <Card>
                <Card.Image src={productImage}></Card.Image>
                <Card.Title>El Título 3</Card.Title>
                <Card.Text>Hola 3</Card.Text>
                <Card.Button></Card.Button>
            </Card>
            <Card>
                <Card.Image src={productImage}></Card.Image>
                <Card.Title>El Título 4</Card.Title>
                <Card.Text>Hola 4</Card.Text>
                <Card.Button></Card.Button>
            </Card>
            <Card>
                <Card.Image src={productImage}></Card.Image>
                <Card.Title>El Título 5</Card.Title>
                <Card.Text>Hola 5</Card.Text>
                <Card.Button></Card.Button>
            </Card>

        </ProductsContainer>
    )
}

export default Products
