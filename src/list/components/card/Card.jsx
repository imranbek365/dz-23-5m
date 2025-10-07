import './Card.scss';

export const Card = ({item}) => {
  return (
    <div className='card'>
        <div className="wrapper start">
            <h1 className='wrapper-number'>{item.number}</h1>
            <span className='wrapper-author'><strong></strong>{item.author}</span>
            <h1 className='wrapper-title'>{item.title}</h1>
            <p className='wrapper-description'>{item.description}</p>
            <button className='wrapper-btn'>read more</button>
        </div>
        <div className="wrapper">
            <img className='wrapper-picture' src={item.picture} alt="" />
        </div>
    </div>
  )
}
