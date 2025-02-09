import { Mode } from "./interfaces.interface";
import { Button, Input } from "./productFactory";

/**
 * Product를 생성하는 코드를 담은 Abstract Factory
 */
interface ComponentFactory {
  createBackground(): (props?: any) => JSX.Element;

  createButton(): (props?: any) => JSX.Element;

  createInput(): (props?: any) => JSX.Element;

  createText(): (props?: any) => JSX.Element;
}

/**
 * Abstract Factory를 implement한 Concrete Factory
 */
class LightModeComponentFactory implements ComponentFactory {
  createBackground() {
    return (props?: any) => <Background {...props} />;
  }

  createButton() {
    return (props?: any) => <Button {...props} />;
  }

  createInput() {
    return (props?: any) => <Input {...props} />;
  }

  createText() {
    return (props?: any) => <Text {...props} />;
  }
}

class DarkModeComponentFactory implements ComponentFactory {
  createBackground() {
    const darkModeStyle = { backgroundColor: "black" };

    return (props?: any) => <Background style={darkModeStyle} {...props} />;
  }

  createButton() {
    const darkModeStyle = { backgroundColor: "gray", color: "white" };

    return (props?: any) => <Button style={darkModeStyle} {...props} />;
  }
  createInput() {
    const darkModeStyle = { backgroundColor: "gray", color: "white" };

    return (props?: any) => <Input style={darkModeStyle} {...props} />;
  }

  createText() {
    const darkModeStyle = { color: "white" };
    return (props?: any) => <Text style={darkModeStyle} {...props} />;
  }
}

/**
 * 클라이언트에게 Concrete Factory를 반환하는 factory method
 */
export const factoryComponent = (mode: Mode): ComponentFactory => {
  switch (mode) {
    case Mode.Light:
      return new LightModeComponentFactory();
    case Mode.Dark:
      return new DarkModeComponentFactory();
    default:
      return new LightModeComponentFactory();
  }
};
