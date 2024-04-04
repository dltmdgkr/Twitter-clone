"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_component/Post";
import { Post as IPost } from "../../model/Post";
import { getPostRecommends } from "../_lib/getPostRecommends";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "postRecommends"],
    queryFn: getPostRecommends,
  });

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
}
