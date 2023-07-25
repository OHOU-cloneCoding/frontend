import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPost, likePost, updatePost } from "../../api/post";

// localstorage 여부에 따라 api 다르게?
export const PostQueryKey = "post";
export const usePostQuery = (postId) => {
  return useQuery([PostQueryKey, postId], getPost(postId), {
    staleTime: 3000,
    keepPreviousData: true, //지난 데이터도 캐싱유지
  });
};

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updatePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(PostQueryKey, (prevData) => ({
        ...prevData,
        data: [...prevData.data, data.data],
      }));
    },
  });
  return mutate;
};

export const useDeletePostMutation = () => {
  const { mutate } = useMutation(deletePost);
  return mutate;
};

export const useLikePostMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likePost, {
    //바로 상태 반영?
    onSuccess: (data) => {
      queryClient.setQueryData(PostQueryKey, (prevData) => ({
        ...prevData,
        data: [...prevData.data, data.data],
      }));
    },
  });
  return mutate;
};
