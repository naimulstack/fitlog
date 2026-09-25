import { IDataType } from "@/types/data-type"
// import DataCard from "../DataCard/page";
import Image from "next/image";

const LibraryData = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data: IDataType[] = await response.json();

    return (
        <div>
            <div>
                <h2>THE LIBRARY</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div>
                {
                    data.map((card) => {
                        return <div key={card.id}>
                            <Image
                                src={card.image}
                                alt="FitLog banner"
                                width={500}
                                height={300}
                                priority
                            />
                            <p>{card.muscleGroups}</p>
                            <h2>{card.name}</h2>
                            <p>{card.equipment}</p>
                            <div>
                                <p>{card.duration}</p>
                                <p>{card.caloriesBurned}</p>
                                <p>{card.rating}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default LibraryData;