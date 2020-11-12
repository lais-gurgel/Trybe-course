import Daughter from './Daughter';

function Father(props) {
  return (
    <div>
      <h1>Eu sou o pai</h1>
      <Daughter
        inheritance={props.inheritance}
        spendInheritance={props.spendInheritance}
      />
    </div>
  );
}

export default Father;
