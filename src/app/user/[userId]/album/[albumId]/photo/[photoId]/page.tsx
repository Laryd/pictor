import UserPhoto from "@/components/Photo"
import PrivateRoute from "@/components/PrivateRoute"


const PhotoPage = () => {
  return (
    <PrivateRoute>
      <UserPhoto />
    </PrivateRoute>
  );
}

export default PhotoPage