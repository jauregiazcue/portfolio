import type { Payload } from "@interfaces/payload";
import "./Image.scss";

export interface ImagePayload extends Payload {
  url: string,
  alt: string,
}

function Image(payload: ImagePayload) {
  const { id, url, alt } = payload;
  return (<img id={id} className="image" src={url} alt={alt} />);
}

export default Image;