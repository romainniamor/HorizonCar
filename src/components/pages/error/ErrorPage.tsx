import { useNavigate } from "react-router-dom";

type Props = {};

export default function Error({}: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Error page</h1>
      <button onClick={handleClick}>Revenir a l'accueil</button>
    </div>
  );
}
