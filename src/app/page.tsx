import LibraryData from "@/components/Library/page";
import Banner from "@/components/Banner/page"
import { Suspense } from "react";

const AllData = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={
          <div className="container mx-auto mt-10">
            <div className="mb-8">
              <h2 className="font-oswald text-3xl font-bold text-white">
                THE LIBRARY
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Loading exercises...
              </p>
            </div>

            <div className="flex min-h-[300px] items-center justify-center">
              <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>
            </div>
          </div>
        }
      >
        <LibraryData />
      </Suspense>
    </div>
  );
};

export default AllData;