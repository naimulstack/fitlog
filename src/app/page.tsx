
import { IDataType } from "@/types/data-type"

const AllData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: IDataType = await response.json();

  console.log(data)
  return (
      <div>

      </div>
  );
};

export default AllData;