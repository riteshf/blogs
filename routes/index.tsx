import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";

// component
import PostCard from "../components/PostCard.tsx";
import Container from "../layout/Container.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="my-8">
      <Container>
        {posts.map((post) => <PostCard post={post} />)}
      </Container>
    </main>
  );
}
