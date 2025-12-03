import "./button.css";
const Button = ({ isLoading, ...props }) => {
  return (
    <>
      <button className="btn" {...props} disabled={isLoading}>
        {isLoading ? "Загрузка" : "Отправить"}
      </button>
    </>
  );
};
export default Button;
