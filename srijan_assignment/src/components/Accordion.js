import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AccordionDetails from './AccordionDetails';

const Accordion = ({ item }) => {
    const [open, setOpen] = useState(false)

    const [count, setCount] = useState([])
    const setCountFunc = (item) => {
        let c = 0
        if (item.categories) {
            item.categories.map((pro, index) => {
                for (let x in pro.itemsList) {
                    if (x == "all") {
                        pro.itemsList[x].map((itm, index) => {
                            if (itm.qty != 0 && itm.qty != "0") {
                                c = c + Number(itm.qty)
                            }
                        })
                    }
                }
            })
            setCount(c)
        }
        else {
            item.itemsList.all.map((itm, index) => {
                    if (itm.qty != 0 && itm.qty != "0") {
                        c = c + Number(itm.qty)
                    }
                }
            )
            setCount(c)
        }
    }
    useEffect
        (() => {
            setCountFunc(item)
        }, [])
    return (
        <>
            <div className='accordion_container' onClick={() => setOpen(!open)}>
                <div className="accordion">
                    <div className="accordion_name">{item.roomName}
                        <div className="acc_qty">{count}</div></div>
                    <div className="accordion_arrow_icon">
                        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </div>
                </div>
            </div>
            {open && <AccordionDetails item={item} />}
        </>
    )
}

export default Accordion
