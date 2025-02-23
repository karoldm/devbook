import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export const Loading = () => {
  return (
    <SyncLoader
      color="#6C80EA"
      loading={true}
      cssOverride={override}
      size={8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
