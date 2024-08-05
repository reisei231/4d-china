import First from "@/components/first/first";
import Second from "@/components/second/second";
import Third from "@/components/third/third";
import Guide from "@/components/guide/guide";
import { HideOverflow } from "@/utils/hideOverflow";
import { ShowOverflow } from "@/utils/showOverflow";
import CheckDialog from "@/components/dialog/dialog";
import VerifDialog from "@/components/verifDialog/verifDialog";

export default function Home(props) {
  const { searchParams } = props;
  const showModal = searchParams?.modal === "true";
  const step = searchParams?.step;

  return (
    <>
    <First/>
    <Second/>
    <Third/>
    <Guide/>
    {showModal && !step && (
        <>
          <HideOverflow />
          <CheckDialog />
        </>
      )}
      {showModal && step == "2" && (
        <>
          <HideOverflow />
          <VerifDialog />
        </>
      )}
      {!showModal && <ShowOverflow />}
    </>
  );
}
