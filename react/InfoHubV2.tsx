import React, { useEffect, useRef, useState } from "react";
//@ts-expect-error
import { createPortal } from "react-dom";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface InfoHubV2Props { }

const InfoHubV2: StorefrontFunctionComponent<InfoHubV2Props> = ({ }) => {

  const grabDOM = (selector: string) => canUseDOM ? document.querySelector(selector) : null;

  return <>InfoHub</>;
}

InfoHubV2.schema = {
  title: "InfoHub",
  type: "object",
  properties: {}
}

export default InfoHubV2;