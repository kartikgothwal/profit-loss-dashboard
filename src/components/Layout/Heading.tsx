import { JSX } from "react";

const Heading: ({ title }: { title: string }) => JSX.Element = ({
  title,
}: {
  title: string;
}): JSX.Element => {
  return <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>;
};

export default Heading;
