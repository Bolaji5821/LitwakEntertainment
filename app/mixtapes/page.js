import Banner from "@/components/Banner";
import MixtapeGrid from "@/components/mixtapes/MixtapeGrid";

export default function MixtapesPage() {
  return (
    <div>
      <Banner 
        title="Mixtapes" 
        subtitle="Discover our latest beats and mixes" 
        image="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
      />
      <MixtapeGrid />
    </div>
  );
}