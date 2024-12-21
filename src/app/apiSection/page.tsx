import NotionClientComponent from "../common/components/NotionClientComponent";
import Footer from "../common/footer";
import Header from "../common/header";


export default function apiSection() {
  return (
    <>
    <Header />
      <div className="mx-auto max-w-7xl px-8">
        <br />
        <NotionClientComponent />
      </div>
    <Footer />
      
    </>
  );
}
