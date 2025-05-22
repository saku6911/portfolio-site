import { getLearningPosts } from "../../../services/getInformation";
import LearningClient from "./learningClient";

export default async function Learning() {
  const posts = await getLearningPosts();
  return <LearningClient posts={posts} />;
}
