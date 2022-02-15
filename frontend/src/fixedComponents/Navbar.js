import React from 'react';
import { connect } from 'react-redux';
import './fixed.css';

export const navbar = (props) => {
  return (
        <div className='navbar-container'>
            <div className='navbar-50'>
            <h3>Creyton</h3>
            </div>
        </div>
    
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);

