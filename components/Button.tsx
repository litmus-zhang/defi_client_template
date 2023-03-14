import {Button} from "@chakra-ui/react"

interface Props {
  text: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

function DefinedButton(props: Props) {
  const { text, variant } = props;
  const btnStyle =
    variant === "primary"
      ? "bg-primary-1 flex items-center gap-1 text-black font-medium px-4 py-2 rounded-md hover:bg-transparent hover:text-primary-1 hover:border-primary-1 hover:border-2 "
      : " text-primary-1 fill-primary-1 flex  items-center gap-1 border-primary-1 border-2 font-medium px-4 py-2 rounded-md hover:bg-primary-1 hover:text-black";
  return <Button variant={variant}  className={btnStyle}>{text}</Button>;
}

export default DefinedButton;
