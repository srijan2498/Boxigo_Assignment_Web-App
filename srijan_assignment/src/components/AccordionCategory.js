import React, { useEffect, useState } from 'react'

const AccordionCategory = ({ category }) => {

    const [prod, setProd] = useState([])
    const [categoryName, setCategoryName] = useState()
    const setProdFunc = (category) => {
        const prodArr = []
        if (category.itemsList) {
            for (let x in category.itemsList) {
                if (x == "all") {
                    category.itemsList[x].map((itm, index) => {
                        if (itm.qty != 0 && itm.qty != "0") {
                            prodArr.push(itm)
                        }
                    })
                }
            }
            if (prodArr.length > 0) {
                setProd([{ [category.categoryName]: prodArr }])
                setCategoryName(category.categoryName)
            }
        }
        else {
            for (let x in category) {
                category[x].map((itm, index) => {
                    if (itm.qty != 0 && itm.qty != "0") {
                        prodArr.push(itm)
                    }
                })
            }
            if (prodArr.length > 0) {
                setProd([{ "All": prodArr }])
                setCategoryName("All")
            }
        }
    }
    useEffect(() => {
        setProdFunc(category)
    }, [])

    return (
        <div className='accordion_category_container'>
            <div className="category_title">{categoryName}</div>
            {prod?.map((product, index) => {
                return ( 
                    product[categoryName?categoryName:"All"].map((pro, index)=>{
                        return (
                            <div className="item_card" key={index}>
                                <div className="item_name">{pro.display_name}</div>
                                <div className="item_material">{pro.type?.list[0]}</div>
                                <div className="item_quantity">{pro.qty}</div>
                            </div>
                        )
                    })
                )
            })}
        </div>
    )
}

export default AccordionCategory
