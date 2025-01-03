const CabinetTabTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full flex justify-center border-b">
      <div className=" flex items-center h-10 w-[75vw] mb-4 ">
        <div className="font-medium text-xl md:text-4xl xl:text-5xl underline ">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};
export default CabinetTabTitle;
