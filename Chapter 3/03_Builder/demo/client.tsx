import "./App.css";
import { ModalBuilder } from "./builder";
import { Director } from "./director";

const Client = () => {
  const [currentOption, setCurrentOption] = useState("message");
  const builder = new ModalBuilder();
  const director = new Director(builder);

  let Modal;

  switch (currentOption) {
    case "message":
      director.buildMessageModal("Some message.");
      break;
    case "alert":
      director.buildAlertModal("You cannot do that.");
      break;
    case "input":
      director.buildInputModal("Input Modal", "Enter your name:");
      break;
    default:
      director.buildConfirmModal("Are you sure you want to proceed?");
  }

  Modal = builder.getResult();

  return (
    <div>
      <h3>Choose your modal</h3>
      <select onChange={(e) => setCurrentOption(e.target.value)}>
        <option value="message">Message Modal</option>
        <option value="alert">Alert Modal</option>
        <option value="input">Input Modal</option>
        <option value="confirm">Confirm Modal</option>
      </select>
      <div
        style={{
          width: "400px",
          height: "auto",
          padding: "50px",
          border: "1px solid black",
          margin: "10px",
        }}
      >
        <Modal />
      </div>
    </div>
  );
};

export default Client;
