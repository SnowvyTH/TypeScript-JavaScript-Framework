import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Home page of the Next.js",
};

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Hello Next.js</h1>
      <p className="text-lg text-orange-400">Lorem ipsum dolor sit amet consectetur adipisicing
       elit. Voluptatem laboriosam deserunt quae nihil error. Quisquam voluptatem aspernatur, voluptatum, fugiat veniam nobis omnis eligendi reiciendis rem assumenda inventore natus officia, quas consectetur quo numquam. Exercitationem error nobis beatae soluta perferendis placeat.</p>
    </>
  )
}