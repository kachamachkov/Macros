import { useState } from 'react';

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <label>Search Bar</label>

            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Type to search..."
            ></input>
        </div>
    );
}
