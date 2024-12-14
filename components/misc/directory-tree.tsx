import Link from "next/link";
import { useState } from "react";

type Directory = {
  name?: string;
  files: { slug: string; title: string }[];
  directories: Directory[];
};

type DirectoryTreeProps = {
  directory: Directory;
  activeSlug?: string;
};

const DirectoryTree = ({ directory, activeSlug }: DirectoryTreeProps) => {
  const [isOpen, setIsOpen] = useState(directory.name ? false : true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="directory">
      {directory.name && (
        <div className="flex items-center justify-between select-none">
          <p className="cursor-pointer font-bold text-lg" onClick={toggleOpen}>
            {directory.name}
          </p>
          <i
            onClick={toggleOpen}
            className="material-symbols-outlined text-sm cursor-pointer"
          >
            {isOpen ? "keyboard_arrow_down" : "keyboard_arrow_up"}
          </i>
        </div>
      )}
      {isOpen && (
        <div className="ml-2">
          {directory.files.map((file) => (
            <Link key={file.slug} href={file.slug}>
              <div className={`${activeSlug === file.slug && "font-semibold"}`}>
                {file.title}
              </div>
            </Link>
          ))}
          {directory.directories.map((subDir) => (
            <DirectoryTree key={subDir.name} directory={subDir} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DirectoryTree;
