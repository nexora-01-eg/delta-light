import HeroExperience from "@/components/HeroExperience";
import ProductStory from "@/components/ProductStory";
import MaterialExperience from "@/components/MaterialExperience";
import CollectionExperience from "@/components/CollectionExperience";
import RoomVisualizer from "@/components/RoomVisualizer";
import ShowroomTeaser from "@/components/ShowroomTeaser";
import ContactFinal from "@/components/ContactFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroExperience />
      <ProductStory />
      <MaterialExperience />
      <CollectionExperience />
      <RoomVisualizer />
      <ShowroomTeaser />
      <ContactFinal />
      <Footer />
    </main>
  );
}
