import React, { useEffect, useState } from 'react'
import { FaArrowRightLong, FaHouse, FaPen } from "react-icons/fa6";
import { FaBoxes, FaCalendarAlt, FaCheckSquare } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import { format } from 'date-fns';
import MoreDetailsContainer from './MoreDetailsContainer';
import { useSelector } from 'react-redux';

const MyMovesContainer = () => {
    const details = useSelector((state => state.detailsReducer))
    const [moveDt, setMoveDt] = useState()
    const [showDetails, setShowdetails]=useState(false)
    useEffect(() => {
        if (details) {
            const dateTimeArr = format(details.moving_on, `MMMM d, yyyy h:mm a`).split(" ")
            setMoveDt(`${dateTimeArr[0]} ${dateTimeArr[1]} ${dateTimeArr[2]}  at ${dateTimeArr[3]} ${dateTimeArr[4]}`)
        }
    }, [details])
    return (
        <div className='moves_container'>
            <div className="heading">My Moves</div>
            <div className="location_details_container">
                <div className="card">
                    <div className="card_title">From</div>
                    <div className="card_desc">{details.moving_from}</div>
                </div>
                <div className="arrow_icon"><FaArrowRightLong /></div>
                <div className="card">
                    <div className="card_title">To</div>
                    <div className="card_desc">{details.moving_to}</div>
                </div>
                <div className="card">
                    <div className="card_title">Request#</div>
                    <div className="card_desc request">{details.estimate_id}</div>
                </div>
            </div>
            <div className="move_details_container">
                <div className="move_details_card">
                    <div className="icon"><FaHouse /></div>{details.property_size}
                </div>
                <div className="move_details_card">
                    <div className="icon"><FaBoxes /></div>{details.total_items}
                </div>
                <div className="move_details_card">
                    <div className="icon"><GiPathDistance /></div>{details.distance}
                </div>
                <div className="move_details_card">
                    <div className="icon"><FaCalendarAlt />
                    </div>{moveDt}
                    <div className="icon pen"><FaPen /></div>
                </div>
                <div className="move_details_card">
                    <div className="icon"><FaCheckSquare /></div>Is flexible
                </div>
                <div className="move_details_card">
                    <div className="buttons view_detail" onClick={() => setShowdetails(!showDetails)}>View move details</div>
                    <div className="buttons">Quotes Awaiting</div>
                </div>
            </div>
            <div className="disclaimer_container">
                <div className="icon"><IoIosWarning /></div>
                <span className='card_title bold_text'>Disclaimer:</span>Please update your move date before two days of shifting
            </div>
            {showDetails && <MoreDetailsContainer/>}
        </div>
    )
}

export default MyMovesContainer
