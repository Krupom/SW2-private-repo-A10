
export default async function getVenues(): Promise<VenueJson> {
    
    const response = await fetch('https://a08-venue-explorer-backend.vercel.app/api/v1/venues');
    if (!response.ok) {
        throw new Error(`fail to fetch venues with status: ${response.status}`);
    }
    const data : VenueJson = await response.json();
    return data;
}