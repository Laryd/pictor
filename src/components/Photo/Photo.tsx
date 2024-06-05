"use client";
import {
  fetchPhotoById,
  updatePhotoTitle,
} from "@/redux/slices/photoSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Skeleton from "react-loading-skeleton";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

const UserPhoto = () => {
  const params = useParams();
  const photoId = params.photoId;
  const dispatch = useDispatch<AppDispatch>();
  const {toast} = useToast()
  const photo = useSelector((state: RootState) => state.photos.singlePhoto);
  const photoStatus = useSelector((state: RootState) => state.photos.singlePhotoStatus);
  const updateStatus = useSelector(
    (state: RootState) => state.photos.updateStatus
  );
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchPhotoById(Number(photoId)));
  }, [dispatch, photoId]);
  const handleEditing = (id: number, title: string) => {
    if (photo && title === photo.title) return;
    if (id && title !== undefined) {
      dispatch(updatePhotoTitle({ id, title }));
    }
    setEditing(false);
  };
 useEffect(() => {
   if (updateStatus === "succeeded") {
     toast({
       variant: "default",
       title: "Title update was successful",
       description: "Your title was successfully changed",
     });
    
     
   }
   if (updateStatus === "failed") {
     toast({
       variant: "destructive",
       title: "Uh oh! Something went wrong.",
       description: "There was a problem with your request.",
     });
   }
 }, [updateStatus, toast]);

  return (
   
      <div className="flex justify-center mt-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {editing && photo ? (
                <>
                  <Input
                    value={title}
                    placeholder={photo.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    onClick={() => handleEditing(photo.id, title)}
                  >
                    Save
                  </Button>
                </>
              ) : photo ? (
                <>
                  <div className="flex gap-3 items-center">
                    {photoStatus === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      photo.title.charAt(0).toUpperCase() + photo.title.slice(1)
                    )}{" "}
                    <Button variant="outline" onClick={() => setEditing(true)}>
                      Edit Title
                    </Button>
                  </div>
                </>
              ) : (
                <Skeleton width={120} />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {photo !== null ? (
              <Image
                alt={photo.title || "/photoplaceholder.svg"}
                src={photo.url}
                width={600}
                height={600}
                className="rounded-lg"
              />
            ) : (
              <Skeleton width={600} height={600} />
            )}
          </CardContent>
        </Card>
      </div>
    
  );
};

export default UserPhoto;
