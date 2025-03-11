import { JSX } from "react";
import Heading from "../../Layout/Heading";
import {
  BALANCE_SHEET_HEADER,
  GET_BALANCE_SHEET_DATA,
} from "../../../constant";
import RowHeroComponent from "../RowHeroComponent";
import { NavigateFunction, useNavigate } from "react-router-dom";

const BalanceSheet: () => JSX.Element = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const goToProfileLossPage: () => void = (): void => {
    navigate("/");
  };
  return (
    <div>
      <Heading
        title={BALANCE_SHEET_HEADER}
        ButtonClick={goToProfileLossPage}
        ButtonText={"Go To Profile Loss Report"}
      />
      <RowHeroComponent queryKeyURL={GET_BALANCE_SHEET_DATA} />
    </div>
  );
};

export default BalanceSheet;
