"use client";
import { fetchAlbums } from "@/redux/slices/albumSlice";
import { fetchPhotos } from "@/redux/slices/photoSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import AlbumSkeleton from "./AlbumSkeleton";
import Link from "next/link";
import Hero from "./Hero";
import { fetchUsers } from "@/redux/slices/userSlice";
import Skeleton from "react-loading-skeleton";

const Album = () => {
  const params = useParams();
  const albumId = params.albumId;
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const albums = useSelector((state: RootState) => state.albums.albums);
  const [isImageLoaded, setIsImageLoaded] = useState<Boolean>(false);
  const photos = useSelector((state: RootState) => state.photos.photos);
  const photoStatus = useSelector((state: RootState) => state.photos.status);
  const [showProfile, setShowProfile] = useState<Boolean>(true);

  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchAlbums());
    dispatch(fetchUsers())
  }, [dispatch]);
  

  const album = albums.find((album) => album.id === Number(albumId));
  const user = users.find((user) => user.id === album?.userId);

  const albumPhotos = photos.filter(
    (photo) => photo.albumId === Number(albumId)
  );
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <PrivateRoute>
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {user?.name || <Skeleton width={96} />}&apos;s{" "}
            </span>
            {album?.title || <Skeleton width={240} />}
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold">Album Pictures</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoStatus === "loading" ? (
              <AlbumSkeleton cards={20} width={200} />
            ) : (
              albumPhotos.map((photo) => (
                <Card
                  key={photo.id}
                  className="hover:cursor-pointer shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="font-bold hover:text-blue-600 hover:underline">
                      <Link href={`/user`}>
                        {photo.title.charAt(0).toUpperCase() +
                          photo.title.slice(1)}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    {isImageLoaded ? (
                      <img
                        src={photo.url || "/hero.svg"}
                        alt={photo.title}
                        onLoad={handleImageLoad}
                        className="mx-auto rounded-xl"
                      />
                    ) : (
                      <img
                        src={"/hero.svg"}
                        alt={photo.title}
                        onLoad={handleImageLoad}
                        className="mx-auto rounded-xl"
                      />
                    )}
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Album;
