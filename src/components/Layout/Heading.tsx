import { JSX } from "react";
import Button from "../common/Button";
import { IHeadingProps } from "../../types";
const Heading: ({
  title,
  ButtonClick,
  ButtonText,
}: IHeadingProps) => JSX.Element = ({
  title,
  ButtonClick,
  ButtonText,
}: IHeadingProps): JSX.Element => {
  return (
    <div className="flex gap-4 my-2 justify-between">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
      <Button Text={ButtonText} onClick={ButtonClick} />
    </div>
  );
};

export default Heading;
