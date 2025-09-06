import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "@/store/categoriesSlice";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const WidgetCard = ({ data, categoryId }) => {
  const dispatch = useDispatch();
  const { widgetId, name, text } = data;
  return (
    <div className="relative h-36 rounded-lg  bg-white shadow-lg flex flex-col items-start justify-center p-10 text-wrap  ">
      <h1>{name}</h1>
      <p>{text}</p>
      <Button
        size="icon"
        variant="outline"
        className="absolute top-2 right-2"
        onClick={() => dispatch(removeWidget({ categoryId, widgetId }))}
      >
        <X />
      </Button>
    </div>
  );
};

export default WidgetCard;
