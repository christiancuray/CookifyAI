import iconLogo from "./images/icon.png";

export default function Header() {
  return (
    <header>
      <img src={iconLogo} />
      <h1>CookifyAI</h1>
    </header>
  );
}
