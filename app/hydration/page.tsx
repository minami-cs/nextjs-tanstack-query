import { getUsers } from "@/utils/api-requests";
import { QueryClient, dehydrate } from "@tanstack/query-core";
import { HydrationBoundary } from "@tanstack/react-query";
import ListUsers from "./list-users";

// tanstack-query 팀에서는 initial data prefetch보다는 hydration을 이용하는 방법 권장
export default async function Hydration() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["hydrate-users"],
    queryFn: getUsers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ListUsers />
    </HydrationBoundary>
  );
}
