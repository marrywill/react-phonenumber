import React from 'react'
import "./PhoneItem.scss"

const PhoneItem = ({ name, number }) => {
    return (
        <div className="phone_item">
            <div className="phone_item_left">
                <div className="phone_item_name">{name}</div>
                <div className="phone_item_phone">{number}</div>
            </div>
            <div className="phoen_item_right">
                <button>삭제</button>
            </div>
        </div>
    )
}
export default PhoneItem