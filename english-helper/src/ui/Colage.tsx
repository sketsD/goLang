type ColageProps = {
  src: string;
  alt: string;
};

export default function Colage({ src, alt }: ColageProps) {
  return (
    <div className=" mr-0 relative lg:mr-40 xl:mr-60">
      <img className="relative z-30 rounded-lg" src={src} alt={alt} />
      <img
        className="rounded-lg absolute z-20 top-0 left-16 scale-90 hidden sm:block md:left-24 xl:left-36"
        src={src}
        alt={alt}
      />
      <img
        className=" rounded-lg absolute z-10 top-0 left-32 scale-75 hidden sm:block md:left-48 xl:left-72"
        src={src}
        alt={alt}
      />
    </div>
  );
}
