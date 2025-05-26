import { ChildrenProps } from "@/types/types";

export default function HeadingLg({ children }: ChildrenProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold mb-4 max-sm:text-center">
      {children}
    </h1>
  );
}
