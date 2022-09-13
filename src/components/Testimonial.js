import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Testimonial = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("Page.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
}

export default Testimonial
