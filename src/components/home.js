import React from 'react';
import {Link} from 'react-router-dom';


function Home() {

    return (
    <main>
        <h1>Accueil</h1>
       <button>
        <Link to="/series">Séries</Link>
       </button>
       <button>
       <Link to="/films">Movies</Link>
       </button>
    </main>
    )
  }

export default Home;