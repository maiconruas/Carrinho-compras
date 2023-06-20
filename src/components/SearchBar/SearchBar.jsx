import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProduct';
import './SearchBar.css';
import AppContext from '../../context/AppContext';

function SearchBar() {

    const { setProducts, setLoading } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');
    

    const handleSerach = async (event) => {
        event.preventDefault();
        setLoading(true);
        const products = await fetchProducts(searchValue);
        setProducts(products);
        setLoading(false);
        setSearchValue('');
    };

    return(
        <form className="search-bar" onSubmit={handleSerach}>
            <input 
                type="search" 
                value={searchValue}
                placeholder="Buscar produtos" 
                className="search__input" 
                onChange={ ({ target }) => setSearchValue(target.value) }
                required
            />

            <button type="submit" className="search__button">
                <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;
