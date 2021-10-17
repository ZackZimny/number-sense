import React from "react";
import { Link } from "react-router-dom";
interface Props {
  name: string;
  link: string;
}
const HyperlinkListElement: React.FC<Props> = ({ name, link }) => {
  return (
    <div className="hyperlink-list-element">
      <Link to={link}>{name} </Link>
    </div>
  );
};
export default HyperlinkListElement;
