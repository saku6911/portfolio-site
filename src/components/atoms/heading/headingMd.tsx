import { ChildrenProps } from "@/types/types";
export default function HeadingMd({ children }: ChildrenProps) {
  return <h2 className="text-4xl text-blue-900">{children}</h2>;
}
