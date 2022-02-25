function TitleCard({ children }) {
  return (
    <h1 className="text-center text-2xl text-slate-100 font-bold">
      {children}
    </h1>
  );
}

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

function TitleNews({ children }) {
  return <h2 className="news-title font-semibold text-xl">{children.title}</h2>;
}

function TitleDetail({ children }) {
  return <h1 className="font-bold text-slate-50 text-2xl mb-1">{children}</h1>;
}

function PublisherDetail({ children }) {
  return <h1 className="text-slate-400 text-lg mb-1">{children}</h1>;
}

function AuthorDetail({ children }) {
  return (
    <h1 className="text-slate-100 font-semibold mt-1 mb-3 text-lg">
      {children}
    </h1>
  );
}

function DescriptionDetail({ children }) {
  return <h1 className="text-slate-300">{children}</h1>;
}

function LinkSourceDetail({ link, children }) {
  return (
    <>
      <h1 className="mt-8 text-slate-300 text-lg">
        Full News:{" "}
        <a
          href={link}
          target="_blank"
          className="text-sky-500 w-full hover:text-sky-600"
        >
          {children ? children : "Click Here!"}
        </a>
      </h1>
    </>
  );
}

function TextHero({ greetings = false, children }) {
  return (
    <h1
      className={`${
        greetings
          ? "font-bold text-slate-50 text-3xl pb-4 mx-10"
          : "font-semibold text-slate-300 text-lg mx-12"
      }`}
    >
      {children}
    </h1>
  );
}

export {
  TextFooter,
  TextAuthor,
  TextDescription,
  TextHero,
  TitleDetail,
  PublisherDetail,
  AuthorDetail,
  DescriptionDetail,
  LinkSourceDetail,
  TitleNews,
  TitleCard,
};
