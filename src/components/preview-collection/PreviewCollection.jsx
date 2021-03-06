import React from 'react';
import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/CollectionItem';

export default function PreviewCollection({title, items, id}) {
  return (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
  );
}
