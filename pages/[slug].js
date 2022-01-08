import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout.js';
const Post = ({ post }) => {
  return (
    <>
      <Layout>
        <section className="flex flex-col w-full flex-1 px-20  bg-blue-50 min-h-screen">
          <h1 className="text-6xl font-bold">{post[0]?.title?.rendered}</h1>
          <div
            className="flex flex-wrap  justify-around max-w-4xl mt-6 sm:w-full "
            dangerouslySetInnerHTML={{ __html: post[0]?.content?.rendered }}
          ></div>
        </section>
      </Layout>
    </>
  );
};
export default Post;

export async function getStaticPaths() {
  const result = await fetch('https://wordpress.org/news/wp-json/wp/v2/posts');
  const posts = await result.json();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const result = await fetch(
    `https://wordpress.org/news/wp-json/wp/v2/posts/?slug=${params.slug}`
  );
  const post = await result.json();
  return {
    props: { post },
  };
}
