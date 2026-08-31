import "./Dashboard.css";

type DashboardProps = {
  // ira receber um texto, ou nulo
  username: string | null;
};

export const Dashboard = ({ username }: DashboardProps) => {
  console.log(username);

  return (
    <div>
      {username ? (
        <h1>Bem-vindo {username}!</h1>
      ) : (
        <h2 className="not-looged"> Você precisa fazer login.</h2>
      )}
    </div>
  );
};
