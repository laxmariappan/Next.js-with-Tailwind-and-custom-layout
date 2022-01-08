import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout.js';
const Fetch = ({ posts }) => {
  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-blue-50">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
            {posts &&
              posts.map((post) => (
                <p key={post.id}>
                  <a href={post.slug}>{post.title.rendered}</a>
                </p>
              ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Fetch;

export async function getStaticProps() {
  const result = await fetch('https://wordpress.org/news/wp-json/wp/v2/posts');
  const posts = await result.json();
  return {
    props: { posts },
  };
}
