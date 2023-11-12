import React, {useState, useEffect }  from "react";
// import ResultBar from "./infoBar";
// import SearchComponent from "./searchBar";
//  import UserInfo from "./display";
import Map from "./GetMap";
// import Component from "./testing";
// import { client, query } from "./graphql";
// import ResultBar from "./infoBar";

export default function App () {
  const [address, setAddress] = useState("");
  // const [userData, setUserData] = useState('');

  // useEffect (() => {
  //   client
  //     .request(query, {address})
  //     .then(({user}) => user)
  //     .then(setUserData)
  //     .catch(console.error);
  // }, [client, query, address]);

  //  if(!userData) return <p>Loading.....</p>
  
  const handleSearch = (searchQuery) => {
    setAddress(searchQuery)
  }
  return (
    <>  
      {/* <SearchComponent onSearch={handleSearch} />
      <UserInfo ip_address={address}/> */}
      <Map long={-122.083846} lat={37.422472}/>
      {/* <Component/> */}
    </>
  )
} 