import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export default function UploadPage() {
  return (
    <main className="flex w-full justify-center px-4 py-12">
      <section className="w-full max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">AI 기반 블랙박스 영상 분석</h1>
          <p className="mt-3 text-sm text-muted-foreground">블랙박스 영상을 업로드하면 AI가 사고 과실을 분석하고 관련 판례를 제공합니다.</p>
        </header>

        <Card className="border-none bg-background shadow-md">
          <CardHeader className="border-b border-border pb-4">
            <CardTitle className="text-lg font-semibold">영상 업로드</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 pb-8">
            <label
              htmlFor="blackbox-video"
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/40 bg-muted/20 px-6 py-12 text-center transition-colors hover:border-muted-foreground/70 hover:bg-muted/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <span className="text-2xl">⭱</span>
              </div>
              <p className="text-sm font-medium">
                블랙박스 영상을 드래그하여 업로드
                <br />
                또는 클릭하여 파일을 선택하세요
              </p>
              <Button type="button" variant="default" className="mt-6 h-10 px-6 text-sm font-semibold">
                파일 선택
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">지원 형식: MP4, (최대 500MB)</p>
              <input id="blackbox-video" type="file" accept="video/mp4" className="hidden" />
            </label>

            <Button type="button" className="mt-8 h-12 w-full text-base font-semibold">
              AI 분석 시작
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
