import MyButton from "../button/button"
import styles from "./hero.module.css"
import ImageDisplay from "../imageDisplay"

const Hero = () => {

    return <section className={styles.wrapper}>
    <div className={styles.heading}>
        <h3>Samurai King Resting</h3>
        <MyButton buttonText="ADD TO CART" />
    </div>
    <ImageDisplay />
    </section>
}

export default Hero