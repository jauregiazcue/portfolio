import './Button.css'

function Button({classNames,styles, children,myFunction = ()=>{}}) {
  return (
      <button className={classNames} style={styles} onClick={() => myFunction()}>
      {children}
      </button>
    
  );
}

export default Button; 