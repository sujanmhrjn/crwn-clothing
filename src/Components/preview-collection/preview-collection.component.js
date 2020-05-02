import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({title, routeName, items,match}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title"><Link to={`${match.url}/${routeName}`}>{title.toUpperCase()} </Link></h1>
            <div className="preview">
                {
                    items.filter((item,index)=> index < 4).map(({id, ...otherItemProps}) =>{
                        return (
                        
                            <CollectionItem  key={id} {...otherItemProps}/>
                        
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);