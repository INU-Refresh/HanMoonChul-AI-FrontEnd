/**
 * React Query의 query key를 관리하는 파일
 * 중앙 집중식으로 관리하여 타입 안정성과 일관성 유지
 */

export const queryKeys = {
  // Auth 관련
  auth: {
    all: ["auth"] as const,
    me: () => [...queryKeys.auth.all, "me"] as const,
    refresh: () => [...queryKeys.auth.all, "refresh"] as const,
  },

  // 예시: 다른 도메인들도 여기에 추가
  // analysis: {
  //   all: ["analysis"] as const,
  //   list: () => [...queryKeys.analysis.all, "list"] as const,
  //   detail: (id: string) => [...queryKeys.analysis.all, "detail", id] as const,
  // },
} as const;

