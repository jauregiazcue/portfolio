//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import { type TitlePayload } from "@/utils/interfaces/payload";
import "./Title.scss";

//---------------------COMPONENT---------------------
function Hero(payload: TitlePayload) {
  const { title, id } = payload;


  return <h1 id={id} className={"title"}>{title}</h1>;
}

export default Hero;