import { JSX } from "react";
import Heading from "../../Layout/Heading";
import { GET_PROFIT_LOSS_REPORT, PROFIT_LOSS_HEADER } from "../../../constant";
import RowHeroComponent from "../RowHeroComponent";
import { NavigateFunction, useNavigate } from "react-router-dom";

const ProfileLossReport: () => JSX.Element = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const goToBalanceSheet: () => void = (): void => {
    navigate("/balance-sheet");
  };
  return (
    <>
      <Heading
        title={PROFIT_LOSS_HEADER}
        ButtonClick={goToBalanceSheet}
        ButtonText={"Go To Balance Sheet"}
      />
      <RowHeroComponent queryKeyURL={GET_PROFIT_LOSS_REPORT} />
    </>
  );
};

export default ProfileLossReport;
