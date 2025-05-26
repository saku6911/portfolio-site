import { ChildrenProps } from "@/types/types";
export default function HeadingSm({ children }: ChildrenProps) {
  return <h3 className="font-bold text-xl h-14">{children}</h3>;
}
