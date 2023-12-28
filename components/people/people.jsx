/* eslint-disable @next/next/no-img-element */


const People = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <h1 className="text-4xl font-medium text-[#272D4E] max-w-[423px]"> Supported by Real People</h1>
      <p className="max-w-[423px] text-center text-[#94A2B3]">
        Our team of Happiness Engineers works remotely from 58 countries
        providing customer support across multiple time zones.
      </p>
      <img src="/images/people.png" alt=""  />
    </div>
  );
};

export default People;
