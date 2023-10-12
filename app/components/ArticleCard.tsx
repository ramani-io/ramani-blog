import React from "react";
import {Card, CardBody, Image, CardFooter} from "@nextui-org/react";
import { Article } from "../models/mockData";

interface Props {
    article: Article;
}

export default function ArticleCard({article}: Props) {
  return (
    <Card className="py-4 w-3/4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={article.image_url}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{article.author}</p>
        <small className="text-default-500">{article.body}</small>
        <h4 className="font-bold text-large">{article.title}</h4>
      </CardFooter>
    </Card>
  );
}
