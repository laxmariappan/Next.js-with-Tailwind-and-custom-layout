import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Layout from '../components/Layout.js';
const SSR = ({ posts }) => {
  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-blue-50">
          <h1 className="text-6xl font-bold">WordPress News</h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
            {posts &&
              posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-white"
                >
                  <Link href={`post/${post.slug}`}>
                    <a href="#">{post.title.rendered}</a>
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SSR;

export async function getServersideProps({context}) {
  const limit = context.limit || 5
  const result = await fetch(`https://wordpress.org/news/wp-json/wp/v2/posts?per_page=${limit}`);
  const posts = await result.json();
  return {
    props: { posts },
  };
}
