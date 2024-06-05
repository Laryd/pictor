import PrivateRoute from "@/components/PrivateRoute";
import { UserProfile } from "@/components/UserProfile/UserProfile";

const User = () => {
  return (
    <>
  <PrivateRoute>
    <UserProfile />;
  </PrivateRoute>
      
    </>
  );
 
};

export default User;
