/**
 * Abstract Product
 */
export const Background = (props: any) => {
  const backgroundStyle = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div {...props} style={{ ...backgroundStyle, ...props.style }}>
      {props.children}
    </div>
  );
};

export const Button = (props: any) => {
  return <button {...props} />;
};

export const Input = (props: any) => {
  return <input {...props} />;
};

export const Text = (props: any) => {
  return <span style={props.style}>{props.content || ""}</span>;
};
