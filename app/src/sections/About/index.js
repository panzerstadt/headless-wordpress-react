import React, { useEffect, useState } from "react";
import useFetch from "../../components/API/useFetch";

import WPImage from "../../components/atoms/WPImage";

import { BASE_URL, ENDPOINT_ABOUT, FEATURED_MEDIA } from "../../constants";

const About = () => {
  const [state, doFetch] = useFetch(BASE_URL + ENDPOINT_ABOUT, {});

  if (state && state.data && state.data[0]) {
    const data = state.data[0];
    const img = BASE_URL + FEATURED_MEDIA + `/${state.data[0].featured_media}`;

    return (
      <div>
        <h1>{data.title.rendered}</h1>
        <WPImage url={img} alt="feature image" />

        <div>{state && state.data && state.data[0] && state.data[0].date}</div>
      </div>
    );
  }

  return <div>about page {JSON.stringify(state)}</div>;
};

export default About;
