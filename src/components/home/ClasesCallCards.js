import React from 'react'

export const ClasesCallCards = ({ title, uploadimg, mensaje }) => {
  return (
    <div className='col-4'>
        <div className="card clasescall__card" style={{width: '18rem'}}>
            <img className="card-img-top clasescall__img-card" src={ uploadimg } alt="logo" />
            <div className="card-body">
                <h5 className="card-title clasescall__card-title">{ title }</h5>
                <p className="card-text clasescall__card-text text-limit">{ mensaje }</p>
            </div>
        </div>
    </div>
  )
}
