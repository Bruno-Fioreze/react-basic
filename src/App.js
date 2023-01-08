import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()

  const [tasks, setTasks] = useState(["teste"])
  const [user, setUser] = useState({})

  useEffect(() => {
    //componentDidMount
    //executa quando carrega a página
  }, [])

  useEffect(() => {
    //componentDidUpdate
    //executa quando tasks sofre alteração

    //componentDidUnmount
    //será executado quando trocar de página.
    // return () => {

    // }
  }, [tasks])


  const handleChangeValue = (e, action) => {
    action(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault();
    
    setTasks([...tasks, name])
    setName('')
    // setUser({
    //   name,
    //   age,
    //   email
    // })
  }

  return (
    <div className="App">
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome: </label>
          <input placeholder="Digite seu nome" value={name} onChange={(e) => handleChangeValue(e, setName)} />
        </div>
        <div>
          <label>Email: </label>
          <input placeholder="Digite seu email" onChange={(e) => handleChangeValue(e, setEmail)}  />
        </div>
        <div>
          <label>Idade: </label>
          <input placeholder="Digite seu idade" onChange={(e) => handleChangeValue(e, setAge)}/>
        </div>

        <div>
          <label>Tarefas: </label>
          <input placeholder="Digite uma tarefa" onChange={(e) => handleChangeValue(e, setTasks)}/>
        </div>
        <button> Registar </button>
      </form>
      <div>
        <span>Bem-vindo: {user?.name}</span>
        <span>Idade: {user?.age}</span> 
        <span>E-mail: {user?.email}</span> 
      </div>
      <div>
        <ul>
          {tasks.map( task => ( <li key={task} >{task}</li> ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
