import { Logo } from "./Logo";
import { NavItems } from "./NavBar";

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
};
