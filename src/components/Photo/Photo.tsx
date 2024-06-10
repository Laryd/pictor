"use client";
import { fetchPhotoById, selectSinglePhoto, selectSinglePhotoStatus, selectUpdateTitleStatus, updatePhotoTitle } from "@/redux/slices/photoSlice";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Skeleton from "react-loading-skeleton";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const UserPhoto = () => {
  const params = useParams();
  const photoId = params.photoId;
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const photo = useAppSelector(selectSinglePhoto)
  const photoStatus = useAppSelector(selectSinglePhotoStatus);
  const updateStatus = useAppSelector(selectUpdateTitleStatus);
  const [editing, setEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

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
