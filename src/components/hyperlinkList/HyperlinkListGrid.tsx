import React from "react";
import HyperlinkList from "./HyperlinkList";

interface Props {
  headers: string[];
  elementNames: string[][];
  links: string[][];
}

const HyperLinkListGrid: React.FC<Props> = ({ headers, elementNames, links }) => {
  const renderHyperLinkList = (i: number) => {
    return <HyperlinkList key={headers[i]} header={headers[i]} linkNames={elementNames[i]} links={links[i]} />;
  };

  let hyperLinkLists = [];
  for (let i = 0; i < headers.length; i++) {
    hyperLinkLists.push(renderHyperLinkList(i));
  }

  return <div className="hyperlink-list-grid">{hyperLinkLists}</div>;
};
export default HyperLinkListGrid;
