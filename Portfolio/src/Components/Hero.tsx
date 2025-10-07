import style from './Hero.module.css';

function Hero() {
    return (
        <div className={style.hero}>
            <img src="profile.png" className={style.image}/>
        </div>
    );
}

export default Hero;