import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

type CardInfo = {
  venueName: string;
  imgSrc: string;
  onCompare?: (venueName: string, rating: number | null) => void;
};

export default function Card(cardInfo: CardInfo) {

  return (
    <InteractiveCard>
      <div className='w-full h-[70%] relative rounded-t-lg overflow-hidden'>
        <Image
          src={cardInfo.imgSrc}
          alt="card"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className='w-full h-[15%] p-[10px]'>
        <h3 className="text-lg font-medium text-green-500 mx-3">{cardInfo.venueName}</h3>
      </div>

      {cardInfo.onCompare && (
        <Rating
          name={`${cardInfo.venueName} Rating`}
          id={`${cardInfo.venueName} Rating`}
          data-testid={`${cardInfo.venueName} Rating`}
          defaultValue={0}
          precision={0.5}
          className="mx-3 my-1"
          onClick={(event) => event.stopPropagation()}
          onChange={(e, newValue) => {
            cardInfo.onCompare?.(cardInfo.venueName, newValue);
          }}
        />
      )}
    </InteractiveCard>
  );
}
