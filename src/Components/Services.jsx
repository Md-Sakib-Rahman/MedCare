import {React, useState, useEffect} from 'react';
import ServiceApmntCard from "../Components/ServiceBookingCard";
import { Dropdown } from "flowbite-react";
const Services = () => {
  const [serviceList ,setServiceList] = useState([]);
  const [filteredSList, setFilteredSList] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
    
    useEffect(()=>{
        fetch("https://md-sakib-rahman.github.io/medicalServiceDB/db.json")
        .then(res => res.json())
        .then(data => {
            
          setServiceList(data.services);
          setFilteredSList (data.services);

        })
        
    }, [])
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase();
      
        const filtered = serviceList.filter((service) => {
          const name = service.name?.toLowerCase() || ""; // Null-safe access
          const category = service.category?.toLowerCase() || ""; // Null-safe access
      
          return name.includes(query) || category.includes(query);
        });
      
        setFilteredSList(filtered);
      };
  return (
    <>
        <div className="flex max-md:flex-col justify-center items-center mx-auto gap-10 my-10">
        <p className="text-xl text-sky-950 font-bold">Search Services:</p>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            className="rounded-lg border border-gray-300 p-2"
            type="text"
            placeholder="Search Services"
            value={searchQuery}
            onChange={
                (e) => {
                    console.log("Search Query:", e.target.value);
                    setSearchQuery(e.target.value)}}
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-800"
          >
            Search
          </button>
        </form>
        <p className="text-xl text-sky-950 font-bold">Filter:</p>
        <Dropdown label="Choose Service Category" dismissOnClick={false}>
          {Array.from(new Set(serviceList.map((service) => service.category))).map(
            (category, index) => (
              <Dropdown.Item
                key={index}
                onClick={() =>
                  setFilteredSList(serviceList.filter((service) => service.category === category))
                }
              >
                {category}
              </Dropdown.Item>
            )
          )}
        </Dropdown>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 overflow-hidden">
        {filteredSList.map((serviceDetails) => (
          <ServiceApmntCard key={serviceDetails.id} serviceDetails={serviceDetails} />
        ))}
        </div>
    
    </>
    
    
  )
}

export default Services