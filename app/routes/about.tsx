import { MetaFunction } from "remix";
import { Hero } from "~/components/Hero";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = () => {
  return {
    description: SITE_DESCRIPTION,
    title: `About | ${SITE_TITLE}`
  };
};

export default function About() {
  return (
    <main>
      <Hero copy="A problem solver 🤔" highlight="Matthew Scholta" />
    </main>
  );
}
