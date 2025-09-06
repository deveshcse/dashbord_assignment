import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: "c1",
      name: "CSPM",
      widgets: [
        {
          widgetId: "w1",
          name: "Widget 1",
          text: "This is the first widget for CSPM Executive Dashboard.",
        },
        {
          widgetId: "w2",
          name: "Widget 2",
          text: "Second widget with some random text.",
        },
      ],
    },
    {
      id: "c2",
      name: "CWPP",
      widgets: [
        {
          widgetId: "w3",
          name: "Widget A",
          text: "Compliance widget example.",
        },
      ],
    },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const category = { id: nanoid(), name: action.payload, widgets: [] };
      state.categories.push(category);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },

    addWidget: (state, action) => {
      const { categoryId, name, text } = action.payload;
      const category = state.categories.find(
        (category) => category.id === categoryId
      );
      const widget = { widgetId: nanoid(), name, text };
      if (category) {
        category.widgets.push(widget);
      }
    },

    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
        state.categories = state.categories.map((category)=>{
            if(category.id === categoryId){
                return {...category, widgets: category.widgets.filter((widget)=> widget.widgetId !== widgetId)}
            }
            else return category
        })
    },
  },
});

export const { addCategory, removeCategory, addWidget, removeWidget } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
