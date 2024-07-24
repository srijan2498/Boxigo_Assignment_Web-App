import React from 'react'
import { useSelector } from 'react-redux'
import Accordion from './Accordion'

const InventoryDetailsContainer = () => {

  const details = useSelector((state) => state.detailsReducer)

  return (
    <div className='inventory_details_container'>
      <div className="flex_heading">
        <div className="heading">Inventory Details </div>
        <div className="edit_btn">Edit Inventory</div>
      </div>
      <div className="all_accordion_container">
        {details.items.rooms.map((item, index) => {
          return <Accordion item={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default InventoryDetailsContainer
