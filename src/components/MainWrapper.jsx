const MainWrapper = (props) => {
  return (
    <main>
      <h1>Mari Belajar React</h1>
      {props.children}
    </main>
  );
};

export default MainWrapper;
