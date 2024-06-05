"use client";
import { useDispatch } from "react-redux";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/userSlice";
import { fetchAlbums } from "@/redux/slices/albumSlice";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import DashboardSkeleton from "./DashBoardSkeleton";
import PrivateRoute from "./PrivateRoute";
import Link from "next/link";

interface DashboardProps {
  title: string;
  description: string;
  image: string;
}

const featureList: string[] = [
  "Album",
  "Photos",
  "Edit Details",
  "Cool Design",
  "Responsive design",
  "Elegant",
];
const predefinedUserImagesUrl: string[] = Array.from(
  { length: 10 },
  (_, i) => `/user${i + 1}.svg`
);

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const albums = useSelector((state: RootState) => state.albums.albums);
  const userStatus = useSelector((state: RootState) => state.users.status);
  const albumStatus = useSelector((state: RootState) => state.albums.status);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchAlbums());
  }, [dispatch]);

  const userAlbumCount = (userId: number) => {
    return albums.filter((album) => album.userId === userId).length;
  };
  const albumPicture = (userId: number): string => {
    const index = userId - 1;
    return predefinedUserImagesUrl[index];
  };
  return (
    <PrivateRoute>
      <main id="users" className="container py-24 sm:py-32 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          Discover{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            User Albums
          </span>
        </h2>

        <div className="flex flex-wrap md:justify-center gap-4">
          {featureList.map((feature: string) => (
            <div key={feature}>
              <Badge variant="secondary" className="text-sm">
                {feature}
              </Badge>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userStatus === "loading" ? (
            <DashboardSkeleton cards={10} />
          ) : (
            users.map((user) => (
              <Link key={user.id} href={`/user/${user.id}`}>
                <Card
                  className="hover:cursor-pointer shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <Link href={`/user/${user.id}`}>
                      <CardTitle>{user.name || <Skeleton />}</CardTitle>
                    </Link>
                  </CardHeader>

                  <CardContent>
                    <p>
                      {user.company.name}: {user.company.catchPhrase}
                    </p>
                    <p>Albums: {userAlbumCount(user.id)}</p>
                  </CardContent>
                  <CardFooter>
                    {albumStatus === "loading" ? (
                      <Loader2 />
                    ) : (
                      <img
                        src={albumPicture(user.id)}
                        alt="About album"
                        className="mx-auto rounded-xl"
                      />
                    )}
                  </CardFooter>
                </Card>
              </Link>
            ))
          )}
        </div>
      </main>
    </PrivateRoute>
  );
};
