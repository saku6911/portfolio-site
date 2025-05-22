import { getWorkPosts } from "../../../services/getInformation";
import WorkClient from "./workClient";

export default async function Work() {
  const posts = await getWorkPosts();
  return <WorkClient posts={posts} />;
}
