import Image from "next/image";

type GuideVisualProps = {
  src: string;
  alt: string;
  caption: string;
};

export function GuideVisual({ src, alt, caption }: GuideVisualProps) {
  return (
    <figure className="mt-8 overflow-hidden rounded-lg border-2 border-[#7c4d2e]/55 bg-[#fff8e8] shadow-sm">
      <div className="overflow-x-auto">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="block h-auto w-full min-w-[900px] sm:min-w-0"
          sizes="(min-width: 1152px) 1104px, (min-width: 640px) calc(100vw - 48px), 900px"
        />
      </div>
      <figcaption className="border-t border-[#8a5b3a]/30 px-4 py-3 text-sm leading-6 text-[#5f4228]/85">
        {caption}
      </figcaption>
    </figure>
  );
}
