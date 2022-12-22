import { FullHeightHeader } from "./components/FullHeightHeader";
import { HeaderItem } from "./components/HeaderItem";

const Header = ({ items }) => (
  <FullHeightHeader item xs={12} md={1} sx={{ backgroundColor: "#939393" }}>
    {items.map((title) => (
      <HeaderItem key={title} title={title} />
    ))}
  </FullHeightHeader>
);
export { Header };
