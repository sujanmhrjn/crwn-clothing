import React from 'react';
import './menu-item.component.scss';
const MenuItem = ({title, imageUrl, size}) =>{
    return(
        <div className={`menu-item ${size}`}>
            <div className="background-image"  style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
}
export default MenuItem