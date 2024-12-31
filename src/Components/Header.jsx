import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="flex justify-around text-3xl items-center p-5 m-1 text-white border-b-2 border-white">
      <NavLink to="/normalcomponent">Normal Component</NavLink>
      {isSignedIn && (
        <NavLink to="/protectedcomponent">Protected Component</NavLink>
      )}

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
