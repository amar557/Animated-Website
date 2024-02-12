const textData = ["we create", "eye opening", "presentations"];

function Main() {
  return (
    <div className="pt-36">
      <div>
        {textData.map((text, i) => (
          <h1 key={i} className="text-8xl leading-10 ">
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Main;
