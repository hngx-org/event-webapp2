import React from "react";
import {useState} from "react";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import {useRouter} from "next/navigation";
import { error } from "console";


interface setData  {
  "statusCode": 200,
  "message": "successful",
  "data": [
    {
      "id": string;
      "event_name": string;
      "event_description": string;
      "image": string;
      "event_start": string;
      "event_end": string;
      "location": string;
      "created_by": string;
      "created_at": string;
      "updated_at": string
    }
      
  ]
}

const SearchBar = ()  => {
  const [formData, setFormData] = useState<string>("")
  const router = useRouter();
  
    function handleSubmit(e:any) {
      e.preventDefault();
      router.push(`/searchresults?keyword=${formData}`);
    }
    return (
    <form className="w-full md:w-60 xl:w-80 h-14 p-2 gap-4 relative border border-black/40 rounded-2xl flex" onSubmit={handleSubmit} >
      
      <input
        placeholder="Find an event"
        className="h-full w-full  text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
      
    </form>
  );
}
export default SearchBar;