"use client";
import Aos from "aos";
import React, { PropsWithChildren, useEffect } from "react";

const AosWrapper = (props: PropsWithChildren) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return <div>{props.children}</div>;
};

export default AosWrapper;
