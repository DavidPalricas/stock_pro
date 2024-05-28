import Sidebar from "../components/Sidebar";
import Card from "../components/product_card";

export default function About() {
    return (
        <>
            <Sidebar active="about"/>
            <Card name = "Women Bag" price="50" quantity="10"/>
        </>
    );
}