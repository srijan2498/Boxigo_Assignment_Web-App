import React from 'react'
import { useSelector } from 'react-redux'

const HouseDetailsContainer = () => {
  const details = useSelector((state) => state.detailsReducer)
  return (
    <div className='house_details_container'>
      <div className="flex_heading">
        <div className="heading">House Details </div>
        <div className="edit_btn">Edit House Details</div>
      </div>
      <div className="houses_details">
        <div className="house_detail">
          <div className="heading orange_heading">Existing House Details</div>
          <div className="house_detail_card_container">
            <div className="house_detail_card">
              <div className="card_title_subheading">Floor No.</div>
              <div className="card_desc">{details.old_floor_no}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Elevator Available</div>
              <div className="card_desc">{details.old_elevator_availability}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Packing Required</div>
              <div className="card_desc">{details.packing_service}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Distance from truck to door</div>
              <div className="card_desc">{details.old_parking_distance}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Additional Information</div>
              <div className="card_desc">{details.old_house_additional_info ? details.old_house_additional_info : "No additional info"}</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="house_detail">
          <div className="heading orange_heading">New House Details</div>
          <div className="house_detail_card_container">
            <div className="house_detail_card">
              <div className="card_title_subheading">Floor No.</div>
              <div className="card_desc">{details.new_floor_no}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Elevator Available</div>
              <div className="card_desc">{details.new_elevator_availability}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Packing Required</div>
              <div className="card_desc">{details.unpacking_service}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Distance from truck to door</div>
              <div className="card_desc">{details.new_parking_distance}</div>
            </div>
            <div className="house_detail_card">
              <div className="card_title_subheading">Additional Information</div>
              <div className="card_desc">{details.new_house_additional_info ? details.new_house_additional_info : "No additional info"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseDetailsContainer
