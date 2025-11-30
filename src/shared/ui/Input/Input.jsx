import "./input.css";
const Input = ({ ...props }) => {
  return (
    <>
      <input className="input" {...props} />
    </>
  );
};

export default Input;

// const Input = ({ type, placeholder, name, onChange, value }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       name={name}
//       onChange={onChange} // <--- Это должно работать, если пропсы деструктурируются
//       value={value}
//     />
//   );
// };
