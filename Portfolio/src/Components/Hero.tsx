import style from './Hero.module.css';

function Hero() {
    return (
        <div className={style.hero}>
            <div>
            <img src="profile.png" className={style.image}/>
            </div>
            <div className={style.text}>
                <p>Someli</p>
               <p>Frontend Developer crafting responsive, accessible, and engaging web experiences using React, Next.js, and modern UI frameworks.</p> 
               <div>
                <button className={style.download}>Download Resume</button>
               </div>
            </div>
        </div>
    );
}

export default Hero;