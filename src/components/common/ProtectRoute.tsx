import { useEffect, type ReactNode } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import { useNavigate } from "react-router";

const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token || !auth.token.accessToken) {
      navigate("/login");
    }
  }, [auth, navigate]);

  if (!auth.token || !auth.token.accessToken) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectRoute;
