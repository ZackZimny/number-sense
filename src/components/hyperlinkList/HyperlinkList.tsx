import React from "react";
import HyperlinkListElement from "./HyperLinkListElement";

interface Props {
  header: string;
  linkNames: string[];
  links: string[];
}

const HyperlinkList: React.FC<Props> = ({ header, linkNames, links }) => {
  const renderListElement = (i: number) => {
    return <HyperlinkListElement key={i.toString()} name={linkNames[i]} link={links[i]} />;
  };

  const createListElementArray = () => {
    let elements = [];
    for (let i = 0; i < linkNames.length; i++) {
      elements.push(renderListElement(i));
    }
    return elements;
  };

  return (
    <div className="hyperlink-list">
      <h2 className="hyperlink-list-header">{header}</h2>
        <li>{createListElementArray()}</li>
    </div>
  );
};
export default HyperlinkList;
