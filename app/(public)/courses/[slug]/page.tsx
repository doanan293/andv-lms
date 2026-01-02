import { getIndividualCourse } from "@/app/data/course/get-course";
import { useConstructUrl } from "@/hooks/use-construct-url";
import { env } from "@/lib/env";
import Image from "next/image";

type Params = Promise<{ slug: string }>;

export default async function SlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const course = await getIndividualCourse(slug);
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-5">
      <div className="order-1 lg:col-span-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={`https://${env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES}.t3.storage.dev/${course.fileKey}`}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
