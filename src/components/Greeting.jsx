import {useState, useCallback} from 'preact/hooks';

export default ({messages}) => {

  const randomMessage = useCallback(() => messages[(Math.floor(Math.random() * messages.length))], [messages]);

  const [greeting, setGreeting] = useState(randomMessage());

  const onHandleClick = useCallback(() => {
    let newGreeting = randomMessage();

    while (newGreeting === greeting) {
        newGreeting = randomMessage();
    }

    setGreeting(newGreeting);
  }, [randomMessage, greeting]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={onHandleClick}>
        New Greeting
      </button>
    </div>
  );
}