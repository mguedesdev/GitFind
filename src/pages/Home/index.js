import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import { useState } from "react";
import Button from "../../components/Button";

import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleInputChange = (value) => {
    setUser(value);
  };

  const handleGetData  = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      console.log(newRepos);

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background" />
        <div className="info"> 
          <div className="search">
            <Input user={user} onInputChange={handleInputChange}/>
            <Button handleGetData={handleGetData} />
          </div>
          {currentUser ? (
          <>
            <div className="profile">
              <img src={currentUser.avatar_url}
              className="img-profile" alt="img-profile"></img>
              <div>
                <h3>{currentUser.name}</h3>
                <span className="user">@{currentUser.login}</span>
                <p className="describe">{currentUser.bio}</p>
              </div>
            </div>
            <hr className="line" />
          </>
          ): null}
           <div>
            <h4>Repositórios</h4>
            <div className="repoList">
              {repos ? (
                repos.map((repo) => {
                  return <ItemList
                  title={repo.name}
                  description={repo.description}
                  link={repo.html_url}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  />
                })
              ) : null }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
