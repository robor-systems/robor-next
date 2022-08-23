const Container = ({ children, ...props }) => {
  // Don't pass me any props pls
  return (
    <div className="container mx-auto px-2 overflow-hidden sm:px-6" {...props}>
      {children}
    </div>
  );
};

export default Container;
