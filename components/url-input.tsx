
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface UrlInputProps{
  setInpuLink?: Dispatch<SetStateAction<string>>,
  isDisabled?:boolean,
  onCLickFun:()=>void
}

const UrlInput: React.FC<UrlInputProps> = ({
  setInpuLink = () => {},           // default: no-op function
  isDisabled = false,                // default: false
  onCLickFun,
}) => {

  if(!setInpuLink)
  {
    return;
  }
  return (
    <div className="flex w-full max-w-sm items-center justify-center space-x-2">
      <Input type="url" 
      className="sm:w-[500px] w-[230px] "
      placeholder="Enter Your URL" 
      onChange={(event)=>{
        setInpuLink(event.target.value);
      }}
      />
      <Button
      onClick={onCLickFun}
      disabled={isDisabled}
      >Shorten</Button>
    </div>
  )
};

export default UrlInput;
