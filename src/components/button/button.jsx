import style from "./button.module.css";

const MyButton = ({ variant, buttonText = "click me" }) => {
  return (
    <button data-variant={variant} className={style.btn}>

      {buttonText}

    </button>
  );
};

export default MyButton;
