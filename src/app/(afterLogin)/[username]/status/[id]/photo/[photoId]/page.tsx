import Home from "@/app/(afterLogin)/home/page";

export default function Page({
  params,
}: {
  params: { username: string; id: string; photoId: string };
}) {
  return <Home />;
}
