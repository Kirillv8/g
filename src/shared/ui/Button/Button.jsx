import "./button.css";
const Button = ({ ...props }, isLoading = false) => {
  return (
    <>
      <button className="btn" {...props} disabled={isLoading}>
        {isLoading && "Загрузка"}
      </button>
    </>
  );
};
export default Button;
