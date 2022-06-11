import React from 'react';
import "./Rentals.css";

export const Rentals = () => {
  const [data,setdata]= React.useState([]);
  React.useEffect(()=>{
       const stored= async()=>{
        let res= await fetch("http://localhost:8080/houses");
        let stored_data= await res.json();
        setdata(stored_data);
       }
       stored();
  },[]);

  const sortId = ()=>{
     let sorted_data=data.sort(function(a,b){return (Number(a.id)-Number(b.id));});
     setdata(sorted_data);
  }

  const sortRentLH= ()=>{
    data.sort(function(a,b){return (Number(a.rent)-Number(b.rent));});
    setdata(data);

  }
  const sortRentHL= ()=>{
    let sorted=data.sort(function(a,b){return (Number(b.rent)-Number(a.rent));});
    console.log(sorted)
    setdata(sorted);

  }
  const sortAreaLH= ()=>{
    let sorted=data.sort(function(a,b){return (Number(a.areaCode)-Number(b.areaCode));});
    console.log(sorted)
    setdata(sorted);

  }
  const sortAreaHL= ()=>{
    let sorted=data.sort(function(a,b){return (Number(b.areaCode)-Number(a.areaCode));});
    console.log(sorted)
    setdata(sorted);

  }
 // const addItem = (item) =>{
   // setdata([...data,item]);
  //}

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={()=>sortId()}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={()=>sortRentLH()}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={()=>sortRentHL()}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={()=>sortAreaLH()}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={()=>sortAreaHL()}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.preferredTenants.length===1?([house.preferredTenants[0]]):("Both")}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
