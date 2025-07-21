import Image from "next/image";
import Thum from "@/assets/thum.jpg";

export default function Home() {
  return (
  <div className="container mx-auto p-4">
    <h1>Welcome to My App</h1>
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.

    <Image placeholder="blur" src={Thum} alt="thum"/>

  </div>
  );
}
