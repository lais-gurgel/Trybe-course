import Father from './Father';

function Grandmother(props) {
  return (
    <div>
      <h1>Eu sou a vó</h1>
      <Father
        inheritance={props.inheritance}
        spendInheritance={props.spendInheritance}
      />
    </div>
  );
}

export default Grandmother;
