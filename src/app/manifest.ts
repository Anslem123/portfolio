import type { MetadataRoute } from "next";
import { seo } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             seo.applicationName,
    short_name:       "Anslem",
    description:      seo.description,
    start_url:        "/",
    display:          "standalone",
    background_color: "#08080F",
    theme_color:      "#F97316",
    lang:             "en-IN",
    categories:       ["portfolio", "technology"],
    icons: [
      {
        src:   "/favicon.ico",
        sizes: "any",
        type:  "image/x-icon",
      },
      {
        src:   "/apple-icon",
        sizes: "180x180",
        type:  "image/png",
      },
    ],
  };
}
