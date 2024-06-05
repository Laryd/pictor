"use client";
import { fetchAlbumById } from "@/redux/slices/albumSlice";
import { fetchPhotos } from "@/redux/slices/photoSlice";
import { fetchUserById } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import AlbumSkeleton from "../AlbumSkeleton";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";

const Album = () => {
  const params = useParams();
  const albumId = params.albumId;
  const userId = params.userId;
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.users.singleUser);
  const album = useSelector((state: RootState) => state.albums.singleAlbum);
  const photos = useSelector((state: RootState) => state.photos.photos);
  const photoStatus = useSelector((state: RootState) => state.photos.status);
  const [isImageLoaded, setIsImageLoaded] = useState<Record<number, boolean>>(
    {}
  );
  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchAlbumById(Number(albumId)));
    dispatch(fetchUserById(Number(userId)));
  }, [dispatch, albumId,userId]);

  const albumPhotos = photos.filter(
    (photo) => photo.albumId === Number(albumId)
  );

  const handleImageLoad = (id: number) => {
    setIsImageLoaded((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/photoplaceholder.svg";
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            <Link href={`/user/${user?.id}`}>
              {user?.name || <Skeleton width={96} />}&apos;s
            </Link>{" "}
          </span>
          {album?.title || <Skeleton width={240} />}
        </h2>

        <h2 className="text-3xl md:text-4xl font-bold">Album Pictures</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {photoStatus === "loading" ? (
            <AlbumSkeleton cards={20} width={200} />
          ) : (
            albumPhotos.map((photo) => (
              <Link href={`${album?.id}/photo/${photo.id}`}>
                <Card
                  key={photo.id}
                  className="hover:cursor-pointer shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="font-bold hover:text-blue-600 hover:underline">
                      {photo.title.charAt(0).toUpperCase() +
                        photo.title.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    {!isImageLoaded[photo.id] && <Skeleton height={200} />}
                    <img
                      src={photo.url || "/photoplaceholder.svg"}
                      alt={photo.title}
                      onLoad={() => handleImageLoad(photo.id)}
                      onError={handleImageError}
                      className={`mx-auto rounded-xl ${
                        !isImageLoaded[photo.id] ? "hidden" : ""
                      }`}
                    />
                  </CardFooter>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};


export default Album;
