import Album from "@/components/Album/Album";
import PrivateRoute from "@/components/PrivateRoute";

const AlbumPage = () => {
  return (
    <PrivateRoute>
      <Album />
    </PrivateRoute>
  );
};

export default AlbumPage;
