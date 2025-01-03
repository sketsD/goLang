import Button from "../../ui/Button";
import StarIcon from "../../assets/svgs/StarIcon";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";

const cutTextNice = (text: string) => {
  const lastSpace = text.slice(0, 400).lastIndexOf(" ");
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
  const [isEditable, handleIsEditable] = useToggle(false);
  const displayDescription = isOpen
    ? description
    : description.length > 400
    ? cutTextNice(description) + "..."
    : description;
  return (
    <div className="" onDoubleClick={handleIsEditable}>
      {!isEditable ? (
        <Link
          to=""
          className="flex max-h-fit w-full rounded-xl border-4 border-gray-300  p-2"
        >
          <div
            className="basis-1/4 max-h-72 bg-cover bg-no-repeat bg-center rounded-md "
            style={{
              background: `url(${img})`,
            }}
          ></div>
          <div className="flex-col basis-2/4 pl-8">
            <div>
              <span className="font-bold">Tutor: </span>
              <span className=" ml-2">{author}</span>
            </div>
            <div>
              <span className="font-bold">Native: </span>
              <span className=" ml-2">{nativeLanguage}</span>
            </div>
            <div>
              <span className="font-bold">Teaching: </span>
              <span className=" ml-2">{language}</span>
            </div>
            <div>
              <span className="font-bold">About: </span>
              <span className=" ml-2">{displayDescription}</span>
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
          <div className="basis-1/4">
            <div className="flex flex-col p-8 gap-6 h-full justify-between">
              <div className="flex flex-col gap-4 ">
                <div className="flex items-center ">
                  <StarIcon />
                  <div> {rating} </div>
                </div>
                <div className="">
                  <span className="font-bold">Price per 60min: </span>
                  <span className="text-lg">{price}</span>
                </div>
              </div>
              <div className=""></div>
              <Button style="colored">Book a lesson</Button>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex max-h-fit w-full rounded-xl border-4 border-gray-300  p-2">
          <div
            className="basis-1/4 max-h-72 bg-cover bg-no-repeat bg-center rounded-md"
            style={{
              background: `url(${img})`,
            }}
          ></div>

          <div className="flex-col basis-2/4 pl-8">
            <div>
              <span className="font-bold">Tutor: </span>
              <input
                type="text"
                value={author}
                className="bg-transparent border-b-2 w-full"
              />
            </div>
            <div>
              <span className="font-bold">Native: </span>
              <input
                type="text"
                value={nativeLanguage}
                className="bg-transparent border-b-2 w-full"
              />
            </div>
            <div>
              <span className="font-bold">Teaching: </span>
              <input
                type="text"
                value={language}
                className="bg-transparent border-b-2 w-full"
              />
            </div>
            <div>
              <span className="font-bold min-h-fit">About: </span>
              <textarea
                name=""
                id=""
                value={description}
                className="bg-transparent border-b-2 w-full h-fit outline-none resize-none overflow-hidden"
              ></textarea>
            </div>

            {description.length > 400 && (
              <button
                onClick={handleIsOpen}
                className="pt-6 font-bold hover:text-neutral-600 duration-300"
              >
                {!isEditable ? (isOpen ? "Hide details" : "Read more...") : ""}
              </button>
            )}
          </div>
          <div className="basis-1/4">
            {/* <div className="flex flex-col p-8 gap-6 h-full justify-between">
              <div className="flex flex-col gap-4 ">
                <div className="flex items-center ">
                  <StarIcon />
                  <div> {rating} </div>
                </div>
                <div className="">
                  <span className="font-bold">Price per 60min: </span>
                  <span className="text-lg">{price}</span>
                </div>
              </div>
              <div className=""></div>
              <Button style="colored">Book a lesson</Button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
