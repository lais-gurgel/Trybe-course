function Daughter(props) {
  return (
    <div>
      <h1>Eu sou a filha</h1>
      <span>
        `Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`
      </span>
      <br />
      <button type="button" onClick={props.spendInheritance}>Gastar</button>
    </div>
  );
}

export default Daughter;
