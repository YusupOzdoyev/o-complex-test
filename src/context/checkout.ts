'use client'

import {createContext} from "react";
import {Checkout, Product} from "@/types";


export const CheckoutContext = createContext(
    {
        checkout: {} as Checkout,
        onAddProduct: (product: Product) => {
        },
        onRemoveProduct: (product_id: number) => {
        },
        onRemovePosition: (product_id: number) => {
        },
        onAddPosition: (product_id: number) => {
        },
        isProductInCart: (product_id: number) => {
            return Boolean(false)
        },
        getPositionLength: (product_id: number) => {
            return Number(0)
        },
        onInputPhone: (text: string) => {

        }
    }
)
