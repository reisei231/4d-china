import { headers } from "next/headers";
import FirstHelper from "../firstHelper/firstHelper";

const First = () => {
  const headersList = headers();
  const hostname = headersList.get("host");
  const url = new URL("", `http://${hostname}`);

  url.searchParams.set("modal", "true");

  return <FirstHelper url={url} />;
};

export default First;
