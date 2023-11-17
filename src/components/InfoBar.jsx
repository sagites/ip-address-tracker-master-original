import React, { useEffect, useState } from 'react';
import Map from './GetMap';
import Infobar from './Details';
import './infoBar.css';

const ResultBar = ({ data }) => {
  //     const [latitude, setLatitude] = useState("");
  //    const [longitude, setLongitude] = useState('');

  //    useEffect( () => {
  //        const lat = data.latitude
  //        setLatitude(lat);
  //        const long = data.longitude;
  //        setLongitude(long);
  //    },[data]);

  return (
    <>
      {/* <Infobar/> */}
      <div className='resultBar'>
        <div>
          <p className='heading'>IP ADDRESS</p>
          <p className='result'>{data?.ip_address}</p>
        </div>

        <div>
          <p className='heading'>LOCATION</p>
          <p className='result'>
            {data?.city} {` ${data?.country}`}
          </p>
        </div>

        <div>
          <p className='heading'>TIMEZONE</p>
          <p className='result'>{data?.timezone?.abbreviation}</p>
        </div>

        <div>
          <p className='heading'>ISP</p>
          <p className='result'>{data?.connection?.isp_name}</p>
        </div>
      </div>
      {<Map latitude={data?.latitude} longitude={data?.longitude} />}
    </>
  );
};

export default ResultBar;
