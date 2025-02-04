import { Link } from "@remix-run/react";
import { Star } from "lucide-react";

type ViewLikesProps = {
  likes: number;
  likedByUser: boolean;
  pathname: string;
};

export function ViewLikes({ likes, likedByUser, pathname }: ViewLikesProps) {
  return (
    <Link
      to={pathname}
      preventScrollReset={true}
      className="flex justify-center items-center group"
    >
      <Star
        className={`w-4 h-4 group-hover:text-yellow-400 ${
          likedByUser ? "text-yellow-400" : "text-yellow-500"
        }`}
      />
      <span
        className={`ml-2 text-sm group-hover:text-yellow-400 ${
          likedByUser ? "text-yellow-400" : "text-yellow-500"
        }`}
      >
        {likes}
      </span>
    </Link>
  );
}
