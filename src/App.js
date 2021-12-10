import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import './App.css';

const GET_CHARACTERS = gql`
  query getCharacters {
    characters(page: 1) {
      info {
        count
        pages
        next
      }
      results {
        name
        type
        species
        id
        image
      }
    }
  }
`;

// Props -> Objeto!!! :D

const Character = (props) => {
  const { character } = props; // Object destructuring ;D
  return (
    <div className="character">
      <img src={character.image} alt="" /> <br />
      {character.name} <br />
      {character.species}
    </div>
  );
};

const App = () => {
  const { data, error, loading } = useQuery(GET_CHARACTERS);
  const [showingModal, setShowingModal] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Hubo un error :c</div>;
  }

  return (
    <>
      <button onClick={() => setShowingModal(true)}>Mostrar modal</button>
      <div className="characters-grid">
        {data.characters.results.map((character, indx) => {
          // character = {  name, image, species }
          return <Character key={indx} character={character} />;
        })}
      </div>
      {showingModal && (
        <div className="character-modal">
          <button className="close" onClick={() => setShowingModal(false)}>
            ⚔️
          </button>
          <img src="" />
          <h3>Rick Sanchez</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium id aperiam
            impedit. Voluptate dolor accusamus excepturi dolores provident sequi! Maxime, quas
            doloribus alias sit natus expedita dolorum dolore voluptate quibusdam!
          </p>
        </div>
      )}
    </>
  );
};

export default App;
