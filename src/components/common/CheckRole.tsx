import React from "react";
import useAppSelector from "../../hooks/useAppSelector";

type Props = {
  children: React.ReactNode;
  requireRole: string | string[];
  isPage: boolean;
};

const CheckRole: React.FC<Props> = ({ children, requireRole, isPage }) => {
  const auth = useAppSelector((state) => state.auth);

  const userRoles = auth.userInfo?.user.roles || [];

  // transforme en tableau si string
  const requiredRoles = Array.isArray(requireRole)
    ? requireRole
    : [requireRole];

  // vérifie si au moins un rôle correspond
  const hasRole = requiredRoles.some(role =>
    userRoles.includes(role)
  );

  if (!hasRole && isPage) {
    return <div>Access Denied</div>;
  }

  if (!hasRole && !isPage) {
    return null;
  }

  return children;
};

export default CheckRole;
