import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import styled from "styled-components";
import Delayed from "../features/Delayed";

export default function ProductsGrid({ data }) {
  return (
    <Delayed waitBeforeShow={500}>
      <Wrapper>
        {data.map((product, index) => (
          <ElementWrapper key={index}>
            <NextLink
              href="/products/[slug]"
              as={`/products/${product.fields.id}`}
            >
              <a>
                <ImageProject>
                  <Image
                    className="z-10 object-cover"
                    src={product.fields.imageurl[0]}
                    quality="50"
                    priority="true"
                    layout="fill"
                  />
                </ImageProject>
              </a>
            </NextLink>
          </ElementWrapper>
        ))}
      </Wrapper>
    </Delayed>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  grid-gap: 0px;
  z-index: 10;
`;

const ElementWrapper = styled.div`
  position: relative;

  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const ImageProject = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
`;
