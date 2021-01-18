import Container from "../components/Container";
import { NextSeo } from "next-seo";

// OPTIMIZE YOUR SEO HERE
// EXCEPT THE INDEX.JS, ALL THE PAGE SHOULD CONFIGURATE LIKE THIS.
// INDEX.JS WILL BE CONFIGURED IN NEXT-SEO.CONFIG.JS
const url = "https://phong.vn/phong";
const title = "About - PHONG";
const description = "Here about me.";

export default function About() {
  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-3 md:p-10 rounded-md w-full">
        <h1 className="font-bold text-3xl text-black dark:text-white">
          Hi, there! again. You want to know more about me?
        </h1>
      </div>
    </Container>
  );
}
