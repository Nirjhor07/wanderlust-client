import Banner from "@/Components/Banner";
import Image from "next/image";
import AllDestinationPage from "./alldestination/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto my-6">
        <AllDestinationPage />
      </div>
    </div>
  );
}
