import './loading.css'

const Loading = () => {
  return (
    <div className={"flex w-full h-96 justify-center items-center"}>
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    </div>
  );
}

export default Loading;