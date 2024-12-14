import PreviewLink from "./preview-link";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container flex items-center justify-between mx-auto px-5 py-10">
        <p>
          Notes by{" "}
          <a
            href="https://kevinjosethomas.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            Kevin Thomas
          </a>
        </p>
        <a
          target="_blank"
          href="https://github.com/kevinjosethomas/knowledgebase"
          className="text-black hover:text-blue-600"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
