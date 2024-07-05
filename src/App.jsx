import { useState } from "react";
import "./App.css";

const faqs = [
  {
    id: "1",
    number: "01",
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: "2",
    number: "02",
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: "3",
    number: "03",
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [showMenu, setShowMenu] = useState(null);

  const show = (id) => {
    setShowMenu(showMenu === id ? null : id);
  };
  return (
    <div>
      {faqs.map((faq) => {
        return (
          <>
            <div className="accordion ">
              <div className={`${showMenu === faq.id ? "item container" : ""} `}>
                <div
                  className={`header item ${
                    showMenu === faq.id ? "header-color open" : ""
                  }`}
                  onClick={() => show(faq.id)}
                >
                  <h1
                    className={`number ${
                      showMenu === faq.id ? "header-color" : ""
                    }`}
                  >
                    {faq.number}
                  </h1>
                  <h1 className="title">{faq.title}</h1>
                  <h1>{showMenu === faq.id ? "+" : "-"}</h1>
                </div>
                {showMenu === faq.id && (
                  <p className="dropDownText text title">{faq.text}</p>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
