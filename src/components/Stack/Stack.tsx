import type { PayloadWithChildren } from "@interfaces/payload";
import "./Stack.scss";


interface StackPayload extends PayloadWithChildren {
  fullPage?: boolean,
  backgroundColor?: string,
  backgroundImage?: string,
}

function Stack(payload: StackPayload) {
  const { id, backgroundColor, backgroundImage, className, fullPage, children } = payload;
  let { style } = payload;
  style = style == undefined ?
    backgroundImage ? { backgroundImage: `url(${backgroundImage})` } :
      backgroundColor ? { backgroundColor: `${backgroundColor}` } :
        {} : style;

  const classNam = fullPage ? "stack-b" : "stack-a";
  return <div id={id ? id : ""}
    className={classNam + " " + className}
    style={style}>
    <div className= {classNam + "--body"}>
      {children}
    </div>
  </div>;
}

export default Stack;