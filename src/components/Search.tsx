import { useState } from 'react';

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <label
                htmlFor='search'
                className='text-2xl text-amber-500 mr-2 pb-2'
            >
                Search:
            </label>

            <input
                className='border-amber-50 border-2 border-b-amber-600'
                id='search'
                name='search'
                type='text'
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Type to search...'
            ></input>
        </div>
    );
}
