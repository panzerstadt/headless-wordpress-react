import React from "react";
import useFetch from "../API/useFetch";

import { BASE_URL, FEATURED_MEDIA } from "../../constants";

const matchClosest = (sizes, matchWidth) => {
  const sizesKey = Object.keys(sizes);
  // TODO: match the closest size that is larger than the given width

  return sizes.full.source_url;
};

const WPImage = ({ url, alt }) => {
  const [state, doFetch] = useFetch(url, {});
  // get window innetwidth
  const w = document.innerWidth;

  // TODO: listen to resize

  if (state && state.data && state.data.media_details) {
    const sizes = state.data.media_details.sizes;
    const src = matchClosest(sizes);

    return <img src={src} alt={alt || src} />;
  }

  return <img src={""} alt={alt || ""} />;
};

export default WPImage;
