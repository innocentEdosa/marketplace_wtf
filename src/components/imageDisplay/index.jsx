import styles from "./imageDisplay.module.css"

const ImageDisplay = ({
    src="https://images.pexels.com/photos/34765987/pexels-photo-34765987.jpeg",
    label ="Photo of the day"
}) => {

    return <div className={styles.wrapper}>
<img className={styles.image} src={src} />
<div className={styles.label}>
    {label}
</div>
    </div>
}

export default ImageDisplay;
