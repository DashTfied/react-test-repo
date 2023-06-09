import React from 'react';
import "./Country.css"

const Country = (props) => {
    const{name, capital, population, area, region, flags} = props.country;
    // console.log(props.country)
    return (
        <div className='country'>

            <h2> Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h5>Capital:{capital}</h5>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>Region {region}</small></p>
            
            
        </div>
    );
};

export default Country;