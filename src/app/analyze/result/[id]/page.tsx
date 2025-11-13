import ResultPage from "@/pages/analyze/result/ResultPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <ResultPage id={params.id} />;
}

