import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "@/store/categoriesSlice";

export function AddWidgetSheet() {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleAddWidget = (categoryId) => {
    if (!widgetName.trim() || !widgetText.trim()) return;
    dispatch(addWidget({ categoryId, name: widgetName, text: widgetText }));
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline">+ Add Widget</Button>
      </SheetTrigger>
      <SheetContent className="w-1/2">
        <SheetHeader>
          <SheetTitle>Add New Widget</SheetTitle>
        </SheetHeader>

        <Tabs defaultValue={categories[0]?.id} className="mt-4">
          <TabsList className="">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="">
              <div className="grid grid-flow-row gap-4 px-2 py-4">
                <Input
                  placeholder="Widget Name"
                  value={widgetName}
                  onChange={(e) => setWidgetName(e.target.value)}
                  
                />
                <Input
                  placeholder="Widget Text"
                  value={widgetText}
                  onChange={(e) => setWidgetText(e.target.value)}
                />
                <Button onClick={() => handleAddWidget(cat.id)}>Add to {cat.name}</Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
