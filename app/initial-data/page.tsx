import { getUsers } from "@/utils/api-requests";
import ListUsers from "./list-users";

export default async function InitialData() {
  const users = await getUsers();

  // initial data 사용시, 불러온 데이터를 props로 넘겨주어야 한다
  return <ListUsers users={users} />;
}
