// /**
//  * React Query와 Axios를 함께 사용하기 위한 커스텀 훅
//  * API 호출을 위한 공통 패턴 제공
//  */

// import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
// import axiosInstance from "./axios-instance";
// import { AxiosError, AxiosRequestConfig } from "axios";

// // Query 타입 정의
// type QueryKey = readonly unknown[];

// // API 응답 타입
// type ApiResponse<T> = {
//   data: T;
//   message?: string;
//   status?: number;
// };

// // useQuery 래퍼
// export function useApiQuery<TData = unknown, TError = AxiosError>(
//   queryKey: QueryKey,
//   url: string,
//   config?: AxiosRequestConfig,
//   options?: Omit<UseQueryOptions<ApiResponse<TData>, TError>, "queryKey" | "queryFn">
// ) {
//   return useQuery<ApiResponse<TData>, TError>({
//     queryKey,
//     queryFn: async () => {
//       const response = await axiosInstance.get<ApiResponse<TData>>(url, config);
//       return response.data;
//     },
//     ...options,
//   });
// }

// // useMutation 래퍼
// export function useApiMutation<TData = unknown, TVariables = unknown, TError = AxiosError>(
//   url: string,
//   method: "post" | "put" | "patch" | "delete" = "post",
//   options?: Omit<UseMutationOptions<ApiResponse<TData>, TError, TVariables>, "mutationFn">
// ) {
//   const queryClient = useQueryClient();

//   return useMutation<ApiResponse<TData>, TError, TVariables>({
//     mutationFn: async (variables) => {
//       const response = await axiosInstance.request<ApiResponse<TData>>({
//         url,
//         method,
//         data: variables,
//       });
//       return response.data;
//     },
//     onSuccess: (data, variables, context) => {
//       options?.onSuccess?.(data, variables, context);
//       // 성공 시 관련 쿼리 무효화 (선택적)
//       // queryClient.invalidateQueries({ queryKey: [/* 관련 키 */] });
//     },
//     ...options,
//   });
// }

// // 편의 함수들
// export const useApiGet = <TData = unknown, TError = AxiosError>(
//   queryKey: QueryKey,
//   url: string,
//   config?: AxiosRequestConfig,
//   options?: Omit<UseQueryOptions<ApiResponse<TData>, TError>, "queryKey" | "queryFn">
// ) => useApiQuery<TData, TError>(queryKey, url, config, options);

// export const useApiPost = <TData = unknown, TVariables = unknown, TError = AxiosError>(
//   url: string,
//   options?: Omit<UseMutationOptions<ApiResponse<TData>, TError, TVariables>, "mutationFn">
// ) => useApiMutation<TData, TVariables, TError>(url, "post", options);

// export const useApiPut = <TData = unknown, TVariables = unknown, TError = AxiosError>(
//   url: string,
//   options?: Omit<UseMutationOptions<ApiResponse<TData>, TError, TVariables>, "mutationFn">
// ) => useApiMutation<TData, TVariables, TError>(url, "put", options);

// export const useApiPatch = <TData = unknown, TVariables = unknown, TError = AxiosError>(
//   url: string,
//   options?: Omit<UseMutationOptions<ApiResponse<TData>, TError, TVariables>, "mutationFn">
// ) => useApiMutation<TData, TVariables, TError>(url, "patch", options);

// export const useApiDelete = <TData = unknown, TVariables = unknown, TError = AxiosError>(
//   url: string,
//   options?: Omit<UseMutationOptions<ApiResponse<TData>, TError, TVariables>, "mutationFn">
// ) => useApiMutation<TData, TVariables, TError>(url, "delete", options);
