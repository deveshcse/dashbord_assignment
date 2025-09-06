import { useSelector } from "react-redux";
import WidgetCard from "./components/WidgetCard";
import { AddWidgetSheet } from "./components/AddWidgetSheet";
import AddWidgetCard from "./components/AddWidgetCard";

function App() {
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  return (
   <>
  <div className="bg-blue-50 min-h-screen px-5">
    <div className="flex items-center justify-end py-4">
      <AddWidgetSheet />
    </div>

    {categories.map((category) => (
      <div key={category.id} className="w-full mb-6">
        <p className="text-lg font-semibold p-2">{category.name}</p>
        
        <div className="grid md:grid-cols-4 flex-wrap gap-5">
          {category.widgets.map((widget) => (
            <WidgetCard key={widget.widgetId} data={widget} categoryId={category.id}/>
          ))}
           <AddWidgetCard />
        </div>
      </div>
    ))}
  </div>
</>

  );
}

export default App;
