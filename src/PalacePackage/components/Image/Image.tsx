//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import type { ImagePayload } from "@/PalacePackage/utils/interfaces/payload";
import "./Image.scss";

//---------------------COMPONENT---------------------
function Image(payload: ImagePayload) {
  const { id, url, alt } = payload;
  return (<img id={id} className="image" src={url} alt={alt} />);
}

export default Image;