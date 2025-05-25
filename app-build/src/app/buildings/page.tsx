import { Metadata } from "next";

import BuildMain from "./pageMain";

export const metadata: Metadata = {
  title: "Building Simulator | Clash of Clans Simulator",
  description: "Building Simulator",
};

export default function Build() {
    return (
        <BuildMain />
    )
}