import { Carousel, CarouselProps, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ICarouselImages extends CarouselProps {
  images?: { image: StaticImageData }[];
  auto?: boolean;
}

const StyledCarousel = styled(Carousel)`
  ul.slick-dots.slick-dots-bottom {
    ${tw`bottom-[-20px]`}
  }

  ul.slick-dots.slick-dots-bottom > li button {
    ${tw`dark:bg-secondaryDark w-[3px] scale-150 rounded-full`}
  }

  ul.slick-dots li,
  ul.slick-dots li.slick-active {
    ${tw`w-0 mx-[5px]`}
  }
`;

export const CImages: FC<ICarouselImages> = ({
  images,
  auto = false,
  ...props
}) => {
  return (
    <React.Fragment>
      <StyledCarousel {...props} autoplay={auto}>
        {!!images &&
          images.map((item, idx) => (
            <Image
              key={idx}
              alt="carousel-image"
              src={item.image}
              className="object-cover"
            />
          ))}
        {!images && (
          <Typography.Title className="dark:text-white text-black">
            No Image!
          </Typography.Title>
        )}
      </StyledCarousel>
    </React.Fragment>
  );
};
