import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.component.scss';

const MenuItem = ({title, imageUrl, linkUrl, size, history, match}) =>{
    console.log(title, imageUrl, linkUrl );
    return(
        <div className={`menu-item ${size}`}>
            <div className="background-image"  style={{backgroundImage: `url(${imageUrl})`}} onClick={()=>history.push(`${match.url}${linkUrl}`)}></div>
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
}
export default withRouter(MenuItem);