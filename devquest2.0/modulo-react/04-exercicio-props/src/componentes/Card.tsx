// Card.jsx
interface CardProps {
  titulo: string;
  descricao: string;
}

export const Card = ({ titulo, descricao }: CardProps) => {
  return (
    <div
      style={{ border: "1px solid #e92424", padding: "10px", margin: "10px" }}
    >
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
};
