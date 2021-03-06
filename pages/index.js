import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:mt-10 p-3 md:p-10 rounded-md w-full">
        <h1 className="font-bold text-3xl text-black dark:text-white">
          Hi, there!
        </h1>
      </div>
      <div className="mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-3 md:p-10 rounded-md w-full"></div>
    </Container>
  );
}
