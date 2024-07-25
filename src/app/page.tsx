import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <Image src={image.url} alt="image" width="480" height={320} />
          </div>
        ))}
      </div>
    </main>
  );
}
