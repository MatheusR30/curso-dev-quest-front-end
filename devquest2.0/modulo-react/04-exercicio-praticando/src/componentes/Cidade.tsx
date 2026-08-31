interface CidadeProps {
  nome: string;
  populacao: number;
}

export const Cidade = ({ nome, populacao }: CidadeProps) => {
  return (
    <div style={{ border: "1px solid #fff", padding: "10px", margin: "10px" }}>
      <h2>{nome}</h2>
      <p>{populacao}</p>
    </div>
  );
};
