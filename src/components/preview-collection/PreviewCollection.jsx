import React from 'react';
import './preview-collection.styles.scss';

export default function PreviewCollection({title, items, id}) {
  return (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <div key={id}>{item.name}</div>
                ))
            }
        </div>
    </div>
  );
}
