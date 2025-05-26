import { ChildrenProps } from "@/types/types";
export default function Label({ children, id }: ChildrenProps) {
  return (
    <label
      key={id}
      className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      {children}
    </label>
  );
}
