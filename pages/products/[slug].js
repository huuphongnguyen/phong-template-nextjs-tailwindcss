import Container from "../../components/Container";
import NextImage from "next/image";
import { useRouter } from "next/router";

const defaultEndpoint = process.env.NOTION_UNOFFICIAL_API;

export async function getServerSideProps({ query }) {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
      url: query || null,
    },
  };
}

export default function Products({ data, url }) {
  const embarray = [data];
  const slugx = url;
  const embelearry = embarray[0];
  const filter = embelearry.filter((x) =>
    x.fields.id.includes(`${slugx.slug}`)
  );
  const processed = filter[0];

  console.log("datatag", filter);

  return (
    <Container>
      <div className="mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-3 md:p-10 rounded-md w-full">
        <div
          className="inline-flex space-x-2 items-center p-0 md:p-2 cursor-pointer mb-2 rounded-md text-black dark:text-white hover:bg-gray-200 dark:hover:text-black"
          onClick={() => router.back()}
        >
          <div>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              ></path>
            </svg>
          </div>
          <p className="text-sm font-bold">Quay trở lại</p>
        </div>
        <div>
          <NextImage
            className="object-cover"
            src={processed.fields.imageurl[0]}
            width={300}
            height={300}
          />
          <h1 className="text-black text-2xl">{processed.fields.id}</h1>
        </div>
      </div>
    </Container>
  );
}
