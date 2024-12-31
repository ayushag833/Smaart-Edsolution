import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedComponent = () => {
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1 className="text-white text-5xl text-center mt-[10rem]">
        This is a Protected Component. Only LoggedIn users can access it.
      </h1>
    </div>
  );
};

export default ProtectedComponent;
