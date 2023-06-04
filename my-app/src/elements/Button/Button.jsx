import "../../assets/styles/elements/button.scss";

function Button({children}) {
  const onClick = () => {
    console.log("click")
  }
  return <button onClick={onClick}>{children}</button>;
}

export default Button;