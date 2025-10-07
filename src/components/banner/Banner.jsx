// import arrow from '../imgs/arrow_downward_24px.svg';
import Header from '../header/Header';

export default function Banner() {
    return (
        <section className='banner'>
            <Header />
            <div className='title_container'>
                <div className="title row">
                    <div className="line"></div> <p>A Hiking guide</p>
                </div>
                <h1>Be prepared for the Mountains and beyond!</h1>
                <p>scroll down </p>
            </div>
        </section>
    )
}