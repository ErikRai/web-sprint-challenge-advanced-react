import React from 'react'

import styled from 'styled-components'

const Styleys = styled.form`

  display: flex;
  align-items: center;

`

const Filter = ({ handleFilter }) => {

  return (

    <Styleys >

      <label htmlFor="price">Filter by Price</label>

      <select

        native
        // value={state.age}
        // onChange={handleChange}
        id='price'
        onChange={e => handleFilter(e)}
        style={{ color: 'black', width: '100px', margin: '10px' }}

      >

        {/* <option aria-label="None" value="" /> */}
        <option value="15">$15+</option>
        <option value="20">$20+</option>
        <option value="25">$25+</option>

      </select>

    </Styleys>

  )
  
}

export default Filter
