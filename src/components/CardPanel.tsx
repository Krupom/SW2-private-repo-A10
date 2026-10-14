'use client';
import Card from "./Card";
import {useReducer} from "react";
import Link from "next/link";

export default function CardPanel() {

    const compareReducer = (compareList: Map<string, number>, action: { type: string; venueName: string , rating: number }) => {
        switch (action.type) {
            case 'add':
                return new Map(compareList).set(action.venueName, action.rating);
            case 'remove':
                const newMap = new Map(compareList);
                newMap.delete(action.venueName);
                return newMap;
            default:
                return compareList;
        }
    }

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>());

    //mock data for venues
    const mockVenues = [
        { vid: "001", venueName: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg' },
        { vid: "002", venueName: 'Spark Space', imgSrc: '/img/sparkspace.jpg' },
        { vid: "003", venueName: 'The Grand Table ', imgSrc: '/img/grandtable.jpg' }
    ];

    return (
        <div>
            <div style={{ margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-around' }}>
                {mockVenues.map(venue =>
                    <Link className="w-[20%]" href={`/venue/${venue.vid}`} key={venue.vid}>
                        <Card 
                            venueName={venue.venueName} 
                            imgSrc={venue.imgSrc} 
                            onCompare={(venueName, rating) => dispatchCompare({ type: 'add', venueName, rating: rating ?? 0 })}
                        />
                    </Link>
                )}
            </div>
            <div>Venue List with Ratings: {compareList.size} </div>
            {Array.from(compareList).map(([venueName, rating]) => (
                <div key={venueName} data-testid={`${venueName}`} onClick={() => dispatchCompare({ type: 'remove', venueName, rating: 0 })}>
                    <span>{venueName}: {rating}</span>
                </div>
            ))}
        </div>
        
    )
}