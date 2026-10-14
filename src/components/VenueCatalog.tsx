import Link from "next/link";
import Card from "./Card"
export default async function VenueCatalog({venuesJson}: { venuesJson: Promise<VenueJson> }) {
    const venues = await venuesJson;
    return (
        <div>
            Explore {venues.count} venues in our catalog.
            <div style={{ margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-around' }}>
                {venues.data.map(venue =>
                    <Link className="w-[20%]" href={`/venue/${venue.id}`} key={venue.id}>
                        <Card 
                            venueName={venue.name} 
                            imgSrc={venue.picture} 
                        />
                    </Link>
                )}
            </div>
        </div>
    );
}