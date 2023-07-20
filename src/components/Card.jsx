import '../style/Card.scss';
import arrowleft from '../assets/images/arrowleft.svg';
import arrowright from '../assets/images/arrowright.svg';

function Card() {
    return (
        <div className='card-container'>
            <button className='button_back'><img src={arrowleft} alt="" /></button>
            <div className='card'>
            <p className='card__word'>Word</p>
            <p className='card__transcription'>[ <span>transcription</span> ]</p>
            <button className='card__button'>Show translation</button>
        </div>
        <button className='button_forward'><img src={arrowright} alt="" /></button>
        </div>

    );
}

export default Card;