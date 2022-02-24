function TextFooter({ children, bold = true }) {
  return (
    <h3 className={`text-slate-100  p-1 ${bold ? "font-semibold" : ""} `}>
      {children}
    </h3>
  );
}

export { TextFooter };
