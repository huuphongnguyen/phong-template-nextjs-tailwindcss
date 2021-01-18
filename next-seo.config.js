const title = "YOUR_TITLE";
const description = "YOUR_DESCRIPTION";

const SEO = {
  title,
  description,
  canonical: "YOUR_HTTPS_DOMAIN_COM",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "YOUR_HTTPS_DOMAIN_COM",
    title,
    description,
    images: [
      {
        url: "YOUR_DEFAULT_FEATURE_IMAGE_PATH",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
