import { useFetch } from "./useFetch"

interface Repository {
  full_name: string;
}

export function App() {

  const { data: repos , isLoading, error } = useFetch<Repository[]>('https://api.github.com/users/fischerrobson/repos');

  return (
    <div>
       {isLoading && <p>Carregando...</p>}
    <ul>
      {repos?.map(repo => {
        return (
          <li>{repo.full_name}</li>
        )
      })}
    </ul>
  </div>
  )
}