import React from "react";
import {Card, CardBody, Image, CardFooter} from "@nextui-org/react";

export default function ArticleCard() {
  return (
    <Card className="py-4 w-3/4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daniel E. Bwere --- 2023/10/12</p>
        <small className="text-default-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga debitis aut possimus aperiam. Ipsam nobis nostrum, animi non sapiente, architecto amet id veniam voluptate eaque laboriosam impedit placeat eum tempore.</small>
        <h4 className="font-bold text-large">Crafting an authentic budget</h4>
      </CardFooter>
    </Card>
  );
}
