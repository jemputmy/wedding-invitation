import Image from "next/image";

export function BaseBackground() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[5/7] shadow-md rounded-lg overflow-hidden mb-2">
      <Image
        src="https://drive.google.com/uc?export=view&id=12aNpSc9r0CUrx29taCAO6cEQOujoSoCx"
        alt="Canva Design"
        fill
        className="object-contain"
        priority
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
}

export default BaseBackground
