import Header from "../Header/Header";

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
