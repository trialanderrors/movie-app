import { useState } from "react";


const SearchBar=({onSearch})=>{

    const[searchTerm, setSearchTerm] = useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSearch(searchTerm);
    }

    const handleChange=(event)=>{
        setSearchTerm(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div classname="row">
                <input type="text" placeholder="Search Movies ....." value={searchTerm} onChange={handleChange}/>
            </div>
            <button className="btn btn-primary" type="submit">Search</button>
        </form>

    );

}

export default SearchBar;