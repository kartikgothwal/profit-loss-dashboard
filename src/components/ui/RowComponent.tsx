import { JSX } from "react";
import { Column, Row } from "../../types";

const RowComponent: ({
  row,
  level,
}: {
  row: Row;
  level: number;
}) => JSX.Element = ({
  row,
  level,
}: {
  row: Row;
  level: number;
}): JSX.Element => {
  return (
    <>
      {row?.Header && (
        <tr
          className={`border border-gray-300 ${level === 0 ? "font-bold" : ""}`}
        >
          <td
            className="border border-gray-300 px-4 py-2"
            style={{ paddingLeft: `${1 * 20}px` }}
          >
            {(row?.Header?.ColData && row.Header.ColData[0]?.value) || ""}
          </td>
          {row?.Header?.ColData?.slice(1).map(
            (col: { value: string }, index: number) => (
              <td
                key={index}
                className="border border-gray-300 px-4 py-2 text-right"
              >
                {col.value || ""}
              </td>
            )
          )}
        </tr>
      )}
      {row.ColData && (
        <tr
          className={`border border-gray-300 ${level === 0 ? "font-bold" : ""}`}
        >
          <td
            className="border border-gray-300 px-4 py-2"
            style={{ paddingLeft: `${2 * 20}px` }}
          >
            {row.ColData[0]?.value || ""}
          </td>
          {row.ColData.slice(1).map((col: Column, index: number) => (
            <td
              key={index}
              className="border border-gray-300 px-4 py-2 text-right"
            >
              {col.value || ""}
            </td>
          ))}
        </tr>
      )}

      {row.Rows?.Row?.map((nestedRow: Row, index: number) => (
        <RowComponent key={index} row={nestedRow} level={level + 1} />
      ))}

      {row.Summary?.ColData && (
        <tr className="border border-gray-300 font-bold bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">
            {row.Summary.ColData[0]?.value || ""}
          </td>
          {row.Summary.ColData.slice(1).map((col: Column, index: number) => (
            <td
              key={index}
              className="border border-gray-300 px-4 py-2 text-right"
            >
              {col.value || ""}
            </td>
          ))}
        </tr>
      )}
    </>
  );
};
export default RowComponent;
