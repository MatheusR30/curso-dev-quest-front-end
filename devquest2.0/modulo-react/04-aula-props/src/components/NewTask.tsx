type TaskProps = {
  // "?" torna a descrição opcional e nao uma obrigacao
  description: string;
};

// Para ter uma descrição Padrão
// const NewTask = ({ description = "Nenhuma tarefa cadastrada" }: TaskProps) => {
const NewTask = ({ description }: TaskProps) => {
  return <p>Tarefa: {description} </p>;
};

export default NewTask;
