import Navigation from "../navbar/navigation";
import Footer from "../footer/footer";
export default function Layout(props) {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
