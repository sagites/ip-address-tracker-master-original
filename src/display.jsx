import React, { useEffect, useState } from "react";
import ResultBar from "./infoBar";
import Fetch from "./UseFetch";
import { data } from "autoprefixer";
import Map from "./GetMap";

export default function UserInfo ({
    ip_address
}) {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    useEffect( () => {
        const latitude =  data?.latitude;
        setLat(latitude)
        const longitude =  data?.longitude;
        setLong(longitude)
    }, [data])

    return (
        <>
            <Fetch
                //uri={`https://ipgeolocation.abstractapi.com/v1/?api_key=bce1fb2ec45a47baa45360efdb3d0228&ip_address=${ip_address}`}
                //uri={`https://ipgeolocation.abstractapi.com/v1/?api_key=bce1fb2ec45a47baa45360efdb3d0228&ip_address=${ip_address}&fields=ip_address,country,city,timezone,longitude,latitude,timezone.abbreviation,connection`}
                renderSuccess={ResultBar}
                renderError={ error => {
                    return <p>{error.message}</p> 
                }}
            />

            {/* <Map long={long}  lat={lat}/> */}
        </>

    )
}
