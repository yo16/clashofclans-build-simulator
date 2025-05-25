"use client";

import Image from "next/image";

import { imageMap } from "@/data/imageMap";

type TownHallSelectorProps = {
    th: number,
    handleThChange: (newTh: number) => void,
}

export const TownHallSelector = ({
    th,
    handleThChange: parentHandleThChange,
}: TownHallSelectorProps) => {

    const handleThChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        parentHandleThChange(Number(e.target.value));
    }

    return (
        <div>

            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}
                >
                    <select
                        value={th}
                        onChange={handleThChange}
                    >
                        {Array.from({length:17}, (_, i) => (
                            <option
                                key={`th-${i}`}
                                value={i+1}
                            >
                                {i+1}
                            </option>
                        ))}
                    </select>
                    <Image
                        src={imageMap.townhall[th-1]}
                        alt="townhall"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}
