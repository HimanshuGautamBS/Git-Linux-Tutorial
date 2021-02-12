import React from 'react';
import './Avatar.css';
import 'tachyons';  

const Avatar = (props) => {

	return (
		<div className="avatarstyle ma4 bg-light-purple dib pa3 tc grow shadow-4">
		    <img src={`https://joeschmoe.io/api/v1/${props.name} alt="Avatar`} />
		        <h1>{props.name}</h1>
		         <p>{props.work}</p>
		</div>
		)
}

export default Avatar;

// src=> using array destructuring