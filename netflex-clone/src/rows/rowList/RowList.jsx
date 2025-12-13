import React from "react";
import "./RowList.css";
import Row from "../row/Row";
import requests from "../../utils/requests";

const RowList = () => {
  return (
    <div className="rowlist">
      <Row title="Action Movies" fetchUrl={requests.fetchAction} isLargerRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrime} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentary} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamily} />
    </div>
  );
};

export default RowList;
