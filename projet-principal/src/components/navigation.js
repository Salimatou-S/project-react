import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/"  style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })}>
                Accueil
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })}>
                A propos
            </NavLink>
        </div>
    );
};

export default navigation;