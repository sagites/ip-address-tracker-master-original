import React from "react";

export default function Infobar({
    data
}) {
    return (
        <div className="resultBar">
        <div>
            <p className="heading">IP ADDRESS</p>
            <p className="result">{data?.ip_address}</p>
        </div>

        <div>
            <p className="heading">LOCATION</p>
            <p className="result">{data?.city} {` ${data?.country}`}</p>
        </div>

        <div>
            <p className="heading">TIMEZONE</p>
            <p className="result">{data?.timezone?.abbreviation}</p>
        </div>

        <div>
            <p className="heading">ISP</p>
            <p className="result">{data?.connection?.isp_name}</p>
        </div>
    </div> 
    )
}