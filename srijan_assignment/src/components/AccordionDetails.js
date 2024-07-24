import React from 'react'
import AccordionCategory from './AccordionCategory'

const AccordionDetails = ({ item }) => {
    return (
        <div className='accordion_details_container'>
            {item.categories?.map((category, index) => {
                return <AccordionCategory category={category} key={index} />
            })}
            {item.itemsList && <AccordionCategory category={item.itemsList} />}
        </div>
    )
}

export default AccordionDetails
