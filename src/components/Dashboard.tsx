"use client"
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


interface DashboardProps {
  title: string;
  description: string;
  image: string;
}

const albums: DashboardProps[] = [
  {
    title: "Responsive Design",
    description: `has Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.`,
    image: "/hero.svg",
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "/hero.svg",
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "/hero.svg",
  },
];

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
    <section id="albums" className="container py-24 sm:py-32 space-y-8">
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
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                {user.company.name}: {user.company.catchPhrase}
              </p>
              <p>Albums: {userAlbumCount(user.id)}</p>
            </CardContent>

            <CardFooter>
              <img
                src={albumPicture(user.id)}
                alt="About album"
                className="mx-auto rounded-xl"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
