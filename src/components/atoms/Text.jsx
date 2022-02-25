function TextFooter({ children, bold = true }) {
  return (
    <h3 className={`text-slate-100  p-1 ${bold ? "font-semibold" : ""} `}>
      {children}
    </h3>
  );
}

function TextAuthor({ children }) {
  return <h2 className="text-slate-500 my-1">{children}</h2>;
}

function TextDescription({ children }) {
  return <h6 className="news-desc text-slate-300">{children}</h6>;
}

function TextHero({ greetings = false, children }) {
  return (
    <h1
      className={`${
        greetings
          ? "font-bold text-slate-50 text-3xl p-2"
          : "font-semibold text-slate-300 text-lg p-1"
      }`}
    >
      {children}
    </h1>
  );
}

export { TextFooter, TextAuthor, TextDescription, TextHero };
