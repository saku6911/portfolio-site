import { ChildrenProps } from "@/types/types";

export default function HeadingMainvisual({ children }: ChildrenProps) {
  return (
    <h1 className="text-4xl md:text-6xl font-semibold tracking-widest leading-normal">
      {children}
    </h1>
  );
}
