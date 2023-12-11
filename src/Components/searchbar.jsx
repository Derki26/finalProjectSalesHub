
import PropTypes from "prop-types";

const SearchBar = ({setSearch}) => {


    return (
        <>
            <div className="col mt-3">
                    <p>API Courses Finder. </p>    
            </div> 
            
            <div className='row flex-wrap ml-10'>
                <input
                    onChange={(event) => {
                        setSearch({input: event.target.value})
                        
                    }}
                    className="input border border-base-300"
                    type="search"
                    placeholder="Enter a Course name"
                    aria-label="Search"

                />
                <button className="ml-2 btn btn-primary col-1 bg-[#1da1f2] text-white" type="submit">Search</button>

            </div>
        </>
    )
}

SearchBar.propTypes = {
    setSearch: PropTypes.func,
}

export {SearchBar};