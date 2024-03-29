import React from 'react';
import { connect } from 'react-redux'; // importe o connect do 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { character, error, loading } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>  
        </ul>
      )
    }
    if (error) { 
      return (
        <div>{error}</div>
      ) 
    }
    if (loading) { 
      return (
        <div>
          Loading...
          <br/>
          Type a character name and click to search!
        </div>
      )
    }
}};



//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  character: state.character, 
  error: state.error,
  loading: state.loading
})

//faça as propTypes

// conecte este componente ao redux aqui
export default connect(mapStateToProps, null)(CharacterInfo);