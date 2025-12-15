import React from "react";
import useAppSelector from "../../hooks/useAppSelector";

type Props = {
  children: React.ReactNode;
  requireRole: string;
  isPage: boolean;
};

const CheckRole: React.FC<Props> = ({ children, requireRole, isPage }) => {
  const auth = useAppSelector((state) => state.auth);

    if (!auth.userInfo?.user.roles.includes(requireRole) && isPage ) { 
        return <div>Access Denied</div>;
    }
    if(!auth.userInfo?.user.roles.includes(requireRole) && !isPage){
        return null;
    }
  return children
};

export default CheckRole;
