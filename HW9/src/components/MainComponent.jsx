import { useUser } from "../context/UserContext";
import DynamicForm from "./DynamicForm";
import FormHello from "./FormHello";

export default function MainComponent() {
  const context = useUser();

  if (context.userName && context.userSecondName) {
    return <FormHello />;
  } else {
    return <DynamicForm />;
  }
}
