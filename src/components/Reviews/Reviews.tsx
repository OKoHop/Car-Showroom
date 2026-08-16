import { nanoid } from 'nanoid';
import type { Review } from '../../redux/Types/VehiclesTypes';

type ReviewsProps = {
  reviews: Review[];
};

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <ul>
      {reviews.map((review: Review) => {
        return (
          <li key={nanoid()}>
            <p>{review.rating}</p>
            <p>{review.comment}</p>
            <p>{review.date}</p>
            <p>{review.reviewerName}</p>
            <p>{review.reviewerEmail}</p>
          </li>
        );
      })}
    </ul>
  );
};
