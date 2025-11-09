import React from "react";

const search = () => {
    return (
        <form className='grid grid-cols-[20px_1fr] p-2.5 bg-[#F9F9F9] border border-r-0 border-gray-200 rounded-l-full gap-2'>
            <button>
                <img src="/search.png" alt="search" />
            </button>
            <input type="search" placeholder="Search the creative world at work" />
        </form>
    )
}

export default search;