import Container from "../components/Container";
import ProductsGrid from "../components/elements/ProductsGrid";

const defaultEndpoint = process.env.NOTION_UNOFFICIAL_API;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const embarray = [data];

  return (
    <Container>
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:mt-10 p-3 md:p-10 rounded-md w-full">
        <h1 className="font-bold text-3xl text-black dark:text-white">
          Hi, there!
        </h1>
      </div>
      <div className="mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-3 md:p-10 rounded-md w-full">
        <ProductsGrid data={embarray[0]} />
      </div>
    </Container>
  );
}
