import React from 'react'
// import "./PhoneList.css"
import PhoneItem from "../PhoneItem"

const PhoneList = () => {
    return (
        <div className="phone_list">
            <PhoneItem name="홍길동" number="010-0011-0011" />
            <PhoneItem name="박기철" number="010-1100-1111" />
            <PhoneItem name="흥부네" number="010-1111-0000" />
        </div>
    )
}

export default PhoneList