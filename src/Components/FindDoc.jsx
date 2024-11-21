import {React, useState, useEffect} from 'react'
import DocApmntCard from "../Components/DocApmntCard";
import { Dropdown } from "flowbite-react";
const FindDoc = () => {
    const [topDocs ,setTopDocs] = useState([]);
    const [filteredDocs, setFilteredDocs] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
    
    useEffect(()=>{
        fetch("https://md-sakib-rahman.github.io/doctorsDB/db.json")
        .then(res => res.json())
        .then(data => {
            
            setTopDocs(data.posts);
            setFilteredDocs(data.posts);

        })
        
    }, [])
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase();
      
        const filtered = topDocs.filter((doc) => {
          const name = doc.name?.toLowerCase() || ""; 
          const designation = doc.Designation?.toLowerCase() || ""; 
      
          return name.includes(query) || designation.includes(query);
        });
      
        setFilteredDocs(filtered);
      };
  return (
    <>
        
        <div className="flex max-md:flex-col justify-center items-center mx-auto gap-10 my-10">
        <p className="text-xl text-sky-950 font-bold ">Search Doctors:</p>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            className="rounded-lg border border-gray-300 p-2"
            type="text"
            placeholder="Search Doctor"
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
        <Dropdown label="Choose Designation" dismissOnClick={false}>
          {Array.from(new Set(topDocs.map((doc) => doc.Designation))).map(
            (designation, index) => (
              <Dropdown.Item
                key={index}
                onClick={() =>
                  setFilteredDocs(topDocs.filter((doc) => doc.Designation === designation))
                }
              >
                {designation}
              </Dropdown.Item>
            )
          )}
        </Dropdown>
      </div>
        
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 overflow-hidden">
        {filteredDocs.map((docDetails) => (
          <DocApmntCard key={docDetails.id} docDetails={docDetails} />
        ))}
        </div>
    </>
  )
}

export default FindDoc
