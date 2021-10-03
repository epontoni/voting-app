import React, { useState } from "react"
import '../components/Product'
import Product from "../components/Product"
import seed from '../seed'

export default function ProductList(props) {
    const [products, setProducts] = useState(seed.sort((a,b) => b.votes - a.votes))
    const handleProductUpVote = (productId) => {
        console.log(productId + ' was upvoted')
        const nextProducts = products.map( prod => {
            if (prod.id === productId) {
                return Object.assign({}, prod, {
                    votes: prod.votes + 1,
                })
            } else {
                return prod
            }
        })
        setProducts(nextProducts.sort((a,b) => b.votes - a.votes))
    }
    return (
        <div>
            {
                products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            onVote={handleProductUpVote}
                        />
                    )
                )
            }
        </div>
    )
}