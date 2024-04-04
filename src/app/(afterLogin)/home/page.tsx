import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import PostRecommends from "./_component/PostRecommends";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getPostRecommends } from "./_lib/getPostRecommends";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "postRecommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
