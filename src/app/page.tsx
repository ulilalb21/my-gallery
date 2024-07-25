import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={"image-" + index + "-key"} className="w-48">
            <Image src={image.url} alt={image.name} width="480" height={320} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
