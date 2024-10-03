import React from "react";

interface Props {
  pageIndex: number;
  pageLength?: number;
}

const PageProgress: React.FC<Props> = ({
  pageIndex,
  pageLength = 5,
}: Props) => {
  const array = new Array(pageLength).fill(null);

  return (
    <div className="flex flex-row justify-center gap-6 w-[700px] max-w-full py-10">
      {array.map((_, index) => {
        return index <= pageIndex ? (
          <div
            className="w-[40px] h-[6px] rounded-[50px] bg-[#1A1C1E]"
            key={index}
          ></div>
        ) : (
          <div
            className="w-[40px] h-[6px] rounded-[50px] bg-[#DCE4E8]"
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default PageProgress;
