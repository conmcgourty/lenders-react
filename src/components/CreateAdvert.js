import React from 'react';
import PropTypes from 'prop-types';


const CreateAdvert = () => (
  <div>
    CreateAdvert Component
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        
      </div>    
      <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
      </div>

    </form>
  </div>
  


);

CreateAdvert.propTypes = {};

CreateAdvert.defaultProps = {};

export default CreateAdvert;
