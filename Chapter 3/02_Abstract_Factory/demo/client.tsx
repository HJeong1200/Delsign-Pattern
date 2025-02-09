import { factoryComponent } from "./componentFactory";
import { Mode } from "./interfaces.interface";

/**
 * Abstract Factory 패턴에서 각 factory 코드를 실제로 사용하는 client
 */
const Client = () => {
  const [currentMode, setCurrentMode] = useState(Mode.Light);

  const componentFactory = factoryComponent(currentMode);

  /**
   * Concrete Product
   */
  const Background = componentFactory.createBackground();
  const Input = componentFactory.createInput();
  const Text = componentFactory.createText();
  const Button = componentFactory.createButton();

  return (
    <>
      <div>
        <select
          onChange={(event) => {
            setCurrentMode(event.target.value as Mode);
          }}
        >
          <option value={Mode.Light}>Light Mode</option>
          <option value={Mode.Dark}>Dark Mode</option>
        </select>
      </div>
      <Background>
        <div>
          <div>
            <Text content="Name: " />
            <Input />
          </div>
          <div>
            <Text content="Address: " />
            <Input />
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </div>
      </Background>
    </>
  );
};

export default Client;
