import { Title } from "./components/title";
import Layout from "./layout";

export function About() {
  return (
    <Layout
      title="About"
      className="w-full mx-auto py-6 px-3 space-y-10 lg:max-w-screen-md"
    >
      <div class="space-y-6">
        <section>
          <Title>About</Title>
          <a href="/" class="underline underline-offset-4 text-blue-700">
            Go back home
          </a>
        </section>
      </div>
    </Layout>
  );
}
