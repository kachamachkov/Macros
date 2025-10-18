import { useState } from 'react';

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <label className='text-2xl text-amber-500 mr-2 pb-2'>
                Search Bar
            </label>

            <input
                type='text'
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Type to search...'
            ></input>
        </div>
    );
}
