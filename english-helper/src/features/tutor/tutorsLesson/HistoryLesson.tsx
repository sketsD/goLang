import HomeWorkIcon from "../../../assets/svgs/classRoom/HomeWorkIcon";
import MessageIcon from "../../../assets/svgs/classRoom/MessageIcon";
import StudentMine from "../../../assets/svgs/classRoom/StudentMine";
import Button from "../../../ui/Button";
import ScrollableList from "../../../ui/ScrollableList";
export default function HistoryLesson() {
  return (
    <div>
      <div className="my-8 border-b pl-4">
        <p className="py-2 text-2xl text-gray-400 text-center">
          Previous Lessons
        </p>
      </div>
      <ScrollableList>
        <p className="py-2 text-2xl text-gray-400 text-center">Today</p>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <p className="py-2 text-2xl text-gray-400 text-center">
          Tuesday, September 22
        </p>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Zoe Liner</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              First lesson
            </Button>
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>

        <p className="py-2 text-2xl text-gray-400 text-center">
          Friday, December 11
        </p>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Zoe Liner</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              First lesson
            </Button>
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
        <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
          <div className="flex gap-4 items-center">
            <time dateTime="12:00" title="Lesson's time">
              12:00
            </time>
            <div className="flex gap-2">
              <StudentMine />
              <p>Vitaliy Chornenko</p>
            </div>
            <Button style="mainWhite" addedClass="h-2 px-2">
              <MessageIcon />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
              Lesson's topic <HomeWorkIcon />
            </Button>
          </div>
        </li>
      </ScrollableList>
    </div>
  );
}
