import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function MenuLink() {
  return (
    <div className="py-1">
      {["Profile", "Skill", "Work", "Learning"].map((label, i) => (
        <Menu.Item key={i}>
          {({ active }) => (
            <Link
              href={`#${label.toLowerCase()}`}
              className={`block px-4 py-2 text-sm ${
                active ? "bg-gray-100" : ""
              }`}
            >
              {label}
            </Link>
          )}
        </Menu.Item>
      ))}
    </div>
  );
}
