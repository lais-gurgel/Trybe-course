import MyContext from './MyContext';

function Daughter(props) {
  return (
    <MyContext.Consumer>
      { value => (
        <div>
          <h1>I am the daughter</h1>
          <span>
            `I have a ${value.money} inheritance that I received from my great grandmother`
          </span>
          <br />
          <br/>
          <button type="button" onClick={value.spendMoney}>Spend Inheritance</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Daughter;
