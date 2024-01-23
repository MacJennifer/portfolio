import React from "react";

const EmailLink = () => {
  const emailAddress = "macaire.jennifer@sfr.fr";
  return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};

export default EmailLink;
