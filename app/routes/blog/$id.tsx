import { Link, useParams } from "remix";
import { Hero } from "~/components/Hero";

export default function About() {
  // Hooks
  const { id } = useParams();

  // Styles
  const cssSection = `section-full flex flex-col items-center justify-center max-w-6xl gap-20`;
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

  return (
    <main>
      <section className={cssSection} id="section-1">
        <Hero
          className="mx-auto max-w-6xl"
          copy="June 2022"
          highlight={`Blog post #${id}`}
        />
        <Link to={`/blog/${id}/#section-2`}>Continue</Link>
      </section>

      <div className="section-anchor" id="section-2" />
      <section className={cssSection}>
        <h2 className={cssHeading}>Blog Post #{id}</h2>
      </section>
    </main>
  );
}
