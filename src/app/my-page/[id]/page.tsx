import MyPage from "@/pages/my-page/MyPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <MyPage id={params.id} />;
}

