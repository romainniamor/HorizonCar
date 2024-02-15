import { useParams, useNavigate } from "react-router-dom";

export default function MainPage() {
  const { userName } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <p>MainPage bienvenue {userName}</p>
      <button onClick={handleClick}>Se deconnecter</button>
    </div>
  );
}
