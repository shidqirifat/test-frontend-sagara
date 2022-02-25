import { TextFooter } from "../atoms/Text";

export default function Footer({ heightScreen }) {
  return (
    <div
      className={`p-3 text-center bg-slate-900 text-slate-100 w-full ${
        heightScreen ? "fixed bottom-0" : ""
      }`}
    >
      <TextFooter>© Create by Shidqi Rifat Pangestu</TextFooter>
      <TextFooter bold={false}>Frontend Intern at Sagara Technology</TextFooter>
    </div>
  );
}
