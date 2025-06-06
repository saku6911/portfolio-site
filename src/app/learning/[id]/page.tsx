// app/blog/[id]/page.tsx
import { getLearningPagePosts } from "../../../services/getInformation";
import { client } from "../../../libs/microcms";
import dayjs from "dayjs";
import Img from "next/image";
import SubHeader from "@/components/organisms/subHeader/page";
import { Fade } from "react-awesome-reveal";
import HeadingLg from "../../../components/atoms/heading/headingLg";

export default async function LearningPostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const id = resolvedParams.id;
  const post = await getLearningPagePosts(id);
  const formattedDate = dayjs(post.publishedAt).format("YY.MM.DD");

  return (
    <>
      <SubHeader />
      <Fade>
        <main className="max-w-3xl mx-auto px-4 py-12">
          <article>
            <HeadingLg>{post.title}</HeadingLg>
            <div className="text-sm text-gray-500 mb-6 flex items-center gap-4 border-b-1 border-solid border-b-gray-200 pb-3 max-sm:flex-col">
              <span>投稿日：{formattedDate}</span>
              {post.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category.id}
                      className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <Img
              src={post.thumbnail.url}
              alt="ブログの画像"
              width={352}
              height={211}
              sizes="(max-width: 768px) 100vw, 352px"
              priority
            />
            <div
              className="prose prose-lg max-w-none pt-3"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </article>
        </main>
      </Fade>
    </>
  );
}

export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "learning" });

  return contentIds.map((contentId) => ({
    id: contentId,
  }));
}
