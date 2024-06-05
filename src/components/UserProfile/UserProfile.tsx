"use client";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchUserById } from "@/redux/slices/userSlice";
import { fetchAlbums } from "@/redux/slices/albumSlice";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import AlbumSkeleton from "../AlbumSkeleton";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

export const UserProfile = () => {
  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.users.singleUser);
  const albums = useSelector((state: RootState) => state.albums.albums);
  const albumStatus = useSelector((state: RootState) => state.albums.status);
  const [showProfile, setShowProfile] = useState<Boolean>(true);

  useEffect(() => {
    dispatch(fetchUserById(Number(userId)));
    dispatch(fetchAlbums());
  }, [dispatch, userId]);

  const userAlbums = albums.filter((album) => album.userId === Number(userId));
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {user?.name}&apos;s{" "}
          </span>
          Profile
        </h2>
        {user !== null ? (
          <Card className="bg-muted/50 relative mt-12 flex flex-col justify-center items-center max-w-96">
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={`/user${user?.id}.svg`}
                alt={user.name}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{user?.name}</CardTitle>
              <CardDescription className="text-primary">
                @{user.username}
              </CardDescription>
            </CardHeader>

            <CardContent className={cn("pb-2", { hidden: showProfile })}>
              <div className="mb-4">
                <p className="font-bold">
                  Email: <span className="font-normal">Sincere@april.biz</span>
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold">Address</p>
                <ul className="list-inside ml-4">
                  <li className="font-bold">
                    Street:{" "}
                    <span className="font-normal">{user.address.street}</span>
                  </li>
                  <li className="font-bold">
                    Suite:{" "}
                    <span className="font-normal">{user.address.suite}</span>
                  </li>
                  <li className="font-bold">
                    City:{" "}
                    <span className="font-normal">{user.address.city}</span>
                  </li>
                  <li className="font-bold">
                    Zipcode:{" "}
                    <span className="font-normal">{user.address.zipcode}</span>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-bold">
                  Phone: <span className="font-normal">{user.phone}</span>
                </p>
                <p className="font-bold">
                  Website: <span className="font-normal">{user.website}</span>
                </p>
              </div>
              <div>
                <p className="font-bold">Company:</p>
                <ul className="list-disc list-inside ml-4">
                  <li className="font-bold">
                    Name:{" "}
                    <span className="font-normal">{user.company.name}</span>
                  </li>
                  <li className="font-bold">
                    CatchPhrase:{" "}
                    <span className="font-normal">
                      {user?.company.catchPhrase}
                    </span>
                  </li>
                  <li className="font-bold">
                    BS: <span className="font-normal">{user.company.bs}</span>
                  </li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col items-start">
              <p className="font-extrabold ">
                Find Me:{" "}
                <span className="text-green-600 font-semibold">
                  www.{user.website}
                </span>{" "}
              </p>
              <p className="font-extrabold ">
                GPS:{" "}
                <span className="text-greem-600 font-semibold">
                  {user?.address.geo.lng}, {user?.address.geo.lat}
                </span>{" "}
              </p>
              <Button
                className={cn("absolute -bottom-4 left-1/3", {
                  "bg-red-400 hover:bg-red-300": !showProfile,
                })}
                onClick={() => setShowProfile(!showProfile)}
              >
                {showProfile ? "Expand" : "Hide"}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="max-w-[32rem]">
            <div>
              <Skeleton
                height={96}
                circle
                width={96}
                style={{ marginBottom: "0.2rem" }}
              />
            </div>
            <div>
              <Skeleton height={150} width={150} />
            </div>
          </div>
        )}

        <h2 className="text-3xl md:text-4xl font-bold">Albums</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {albumStatus === "loading" ? (
            <AlbumSkeleton cards={10} />
          ) : (
            userAlbums.map((album) => (
              <Link key={album.id} href={`${user?.id}/album/${album.id}`}>
                <Card className="hover:cursor-pointer shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-bold hover:text-blue-600 hover:underline">
                      <Link href={`${user?.id}/album/${album.id}`}>
                        {album.title.charAt(0).toUpperCase() +
                          album.title.slice(1)}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <img
                      src={`/albumplaceholder.svg`}
                      alt="album picture"
                      className="mx-auto rounded-xl"
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
