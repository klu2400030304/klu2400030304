function Greetings() {
  function sayHello(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={() => sayHello("shaheen")}>
      Say Hello
    </button>
  );
}
export default Greetings;