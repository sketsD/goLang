import Button from "../../../ui/Button";
import useToggle from "../../../hooks/useToggle";
import StarRating from "../../../ui/StarRating";

const cutTextNice = (text: string) => {
  const lastSpace = text.slice(0, 200).lastIndexOf(" ");
  const res = text.slice(0, lastSpace);
  return res;
};

export default function TutorsCardItem({
  tutorsData,
}: {
  tutorsData: {
    author: string;
    img: string;
    nativeLanguage: string;
    language: string;
    description: string;
    rating: string;
    price: string;
  };
}) {
  const { author, nativeLanguage, language, description, rating, img, price } =
    tutorsData;

  const [isOpen, handleIsOpen] = useToggle(false);
  const displayDescription = isOpen
    ? description
    : description.length > 400
    ? cutTextNice(description) + "..."
    : description;
  return (
    <div className="flex">
      <div className="flex max-h-fit w-full rounded-md border-2 shadow-xl p-4 dark:bg-teal-900">
        <div className="basis-1/4 ">
          <div
            className="h-72 mt-4 rounded-md"
            style={{
              background: `url(${img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="flex-col basis-2/4 pl-8">
          <div>
            <p className="font-semibold">Tutor's name:</p>
            <div className="border-b-2 w-full">{author}</div>
          </div>
          <div>
            <p className="font-semibold">Native language:</p>
            <div className="border-b-2 w-full">{nativeLanguage}</div>
          </div>
          <div>
            <p className="font-semibold">Language I teach:</p>
            <div className="border-b-2 w-full">{language}</div>
          </div>
          <div>
            <p className="font-semibold">About:</p>
            <div className="bg-transparent border-b-2 w-full outline-none resize-none overflow-hidden">
              {displayDescription}
            </div>
            {description.length > 400 && (
              <button
                onClick={handleIsOpen}
                className="pt-6 font-bold hover:text-neutral-600 duration-300"
              >
                {isOpen ? "Hide details" : "Read more..."}
              </button>
            )}
          </div>
        </div>
        <div className="basis-1/4">
          <div className="flex flex-col  px-8 pt-8 gap-6 h-full justify-between">
            <div className="flex flex-col gap-4 ">
              <div>
                <p className="font-semibold">Lesson duration:</p>
                <div className="border-b-2 w-full">{"120"}</div>
              </div>
              <div>
                <p className="font-semibold">Price per lesson:</p>
                <div className="border-b-2 w-full">{price}</div>
              </div>
              <div>
                <p className="font-semibold">Rating: </p>
                <div className="flex  items-end  border-b-2">
                  <StarRating rating={Number(rating)} />
                  <div className="ml-4"> {rating} </div>
                </div>
              </div>
            </div>
            <Button style="colored">Book a lesson</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
