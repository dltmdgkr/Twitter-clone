import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div>해당 페이지가 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
      <Link href="/search">검색</Link>
    </div>
  );
}
