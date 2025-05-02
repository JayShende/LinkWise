import { Button } from "./ui/button";
import { Input } from "./ui/input";


const UrlInput = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="url" 
      className="sm:w-[500px] w-[230px]"
      placeholder="Enter Your URL" />
      <Button >Shorten</Button>
    </div>
  )
};

export default UrlInput;
