import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function LoginButton() {
  const { pending } = useFormStatus();
  console.log(pending)
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </Button>
  );
}
